// @vitest-environment jsdom

import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

import { branding } from '~/config/branding'
import { buildTrackedWhatsappUrl } from '~/shared/lib/attribution'

const funnelPath = join(process.cwd(), 'dist', 'funnel', 'index.html')

describe.skipIf(!existsSync(funnelPath))('funnel contact actions', () => {
  it('offers WhatsApp and a direct call as the main actions', () => {
    const document = new DOMParser().parseFromString(readFileSync(funnelPath, 'utf8'), 'text/html')
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
    expect(whatsapp?.querySelector('svg[aria-hidden="true"]')).toBeTruthy()
    expect(phone?.querySelector('svg[aria-hidden="true"]')).toBeTruthy()
    expect(hero?.textContent).not.toContain('Agendar videollamada')
    expect(hero?.textContent).not.toContain('Pedir diagnóstico gratis')
  })

  it('links the header, floating actions and footer to the contact channels', () => {
    const document = new DOMParser().parseFromString(readFileSync(funnelPath, 'utf8'), 'text/html')
    const phoneHref = `tel:+${branding.contact.whatsapp.number}`
    const whatsappHref = buildTrackedWhatsappUrl({
      phone: branding.contact.whatsapp.number,
      text: branding.contact.whatsapp.defaultMessage,
      conversionStep: 'whatsapp_funnel',
      landingRef: 'funnel',
    })

    expect(document.querySelector('.funnel-brand a')?.getAttribute('href')).toBe(phoneHref)
    for (const selector of ['.funnel-floating', '.funnel-footer']) {
      const section = document.querySelector(selector)
      const links = Array.from(section?.querySelectorAll('a') ?? [])
      expect(links.some((link) => link.getAttribute('href') === phoneHref)).toBe(true)
      expect(links.some((link) => link.getAttribute('href') === whatsappHref)).toBe(true)
    }
  })
})
