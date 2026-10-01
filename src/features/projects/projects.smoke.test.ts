import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

const DIST = join(process.cwd(), 'dist')
const hasBuild = existsSync(DIST)

describe.skipIf(!hasBuild)('Precio Luz project', () => {
  const projectPath = join(DIST, 'projects', 'precio-luz', 'index.html')

  it('builds the public project page', () => {
    expect(existsSync(projectPath), `Missing: ${projectPath}`).toBe(true)
  })

  it('links to the live utility from its project page', () => {
    const html = readFileSync(projectPath, 'utf-8')

    expect(html).toContain('https://precioluz.polgubau.com/')
    expect(html).toContain('Precio Luz')
  })

  it('links to project pages from the home project section', () => {
    const home = readFileSync(join(DIST, 'index.html'), 'utf-8')

    expect(home).toMatch(/href="\/projects\/[a-z0-9-]+/)
  })
})
