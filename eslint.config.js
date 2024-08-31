import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginImport from 'eslint-plugin-import'
import pluginPromise from 'eslint-plugin-promise'
import pluginTestingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'
import js from '@eslint/js'
import pluginStylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPromise.configs['flat/recommended'],
  pluginJsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: typescriptEslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      pluginReactHooks,
      pluginImport,
      '@typescript-eslint': typescriptEslint.plugin,
      '@stylistic': pluginStylistic,
    },
    rules: {
      'react/jsx-sort-props': 'error',
      'react/react-in-jsx-scope': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}'],
    ...pluginTestingLibrary.configs['flat/react'],
  },
  {
    ignores: [
      '**/dist',
      '!.storybook',
      '**/.vscode/',
      '**/node_modules',
      '**/package.json',
      '**/package-lock.json'
    ],
  },
]
