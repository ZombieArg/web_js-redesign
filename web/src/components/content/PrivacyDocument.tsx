import type { ReactNode } from "react";

const EMAIL = "hola@datavoices.com.ar";

function linkEmails(text: string, key: string): ReactNode[] {
  const chunks = text.split(EMAIL);
  const nodes: ReactNode[] = [];
  chunks.forEach((chunk, index) => {
    if (chunk) nodes.push(chunk);
    if (index < chunks.length - 1) {
      nodes.push(
        <a key={`${key}-mail-${index}`} href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>,
      );
    }
  });
  return nodes;
}

function inline(text: string, key: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, index) => {
    const bold = part.startsWith("**") && part.endsWith("**");
    const value = bold ? part.slice(2, -2) : part;
    const nodes = linkEmails(value, `${key}-${index}`);
    return bold ? <strong key={`${key}-${index}`}>{nodes}</strong> : <span key={`${key}-${index}`}>{nodes}</span>;
  });
}

type Block =
  | { kind: "h1" | "h2"; text: string }
  | { kind: "p"; lines: string[] }
  | { kind: "ul"; items: string[] };

export function parsePolicy(source: string): Block[] {
  const lines = source.replace(/\r/g, "").split("\n");
  const blocks: Block[] = [];
  let index = 0;
  while (index < lines.length) {
    const raw = lines[index];
    const trimmed = raw.trim();
    if (!trimmed || trimmed === "---") {
      index += 1;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      blocks.push({ kind: "h2", text: trimmed.slice(3).trim() });
      index += 1;
      continue;
    }
    if (trimmed.startsWith("# ")) {
      blocks.push({ kind: "h1", text: trimmed.slice(2).trim() });
      index += 1;
      continue;
    }
    if (trimmed.startsWith(">")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        items.push(lines[index].trim().replace(/^>\s*\*\s?/, "").trim());
        index += 1;
      }
      blocks.push({ kind: "ul", items });
      continue;
    }
    const paragraph: string[] = [];
    while (index < lines.length) {
      const current = lines[index];
      const text = current.trim();
      if (!text || text === "---" || text.startsWith("#") || text.startsWith(">")) break;
      paragraph.push(text);
      index += 1;
      if (!current.endsWith("  ")) break;
    }
    blocks.push({ kind: "p", lines: paragraph });
  }
  return blocks;
}

export function PrivacyDocument({ source }: { source: string }) {
  const blocks = parsePolicy(source);
  const h1 = blocks.find((block) => block.kind === "h1");
  const rest = blocks.filter((block) => block.kind !== "h1");
  return (
    <>
      {h1 && h1.kind === "h1" ? (
        <h1 className="max-w-[760px] text-headline-md text-brand-navy desktop:text-headline-lg">
          {inline(h1.text, "h1")}
        </h1>
      ) : null}
      <div className="blog-prose mt-8 max-w-[68ch]">
        {rest.map((block, index) => {
          if (block.kind === "h2") return <h2 key={index}>{inline(block.text, `h2-${index}`)}</h2>;
          if (block.kind === "ul") {
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{inline(item, `li-${index}-${itemIndex}`)}</li>
                ))}
              </ul>
            );
          }
          if (block.kind === "p") {
            return (
              <p key={index}>
                {block.lines.map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {lineIndex > 0 ? <br /> : null}
                    {inline(line, `p-${index}-${lineIndex}`)}
                  </span>
                ))}
              </p>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
