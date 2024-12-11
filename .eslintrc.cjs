const vitest = require('eslint-plugin-vitest');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "@titicaca/eslint-config-triple",
    "@titicaca/eslint-config-triple/requiring-type-checking",
    "@titicaca/eslint-config-triple/frontend",
    "@titicaca/eslint-config-triple/prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-console": "warn"
  },
  globals: {
    ...vitest.default.environments.env.globals,
  },
};
