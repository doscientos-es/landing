import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

import { branding } from '~/config/branding'
import { company } from '~/config/company'
import { GET } from '~/pages/doscientos.vcf'

describe('tarjetas de contacto', () => {
  it('genera una ficha para cada fundador con los datos públicos compartidos', async () => {
    const response = GET()
    const card = await response.text()
    const unfolded = card.replace(/\r\n /g, '')
    const contacts = unfolded.match(/BEGIN:VCARD\r\n[\s\S]*?END:VCARD\r\n/g) ?? []

    expect(response.headers.get('content-type')).toBe('text/vcard; charset=utf-8')
    expect(contacts).toHaveLength(branding.team.length)
    for (const [index, member] of branding.team.entries()) {
      const contact = contacts[index]
      expect(contact).toContain('VERSION:3.0\r\n')
      expect(contact).toContain(`FN:${member.name}\r\n`)
      expect(contact).toContain(`TITLE:${member.role}\r\n`)
      expect(contact).toContain(`ORG:${branding.name}\r\n`)
      expect(contact).toContain(`TEL;TYPE=CELL,WORK:+${branding.contact.whatsapp.number}\r\n`)
      expect(contact).toContain(`EMAIL;TYPE=INTERNET,WORK:${branding.contact.email}\r\n`)
      expect(contact).toContain(`URL:${branding.url}\r\n`)
      expect(contact).toContain(company.officeAddress.streetAddress.replace(',', '\\,'))
      expect(contact).toContain(member.link)
      expect(contact).toContain(branding.social.linkedin)
      expect(contact).toContain('Teléfono y correo generales de doscientos.')
    }
    expect(card.endsWith('\r\n')).toBe(true)
    for (const line of card.split('\r\n')) {
      expect(new TextEncoder().encode(line).length).toBeLessThanOrEqual(75)
    }
  })

  it.skipIf(!existsSync(resolve('dist/index.html')))(
    'publica el enlace y el archivo generado',
    async () => {
      const html = readFileSync(resolve('dist/index.html'), 'utf8')
      const card = readFileSync(resolve('dist/doscientos.vcf'), 'utf8')

      expect(html).toMatch(
        /href="\/doscientos\.vcf"[^>]*>[\s\S]*?Guardar contactos de Pol y Gerard/,
      )
      expect(card).toBe(await GET().text())
    },
  )
})
