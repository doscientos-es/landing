import { Check, Loader2, Lock } from 'lucide-react'

import { CalEmbed } from './contact/CalEmbed'
import { Field } from './contact/Field'
import { useContactForm } from './contact/useContactForm'

export default function ContactForm({ stayOnPage = false }: { stayOnPage?: boolean }) {
  const {
    status,
    errorMessage,
    fieldErrors,
    touched,
    formData,
    submittedLeadId,
    dedupeKey,
    handleChange,
    handleBlur,
    handleFieldFocus,
    handleSubmit,
  } = useContactForm({ stayOnPage })

  if (status === 'success') {
    return (
      <CalEmbed
        name={formData.name}
        email={formData.email}
        phone={formData.phone}
        leadId={submittedLeadId}
        dedupeKey={dedupeKey}
      />
    )
  }

  return (
    <div className="relative w-full overflow-hidden p-1">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Honeypot anti-spam — off-screen, no display:none para que los bots lo rellenen */}
        <input
          type="text"
          name="website"
          className="pointer-events-none absolute -top-[9999px] -left-[9999px] h-px w-px opacity-0"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid gap-x-6 sm:grid-cols-2">
          <Field
            id="name"
            label="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFieldFocus}
            placeholder="Ej. Pol Gubau"
            autoComplete="name"
            enterKeyHint="next"
            error={fieldErrors.name}
            touched={touched.name}
          />

          <Field
            id="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFieldFocus}
            placeholder="pol@doscientos.es"
            autoComplete="email"
            inputMode="email"
            enterKeyHint="next"
            error={fieldErrors.email}
            touched={touched.email}
          />
          <Field
            id="phone"
            type="tel"
            label="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFieldFocus}
            placeholder="666 123 456"
            autoComplete="tel"
            inputMode="tel"
            enterKeyHint="next"
            error={fieldErrors.phone}
            touched={touched.phone}
          />

          <Field
            id="company"
            label="Empresa / Sector"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFieldFocus}
            placeholder="Ej. Tecnología / E-commerce"
            autoComplete="organization"
            enterKeyHint="send"
            optional
          />
        </div>
        <div className="flex pt-2">
          <button
            type="submit"
            disabled={status === 'loading'}
            aria-busy={status === 'loading'}
            className="bg-primary text-background focus-visible:outline-primary flex h-12 flex-1 items-center justify-center gap-2 rounded-full px-4 font-semibold whitespace-nowrap transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50"
          >
            {status === 'loading' ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Check className="h-4 w-4" aria-hidden="true" />
            )}
            Confirmar y agendar{status === 'loading' ? '…' : ''}
          </button>
        </div>
        {status === 'error' && (
          <p
            role="alert"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-500"
          >
            {errorMessage}
          </p>
        )}

        <p className="text-muted-foreground flex items-center justify-center gap-1.5 pt-1 text-xs">
          <Lock className="size-3" aria-hidden="true" />
          Tus datos están seguros. Sin spam ni compromiso.
        </p>
      </form>
    </div>
  )
}
