import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";

export type Block =
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "comment"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; rows: string[][] };

const clean = (text: string) => text.replace(/\\([.#|])/g, "$1").trim();

function headingId(text: string) {
  return clean(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function readArticle(slug: string) {
  // El slug llega de la lista cerrada de data.ts; el nombre de archivo no se toma de la URL sin validar.
  const source = readFileSync(join(process.cwd(), "src", "content", "blog", "articles", `${slug}.md`), "utf8");
  const lines = source.replace(/\r/g, "").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line || line === "---") { i++; continue; }

    if (line.startsWith("<!--")) {
      const comment = [line];
      while (!comment[comment.length - 1].includes("-->")) {
        i++;
        if (i >= lines.length) throw new Error(`Comentario HTML sin cierre en ${slug}.md`);
        comment.push(lines[i]);
      }
      const source = comment.join("\n");
      const close = source.indexOf("-->");
      if (source.slice(close + 3).trim()) throw new Error(`Texto después de comentario HTML en ${slug}.md`);
      blocks.push({ type: "comment", text: source.slice(4, close) });
      i++;
      continue;
    }

    const heading = /^(#{2,3})\s+(.+)$/.exec(line);
    if (heading) {
      const text = clean(heading[2]);
      blocks.push({ type: "heading", level: heading[1].length as 2 | 3, text, id: headingId(text) });
      i++;
      continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i].trim().replace(/^\||\|$/g, "").split("|").map(clean);
        if (!cells.every((cell) => /^:?-{3,}:?$/.test(cell))) rows.push(cells);
        i++;
      }
      blocks.push({ type: "table", rows });
      continue;
    }

    const ordered = /^\d+\.\s+/.test(line);
    if (ordered || /^[-*]\s+/.test(line)) {
      const items: string[] = [];
      const matcher = ordered ? /^\d+\.\s+(.+)$/ : /^[-*]\s+(.+)$/;
      while (i < lines.length) {
        const match = matcher.exec(lines[i].trim());
        if (!match) break;
        items.push(clean(match[1]));
        i++;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    if (line.startsWith(">")) {
      blocks.push({ type: "quote", text: clean(line.replace(/^>\s?/, "")) });
      i++;
      continue;
    }

    const paragraph: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(<!--|#{2,3}\s|\||[-*]\s|\d+\.\s|>\s|---$)/.test(lines[i].trim())) {
      paragraph.push(lines[i].trim());
      i++;
    }
    if (paragraph.length) blocks.push({ type: "paragraph", text: clean(paragraph.join(" ")) });
    else i++;
  }
  return blocks;
}

const inlinePattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`)/g;

function inline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let from = 0;
  for (const match of text.matchAll(inlinePattern)) {
    const index = match.index ?? 0;
    if (index > from) nodes.push(text.slice(from, index).replace(/\\([.#|])/g, "$1"));
    if (match[2] && match[3]) {
      const href = match[3];
      nodes.push(/^\/(?!\/)|^https:\/\//.test(href)
        ? <a key={index} href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}>{match[2]}</a>
        : match[2]);
    } else if (match[4]) nodes.push(<strong key={index}>{match[4]}</strong>);
    else if (match[5]) nodes.push(<em key={index}>{match[5]}</em>);
    else if (match[6]) nodes.push(<code key={index}>{match[6]}</code>);
    from = index + match[0].length;
  }
  if (from < text.length) nodes.push(text.slice(from).replace(/\\([.#|])/g, "$1"));
  return nodes;
}

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return <div className="blog-prose">
    {blocks.map((block, index) => {
      if (block.type === "comment") return <template key={index} dangerouslySetInnerHTML={{ __html: `<!--${block.text}-->` }} />;
      if (block.type === "heading") {
        return block.level === 2
          ? <h2 key={index} id={block.id}>{block.text}</h2>
          : <h3 key={index} id={block.id}>{block.text}</h3>;
      }
      if (block.type === "paragraph") return <p key={index}>{inline(block.text)}</p>;
      if (block.type === "quote") return <blockquote key={index}>{inline(block.text)}</blockquote>;
      if (block.type === "list") {
        const items = block.items.map((item, itemIndex) => <li key={itemIndex}>{inline(item)}</li>);
        return block.ordered ? <ol key={index}>{items}</ol> : <ul key={index}>{items}</ul>;
      }
      const [header, ...rows] = block.rows;
      return <div className="blog-table-wrap" key={index}><table><thead><tr>{header.map((cell, cellIndex) => <th key={cellIndex}>{inline(cell)}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inline(cell)}</td>)}</tr>)}</tbody></table></div>;
    })}
  </div>;
}

export function articleSections(blocks: Block[]) {
  return blocks.filter((block): block is Extract<Block, { type: "heading" }> => block.type === "heading" && block.level === 2);
}

export function articleFaqSection(blocks: Block[]) {
  const start = blocks.findIndex((block) => block.type === "heading" && block.level === 2 && block.text === "Preguntas frecuentes");
  if (start < 0) return null;
  const nextHeading = blocks.findIndex((block, index) => index > start && block.type === "heading" && block.level === 2);
  const end = nextHeading < 0 ? blocks.length : nextHeading;
  const faqBlocks = blocks.slice(start + 1, end);
  const items: { question: string; id: string; answerBlocks: Block[]; answer: string }[] = [];

  for (const block of faqBlocks) {
    if (block.type === "heading" && block.level === 3) {
      items.push({ question: block.text, id: block.id, answerBlocks: [], answer: "" });
    } else if (items.length) {
      items[items.length - 1].answerBlocks.push(block);
    }
  }
  for (const item of items) {
    item.answer = item.answerBlocks.filter((block): block is Extract<Block, { type: "paragraph" }> => block.type === "paragraph").map((block) => block.text).join(" ");
  }

  return { before: blocks.slice(0, start), heading: blocks[start] as Extract<Block, { type: "heading" }>, items, after: blocks.slice(end) };
}
