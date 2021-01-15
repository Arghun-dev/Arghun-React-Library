module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint-config-prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [0],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        semi: false,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
  },
}
