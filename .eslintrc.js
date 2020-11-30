module.exports = {
  root: true,
  plugins: ['jest', 'react', 'unused-imports'],
  env: {
    es2020: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '(^_)',
        args: 'after-used',
        argsIgnorePattern: '(^_)',
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
}
