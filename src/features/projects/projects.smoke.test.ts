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

describe.skipIf(!hasBuild)('Energy CRM content paths', () => {
  it('connects the Optinergia case, service page, and guide', () => {
    const project = readFileSync(join(DIST, 'projects', 'optinergia', 'index.html'), 'utf-8')
    const service = readFileSync(join(DIST, 'crm-asesoria-energetica', 'index.html'), 'utf-8')
    const guide = readFileSync(
      join(DIST, 'recursos', 'software-gestion-asesoria-energetica', 'index.html'),
      'utf-8',
    )

    expect(project).toContain('/crm-asesoria-energetica')
    expect(service).toContain('/projects/optinergia')
    expect(guide).toContain('/crm-asesoria-energetica')
  })

  it('uses Bitácora as an integrated billing module case, not a full ERP build', () => {
    const guide = readFileSync(
      join(DIST, 'recursos', 'cuanto-cuesta-erp-a-medida', 'index.html'),
      'utf-8',
    )

    expect(guide).toContain('/projects/bitacora')
    expect(guide).not.toContain('/projects/bitacora-erp')
    expect(guide).toContain('No hay un precio universal')
  })
})
