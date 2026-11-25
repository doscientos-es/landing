// @vitest-environment jsdom

import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import ContactForm from './ContactForm'

vi.mock('./contact/CalEmbed', () => ({
  CalEmbed: ({ leadId }: { leadId: string }) => <div>Calendario: {leadId}</div>,
}))

describe('ContactForm', () => {
  beforeEach(() => {
    window.sessionStorage.clear()
  })

  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
  })

  it('muestra los cuatro campos y valida todos antes de enviar', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    render(<ContactForm stayOnPage />)

    expect(screen.getByLabelText('Nombre completo')).toBeTruthy()
    expect(screen.getByLabelText('Email')).toBeTruthy()
    expect(screen.getByLabelText('Teléfono')).toBeTruthy()
    expect(screen.getByLabelText(/Empresa \/ Sector/)).toBeTruthy()
    expect(screen.queryByText(/idioma/i)).toBeNull()
    expect(screen.queryByText('Siguiente')).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Confirmar y agendar' }))

    expect(screen.getByText('El nombre es obligatorio')).toBeTruthy()
    expect(screen.getByText('El email es obligatorio')).toBeTruthy()
    expect(screen.getByText('El teléfono es obligatorio')).toBeTruthy()
    await waitFor(() =>
      expect(document.activeElement).toBe(screen.getByLabelText('Nombre completo')),
    )
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('envía al pulsar Enter y abre el calendario sin pedir empresa ni idioma', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ leadId: 'lead-1' }),
    })
    vi.stubGlobal('fetch', fetchMock)
    render(<ContactForm stayOnPage />)

    await user.type(screen.getByLabelText('Nombre completo'), 'Ana García')
    await user.type(screen.getByLabelText('Email'), 'ana@example.test')
    await user.type(screen.getByLabelText('Teléfono'), '666 123 456{Enter}')

    expect(await screen.findByText('Calendario: lead-1')).toBeTruthy()
    const body = JSON.parse(fetchMock.mock.calls[0][1].body)
    expect(body).toMatchObject({ name: 'Ana García', email: 'ana@example.test', company: '' })
    expect(body).not.toHaveProperty('language')
  })
})
