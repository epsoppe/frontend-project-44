import stylistic from '@stylistic/eslint-plugin-js';

export default [
  {
    plugins: {
      '@stylistic/js': stylistic,
    },
    rules: {
      // Стилистические правила (проверка отступов, кавычек и т.д.)
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'always'],
      // Базовые правила (запрет неиспользуемых переменных и т.д.)
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];