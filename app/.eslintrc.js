module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier', 'jest'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off', // Since we do not use prop-types
    'react/require-default-props': 'off', // Since we do not use prop-types
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'global-require': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/ban-types': 'off',
    'no-restricted-syntax': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-globals': 'off',
    'no-useless-escape': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'no-param-reassign': 'off',
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'linebreak-style': ['off', 'unix'],
    'arrow-body-style': 'off',
    'max-len': ["error", { "code": 200 }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
