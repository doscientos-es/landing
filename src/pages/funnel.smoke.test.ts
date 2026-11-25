import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'

import { branding } from '~/config/branding'
import { buildTrackedWhatsappUrl } from '~/shared/lib/attribution'

const funnelPath = join(process.cwd(), 'dist', 'funnel', 'index.html')

describe.skipIf(!existsSync(funnelPath))('funnel contact actions', () => {
  it('offers WhatsApp and a direct call as the main actions', () => {
    const document = new JSDOM(readFileSync(funnelPath, 'utf8')).window.document
    const hero = document.querySelector('.funnel-hero-grid')
    const links = Array.from(hero?.querySelectorAll('a') ?? [])
    const whatsapp = links.find((link) => link.textContent?.includes('Escribir por WhatsApp'))
    const phone = links.find((link) => link.textContent?.includes('Llamar ahora'))

    expect(whatsapp?.getAttribute('href')).toBe(
      buildTrackedWhatsappUrl({
        phone: branding.contact.whatsapp.number,
        text: branding.contact.whatsapp.defaultMessage,
        conversionStep: 'whatsapp_funnel',
        landingRef: 'funnel',
      }),
    )
    expect(phone?.getAttribute('href')).toBe(`tel:+${branding.contact.whatsapp.number}`)
    expect(hero?.textContent).not.toContain('Agendar videollamada')
    expect(hero?.textContent).not.toContain('Pedir diagnóstico gratis')
  })
})