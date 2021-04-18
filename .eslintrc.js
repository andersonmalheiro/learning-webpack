module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'import/no-unresolved': 'off',
    'comma-dangle': 'off',
    'no-console': 'off'
  },
};
