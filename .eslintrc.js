// module.exports = {
//   root: true,
//   // This tells ESLint to load the config from the package `eslint-config-custom`
//   extends: ["@gitwonk/eslint-config"],
//   settings: {
//     next: {
//       rootDir: ["apps/*/"],
//     },
//   },
// };
module.exports = require("./packages/config/eslint-preset");
