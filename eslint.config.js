import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginImportX from 'eslint-plugin-import-x'
import pluginPromise from 'eslint-plugin-promise'
import pluginTestingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'
import js from '@eslint/js'
import pluginStylistic from '@stylistic/eslint-plugin'
import parserTypescript from '@typescript-eslint/parser'
import pluginTypescript from '@typescript-eslint/eslint-plugin'

export default [
  js.configs.recommended,
  pluginImportX.flatConfigs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPromise.configs['flat/recommended'],
  pluginJsxA11y.flatConfigs.recommended,
  pluginStylistic.configs['recommended-flat'],
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: parserTypescript,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      pluginReactHooks,
      '@typescript-eslint': pluginTypescript,
    },
    rules: {
      'import-x/no-unresolved': 'off',
      'react/jsx-sort-props': 'error',
      'react/react-in-jsx-scope': 'off',
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
      '**/package-lock.json',
    ],
  },
]
