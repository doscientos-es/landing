import { gsap } from 'gsap'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { presentationSlides } from '~/data/presentation'

import { BrandMark, PresentationSlide, type PresentationDeckData } from './PresentationSlides'

const slideCount = presentationSlides.length

function indexFromHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ''))
  if (!id) return 0
  const index = presentationSlides.findIndex((slide) => slide.id === id)
  return index >= 0 ? index : null
}

function slideHref(index: number) {
  return `#${presentationSlides[index].id}`
}

function isEditableTarget(target: EventTarget | null) {
  return (
    target instanceof Element &&
    Boolean(target.closest("input, textarea, select, [contenteditable='true'], [role='textbox']"))
  )
}

export function PresentationDeck(props: PresentationDeckData) {
  const [index, setIndex] = useState(0)
  const mainRef = useRef<HTMLElement>(null)
  const hasNavigated = useRef(false)
  const current = presentationSlides[index]

  useEffect(() => {
    const syncFromHash = () => {
      const next = indexFromHash(window.location.hash)
      if (next === null) return false
      setIndex(next)
      return true
    }
    const handleHashChange = () => {
      if (syncFromHash()) hasNavigated.current = true
    }
    syncFromHash()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.altKey || event.ctrlKey || event.metaKey || isEditableTarget(event.target)) return

      let next: number | null = null
      if (event.key === 'ArrowRight' || event.key === 'PageDown') next = index + 1
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') next = index - 1
      if (event.key === 'Home') next = 0
      if (event.key === 'End') next = slideCount - 1
      if (next === null || next < 0 || next >= slideCount) return

      event.preventDefault()
      window.location.hash = presentationSlides[next].id
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [index])

  useLayoutEffect(() => {
    document.title = `${current.label} · Presentación de doscientos`
    const slide = mainRef.current?.querySelector<HTMLElement>(`[data-slide="${current.id}"]`)
    if (!slide) return

    if (hasNavigated.current) {
      window.scrollTo({ top: 0 })
      slide.focus({ preventScroll: true })
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      timeline.fromTo(
        slide,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.45, clearProps: 'opacity,visibility' },
      )
      timeline.fromTo(
        slide.querySelectorAll('[data-animate]'),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          clearProps: 'transform,opacity,visibility',
        },
        0.1,
      )
      timeline.from(
        slide.querySelectorAll('[data-bar]'),
        { scaleY: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out' },
        0.3,
      )
      timeline.from(
        slide.querySelectorAll('[data-progress]'),
        { scaleX: 0, duration: 0.9, stagger: 0.1, ease: 'power2.out' },
        0.3,
      )
    }, slide)

    return () => context.revert()
  }, [current])

  return (
    <div className="relative min-h-svh bg-[#0c110b] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(60rem 40rem at 85% -10%, rgb(190 242 100 / 0.12), transparent 70%), radial-gradient(50rem 36rem at 0% 110%, rgb(190 242 100 / 0.07), transparent 70%)',
        }}
      />
      <header className="fixed inset-x-0 top-0 z-30 bg-linear-to-b from-[#0c110b]/70 to-transparent">
        <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between gap-4 px-6 py-4 sm:px-10">
          <a
            aria-label="doscientos: ir a la portada de la presentación"
            className="inline-flex min-h-11 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-lime)]"
            href={slideHref(0)}
          >
            <BrandMark className="h-5 w-auto" />
            <span className="text-lg font-semibold tracking-tight" translate="no">
              doscientos
            </span>
          </a>
          <div className="flex items-center gap-5 text-xs font-semibold tracking-[0.15em] uppercase">
            <span className="text-white/80 tabular-nums" aria-live="polite">
              <span className="sr-only">Diapositiva </span>
              {String(index + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
            </span>
            <a
              className="hidden min-h-11 items-center text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-lime)] sm:inline-flex"
              href="/"
            >
              Volver a la web
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10" id="main-content" ref={mainRef}>
        {presentationSlides.map((slide, position) => (
          <section
            aria-labelledby={`slide-${slide.id}-title`}
            aria-roledescription="diapositiva"
            className="focus:outline-none"
            data-slide={slide.id}
            hidden={position !== index}
            key={slide.id}
            tabIndex={-1}
          >
            <PresentationSlide data={props} id={slide.id} />
          </section>
        ))}
      </main>

      <nav
        aria-label="Progreso de la presentación"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#0c110b]/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md"
      >
        <div className="mx-auto flex w-full max-w-[90rem] items-center gap-4 px-6 py-2 sm:px-10">
          {index > 0 ? (
            <a
              aria-label={`Anterior: ${presentationSlides[index - 1].label}`}
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--brand-lime)] sm:justify-start"
              href={slideHref(index - 1)}
            >
              <ArrowLeft aria-hidden="true" size={16} />
              <span className="hidden sm:inline">Anterior</span>
            </a>
          ) : (
            <span aria-hidden="true" className="min-w-11 sm:min-w-[5.5rem]" />
          )}

          <ol className="flex min-w-0 flex-1 items-center gap-1.5">
            {presentationSlides.map((slide, position) => (
              <li className="min-w-0 flex-1" key={slide.id}>
                <a
                  aria-current={position === index ? 'step' : undefined}
                  aria-label={`Ir a la diapositiva ${position + 1}: ${slide.label}`}
                  className="group relative flex h-11 items-end pb-3 focus-visible:outline-2 focus-visible:outline-[var(--brand-lime)]"
                  href={slideHref(position)}
                >
                  <span className="pointer-events-none absolute inset-x-0 top-1.5 hidden truncate text-center text-[0.6rem] font-bold tracking-[0.1em] text-white/50 uppercase transition-colors group-hover:text-white group-aria-[current=step]:text-white lg:block">
                    {slide.label}
                  </span>
                  <span
                    className={`block h-0.5 w-full rounded-full transition-colors duration-300 ${
                      position <= index
                        ? 'bg-[var(--brand-lime)]'
                        : 'bg-white/20 group-hover:bg-white/60'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ol>

          <span className="hidden text-xs tracking-[0.12em] text-white/40 uppercase xl:block">
            ← → Navegar
          </span>

          {index < slideCount - 1 ? (
            <a
              aria-label={`Siguiente: ${presentationSlides[index + 1].label}`}
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--brand-lime)] focus-visible:outline-2 focus-visible:outline-[var(--brand-lime)] sm:justify-start"
              href={slideHref(index + 1)}
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          ) : (
            <a
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--brand-lime)] focus-visible:outline-2 focus-visible:outline-[var(--brand-lime)]"
              href="/"
            >
              <span>Ir a la web</span>
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          )}
        </div>
      </nav>
    </div>
  )
}
