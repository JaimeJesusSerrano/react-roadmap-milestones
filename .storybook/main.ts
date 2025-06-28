import type { StorybookConfig } from '@storybook/react-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path'

export const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite')
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      resolve: {
        alias: {
          "@/assets": resolve(__dirname, '../src/assets'),
          "@/components": resolve(__dirname, '../src/components'),
          "@/config": resolve(__dirname, '../src/config'),
          "@/store": resolve(__dirname, '../src/store'),
          "@/types": resolve(__dirname, '../src/types'),
        },
      },
    })
  }
}

export default config
