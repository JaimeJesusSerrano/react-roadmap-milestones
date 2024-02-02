module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/all'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // 'multiline-ternary': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // 'react/jsx-uses-react': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-max-depth': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens',
      return: 'parens-new-line',
      arrow: 'parens',
      condition: 'parens-new-line',
      logical: 'ignore',
      prop: 'ignore'
    }],
    'react/no-multi-comp': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off'
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ]
}
