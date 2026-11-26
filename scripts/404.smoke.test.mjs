import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

import { JSDOM } from 'jsdom'

test('la página 404 explica el error y ofrece enlaces útiles sin indexarse', () => {
  const html = readFileSync(new URL('../dist/404.html', import.meta.url), 'utf8')
  const document = new JSDOM(html).window.document
  const main = document.querySelector('main')

  assert.match(document.querySelector('meta[name="robots"]')?.content ?? '', /noindex/)
  assert.match(main?.querySelector('h1')?.textContent ?? '', /Esta página se ha perdido/)
  assert.match(main?.textContent ?? '', /Error 404/)
  for (const path of ['/', '/contact', '/projects', '/recursos']) {
    assert.ok(main?.querySelector(`a[href="${path}"]`), `Falta el enlace a ${path}`)
  }
  assert.equal(main?.querySelector('a button'), null)
})