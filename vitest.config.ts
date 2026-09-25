import { resolve } from 'node:path'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Los smoke tests de scripts usan node:test y se ejecutan tras la build.
    exclude: ['**/node_modules/**', 'src/tests/**', 'scripts/**/*.test.mjs'],
    environment: 'node',
  },
  resolve: {
    alias: {
      '~': resolve(import.meta.dirname, 'src'),
    },
  },
})
