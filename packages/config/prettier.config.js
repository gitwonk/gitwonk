/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  bracketSameLine: true,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: "all",
  importOrder: [
    "^(next/(.*)$)|^(next$)",
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "^@(gitwonk|ee)/(.*)$",
    "^@/components/(.*)$|^components/(.*)$",
    "^@/lib/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss", // MUST BE LAST
  ],
};
