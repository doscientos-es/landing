// @vitest-environment jsdom

import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import ContactForm from './ContactForm'

afterEach(() => {
  cleanup()
  window.sessionStorage.clear()
  window.localStorage.removeItem('doscientos:visitor-id')
  window.__DOS_CONSENT = null
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('ContactForm', () => {
  it('muestra los errores y avanza cuando se rellenan los campos', async () => {
    const user = userEvent.setup()
    render(<ContactForm stayOnPage />)

    await user.click(screen.getByRole('button', { name: 'Siguiente' }))
    expect(screen.getByText('El nombre es obligatorio')).toBeTruthy()
    expect(screen.getByText('El email es obligatorio')).toBeTruthy()

    await user.type(screen.getByLabelText('Nombre completo'), 'Ana García')
    await user.type(screen.getByLabelText('Email'), 'ana@example.com')
    await user.click(screen.getByRole('button', { name: 'Siguiente' }))
    expect(screen.getByLabelText('Teléfono')).toBeTruthy()
  })

  it('permite avanzar si el navegador no ofrece crypto.randomUUID', async () => {
    const user = userEvent.setup()
    window.__DOS_CONSENT = { analytics: true, marketing: false }
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))
    vi.spyOn(crypto, 'randomUUID').mockImplementation(() => {
      throw new TypeError('randomUUID no disponible')
    })

    render(<ContactForm stayOnPage />)
    await user.type(screen.getByLabelText('Nombre completo'), 'Ana García')
    await user.type(screen.getByLabelText('Email'), 'ana@example.com')
    await user.click(screen.getByRole('button', { name: 'Siguiente' }))
    expect(screen.getByLabelText('Teléfono')).toBeTruthy()
  })
})
