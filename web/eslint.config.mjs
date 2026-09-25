import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Output generado por "netlify deploy --build" localmente (gitignoreado,
    // no existe en un checkout limpio) — sin esto, lint escanea el JS
    // bundleado de terceros dentro de .netlify/ y tira miles de falsos positivos.
    ".netlify/**",
  ]),
]);

export default eslintConfig;
