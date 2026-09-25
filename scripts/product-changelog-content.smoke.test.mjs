import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'

const readPage = (route) => readFileSync(resolve('dist', route, 'index.html'), 'utf8')
const method = 'automatizar-changelog-git-sin-duplicados'
const integration = 'changelog-markdown-json-astro-nextjs'

test('código abierto describe el estado real y enlaza a las dos guías', () => {
  const html = readPage('open-source')
  assert.match(html, /product-changelog/)
  assert.match(html, /EN PREPARACIÓN/)
  assert.match(html, /Todavía no está publicada como paquete npm/)
  assert.match(html, /<link rel="canonical" href="https:\/\/doscientos\.es\/open-source/)
  assert.match(html, new RegExp(`href="/recursos/${method}"`))
  assert.match(html, new RegExp(`href="/recursos/${integration}"`))
})

test('las guías tienen contenido propio, metadatos y enlaces internos', () => {
  const methodHtml = readPage(`recursos/${method}`)
  const integrationHtml = readPage(`recursos/${integration}`)
  for (const html of [methodHtml, integrationHtml]) {
    assert.match(html, /<title>.*changelog.*<\/title>/i)
    assert.match(html, /<meta name="description"/)
    assert.match(html, /<link rel="canonical" href="https:\/\/doscientos\.es\/recursos\//)
    assert.match(html, /href="\/open-source"/)
    assert.match(html, /2026-09-24/)
  }
  assert.match(methodHtml, /cursor Git/)
  assert.match(methodHtml, new RegExp(`href="/recursos/${integration}"`))
  assert.match(integrationHtml, /JSON es una proyección/)
  assert.match(integrationHtml, new RegExp(`href="/recursos/${method}"`))
})

test('el sitemap incluye el catálogo y ambas guías', () => {
  const sitemap = readFileSync(resolve('dist/sitemap.xml'), 'utf8')
  for (const route of ['open-source', `recursos/${method}`, `recursos/${integration}`]) {
    assert.ok(sitemap.includes(`/${route}</loc>`), `Falta ${route} en sitemap.xml`)
  }
})
