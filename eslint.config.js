import love from 'eslint-config-love'

/** @type {any} */
const config = [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    ...love,
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      ...love.rules,
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
]

export default config
