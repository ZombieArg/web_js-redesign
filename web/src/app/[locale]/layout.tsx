import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildOrgNode, buildWebsiteNode } from "@/lib/seo/graphs/org";
import { CeciliaWidgetLoader } from "@/components/cecilia/CeciliaWidgetLoader";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://datavoices.com.ar"),
  title: { default: "Data Voices", template: "%s | Data Voices" },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <NextIntlClientProvider>
          <JsonLd data={{ "@context": "https://schema.org", "@graph": [buildOrgNode(), buildWebsiteNode()] }} />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
          >
            Saltar al contenido
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CeciliaWidgetLoader />
          <Toaster position="top-right" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
