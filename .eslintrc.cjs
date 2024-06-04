/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: ["eslint:recommended", 'plugin:prettier/recommended'],
  parserOptions: {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ["import"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        // bracketSameLine: false,
        // printWidth: 100,
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        trailingComma: 'es5',
        arrowParens: 'avoid',
      },
    ],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'prefer-template': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'curly': 'error',
    'jest/no-disabled-tests': 'off',
    // 'max-len': ['error', { code: 80 }],
  }
}