import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom override for unused-vars rule
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // 👈 Disables the rule
    },
  },
];

export default eslintConfig;
