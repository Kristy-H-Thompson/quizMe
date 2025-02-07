import { defineConfig } from 'cypress';
import viteCongig from './vite.config'
export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: viteCongig
    },
    supportFile: 'cypress/support/component.ts', // Add support file for component tests
  },
  e2e: {
    baseUrl: 'http://localhost:3001', // Update with your local server URL
    supportFile: 'cypress/support/e2e.ts', // Add support file for e2e tests
  },
});