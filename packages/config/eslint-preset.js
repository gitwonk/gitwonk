/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,
  extends: ["next", "turbo", "prettier"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
  },
  rules: {
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "off",
    "jsx-a11y/role-supports-aria-props": "off", // @see https://github.com/vercel/next.js/issues/27989#issuecomment-897638654
    // "react/jsx-curly-brace-presence": [
    //   "error",
    //   { props: "never", children: "never" },
    // ],
    // "react/self-closing-comp": ["error", { component: true, html: true }],
    // TODO: remove this rule later
    "turbo/no-undeclared-env-vars": "off",
  },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
