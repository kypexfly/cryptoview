/* eslint-disable camelcase */
/* eslint-disable react/prop-types */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-undef': 'off',
    'no-unused-vars': 'off',
    camelcase: 'error',
    'no-duplicate-imports': 'error',
    'react/prop-types': 'off',
    quotes: ['error', 'single'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
