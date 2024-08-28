import configLove from 'eslint-config-love'
import react from 'eslint-plugin-react'
// import globals from "globals";
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  {
    ignores: [
      '**/dist',
      '!.storybook',
      '**/.vscode/',
      '**/node_modules',
      '**/package.json',
      '**/package-lock.json',
      'eslint.config.js'
    ]
  },
  ...compat.extends("plugin:react/all"),
  {
    plugins: {
      react
    },

    languageOptions: {
      // globals: {
      //     ...globals.browser,
      //     ...globals.node,
      // },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ...configLove,
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx']
  },
  {
      files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-import-type-side-effects": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "multiline-ternary": "off",

        "react/jsx-filename-extension": [2, {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }],
        "react/jsx-max-depth": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-no-literals": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-wrap-multilines": [2, {
            declaration: "parens-new-line",
            assignment: "parens",
            return: "parens-new-line",
            arrow: "parens",
            condition: "parens-new-line",
            logical: "ignore",
            prop: "ignore",
        }],

        "react/no-multi-comp": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
      },
  }
]
