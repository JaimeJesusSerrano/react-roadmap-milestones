import love from 'eslint-config-love'

/** @type {any} */
const config = [
  {
    ...love,
    files: ['**/*.js', '**/*.ts'],
    ignores: ['dist', 'node_modules'],
    // rules: {
    //   // Tus reglas personalizadas aquí
    // },
  },
]

export default config
