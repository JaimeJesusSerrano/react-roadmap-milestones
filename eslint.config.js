import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginImportX from 'eslint-plugin-import-x'
import pluginPromise from 'eslint-plugin-promise'
import pluginTestingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'
import js from '@eslint/js'
import pluginStylistic from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginTypescript from '@typescript-eslint/eslint-plugin'

export default [
  js.configs.recommended,
  pluginImportX.flatConfigs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPromise.configs['flat/recommended'],
  pluginJsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      pluginReactHooks,
      '@typescript-eslint': pluginTypescript,
      '@stylistic': pluginStylistic,
    },
    rules: {
      'import-x/no-unresolved': 'off',
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
      }
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
