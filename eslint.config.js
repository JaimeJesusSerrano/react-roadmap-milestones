import love from 'eslint-config-love'

/** @type {any} */
const config = [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    ...love,
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    // rules: {
    //   // Tus reglas personalizadas aquí
    // },
  },
]

export default config
