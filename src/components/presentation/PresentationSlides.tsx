import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

import { branding } from '~/config/branding'
import {
  billing,
  companyPillars,
  companyTotals,
  methodSteps,
  monthlyGoals,
  roadmap,
  type GoalUnit,
  type PresentationSlideId,
} from '~/data/presentation'

export interface PresentationImage {
  src: string
  width: number
  height: number
}

export interface PresentationFounder {
  name: string
  role: string
  bio: string
  link: string
  image: PresentationImage
}

export interface PresentationProject {
  id: string
  title: string
  client: string
  summary: string
  services: string[]
  cover: PresentationImage
}

export interface PresentationDeckData {
  founders: PresentationFounder[]
  projects: PresentationProject[]
  snapshotDate: string
}

const euro = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
  useGrouping: 'always',
})
const percent = new Intl.NumberFormat('es-ES', { style: 'percent', maximumFractionDigits: 0 })
const monthName = new Intl.DateTimeFormat('es-ES', { month: 'short', timeZone: 'UTC' })
const longDate = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', timeZone: 'UTC' })

const formatMonth = (month: string) => monthName.format(new Date(`${month}-01T00:00:00Z`))
const formatDate = (date: string) => longDate.format(new Date(`${date}T00:00:00Z`))

function formatGoal(value: number, unit: GoalUnit) {
  if (unit === 'eur') return euro.format(value)
  if (unit === 'percent') return percent.format(value)
  return String(value)
}

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-lime)]'

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 749 264">
      <path
        d="M40.01 0C74.9423 0 108.444 13.8768 133.145 38.5777C157.846 63.2786 171.723 96.7802 171.723 131.713C171.723 166.645 157.846 200.147 133.145 224.847C108.444 249.548 74.9424 263.425 40.01 263.425H0V0L40.01 0Z"
        fill="var(--brand-lime)"
      />
      <circle cx="328.441" cy="131.713" fill="var(--brand-lime)" r="131.713" />
      <circle cx="616.873" cy="131.713" fill="var(--brand-lime)" r="131.713" />
    </svg>
  )
}

function SlideShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto flex min-h-svh w-full max-w-[90rem] flex-col justify-center px-6 pt-24 pb-32 sm:px-10">
      {children}
    </div>
  )
}

function SlideTitle({
  as: Tag = 'h2',
  children,
  id,
}: {
  as?: 'h1' | 'h2'
  children: ReactNode
  id: PresentationSlideId
}) {
  return (
    <Tag
      className="max-w-4xl scroll-mt-24 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
      data-animate
      id={`slide-${id}-title`}
    >
      {children}
    </Tag>
  )
}

function Stat({
  highlight = false,
  label,
  value,
}: {
  highlight?: boolean
  label: string
  value: ReactNode
}) {
  return (
    <div
      className={`flex min-w-0 flex-col-reverse border-t pt-4 ${highlight ? 'border-[var(--brand-lime)]' : 'border-white/15'}`}
      data-animate
    >
      <dt className="mt-1 text-sm text-white/65">{label}</dt>
      <dd
        className={`font-semibold tracking-tight tabular-nums ${highlight ? 'text-4xl text-[var(--brand-lime)] sm:text-5xl' : 'text-3xl sm:text-4xl'}`}
      >
        {value}
      </dd>
    </div>
  )
}

function CoverSlide({ data }: SlideProps) {
  return (
    <SlideShell>
      <div className="relative">
        <SlideTitle as="h1" id="portada">
          {branding.slogan}
        </SlideTitle>
        <p className="mt-6 max-w-2xl text-lg text-pretty text-white/70 sm:text-xl" data-animate>
          Presentación de <span translate="no">{branding.name}</span>: quiénes somos, cómo
          trabajamos, qué hemos facturado y hacia dónde vamos. Datos a{' '}
          {formatDate(data.snapshotDate)}.
        </p>
        <dl className="mt-12 grid max-w-3xl grid-cols-3 gap-6">
          <Stat label="Consultorías realizadas" value={companyTotals.leads} />
          <Stat label="Clientes" value={companyTotals.clients} />
          <Stat highlight label="Facturado en 2026" value={euro.format(billing.total)} />
        </dl>
      </div>
    </SlideShell>
  )
}

interface SlideProps {
  data: PresentationDeckData
}

function CompanySlide() {
  const { address } = branding.legal
  return (
    <SlideShell>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="min-w-0">
          <SlideTitle id="empresa">Estudio técnico cercano</SlideTitle>
          <p className="mt-6 max-w-xl text-lg text-pretty text-white/70" data-animate>
            Dos ingenieros que diseñan, construyen y mantienen el software de cada cliente, sin
            intermediarios ni equipos rotativos.
          </p>
          <dl className="mt-10 grid gap-5 text-sm sm:grid-cols-2" data-animate>
            <div className="min-w-0">
              <dt className="text-white/50">Razón social</dt>
              <dd className="mt-1 break-words text-white">{branding.legalName}</dd>
            </div>
            <div className="min-w-0">
              <dt className="text-white/50">NIF</dt>
              <dd className="mt-1 text-white tabular-nums">{branding.legal.nif}</dd>
            </div>
            <div className="min-w-0">
              <dt className="text-white/50">Sede</dt>
              <dd className="mt-1 text-white">
                {address.city}, {address.province}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-white/50">Zona de servicio</dt>
              <dd className="mt-1 text-white">{branding.location.serviceArea} y remoto</dd>
            </div>
          </dl>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {companyPillars.map((pillar, pillarIndex) => (
            <li
              className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              data-animate
              key={pillar.title}
            >
              <span className="text-xs font-bold text-[var(--brand-lime)] tabular-nums">
                {String(pillarIndex + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-pretty text-white/65">{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </SlideShell>
  )
}

function FoundersSlide({ data }: SlideProps) {
  return (
    <SlideShell>
      <SlideTitle id="fundadores">Conoce a tu equipo técnico</SlideTitle>
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {data.founders.map((founder) => (
          <li
            className="flex min-w-0 flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-start"
            data-animate
            key={founder.name}
          >
            <img
              alt={`Retrato de ${founder.name}`}
              className="size-28 shrink-0 rounded-2xl object-cover sm:size-36"
              decoding="async"
              height={founder.image.height}
              loading="lazy"
              src={founder.image.src}
              width={founder.image.width}
            />
            <div className="min-w-0">
              <h3 className="text-2xl font-semibold tracking-tight">{founder.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--brand-lime)]">{founder.role}</p>
              <p className="mt-4 text-sm text-pretty text-white/70">{founder.bio}</p>
              <a
                className={`mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-semibold text-white/80 transition-colors hover:text-white ${focusRing}`}
                href={founder.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver perfil
                <ArrowUpRight aria-hidden="true" size={16} />
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </SlideShell>
  )
}

function MethodSlide() {
  return (
    <SlideShell>
      <SlideTitle id="metodo">Cómo trabajamos</SlideTitle>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {methodSteps.map((step, stepIndex) => (
          <li
            className="min-w-0 border-t-2 border-[var(--brand-lime)] pt-5"
            data-animate
            key={step.title}
          >
            <span className="text-sm font-bold text-white/50 tabular-nums">
              Paso {stepIndex + 1}
            </span>
            <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-pretty text-white/65">{step.description}</p>
          </li>
        ))}
      </ol>
      <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-6">
        <Stat label="Semanas hasta producción" value="<6" />
        <Stat label="Precio desde el día 1" value="Cerrado" />
        <Stat label="Proyectos realizados" value={companyTotals.projects} />
      </dl>
    </SlideShell>
  )
}

function BillingSlide({ data }: SlideProps) {
  const max = Math.max(...billing.months.map((entry) => entry.amount), 1)
  return (
    <SlideShell>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div className="min-w-0">
          <SlideTitle id="facturacion">Facturación 2026</SlideTitle>
          <p
            className="mt-6 text-5xl font-semibold tracking-tight tabular-nums sm:text-7xl"
            data-animate
          >
            {euro.format(billing.total)}
          </p>
          <p className="mt-2 text-sm text-white/60" data-animate>
            Facturado con IVA incluido desde la primera factura.
          </p>
          <figure className="mt-10" data-animate>
            <figcaption className="sr-only">Facturación mensual con IVA</figcaption>
            <ol className="flex h-56 items-end gap-3 border-b border-white/15 sm:gap-6">
              {billing.months.map((entry) => (
                <li className="flex h-full min-w-0 flex-1 flex-col justify-end" key={entry.month}>
                  <span className="mb-2 text-center text-xs font-semibold text-white/80 tabular-nums">
                    <span className="sr-only">{formatMonth(entry.month)}: </span>
                    {euro.format(entry.amount)}
                  </span>
                  <span
                    aria-hidden="true"
                    className="block origin-bottom rounded-t-md bg-[var(--brand-lime)]"
                    data-bar
                    style={{ height: `${Math.max((entry.amount / max) * 100, 2)}%` }}
                  />
                </li>
              ))}
            </ol>
            <div aria-hidden="true" className="mt-2 flex gap-3 sm:gap-6">
              {billing.months.map((entry) => (
                <span
                  className="flex-1 text-center text-xs text-white/55 capitalize"
                  key={entry.month}
                >
                  {formatMonth(entry.month)}
                </span>
              ))}
            </div>
          </figure>
        </div>
        <div className="min-w-0 space-y-8">
          <dl className="grid grid-cols-2 gap-6">
            <Stat label="Facturas emitidas" value={billing.invoicesIssued} />
            <Stat label="Clientes facturados" value={billing.billedClients} />
            <Stat label="En borrador" value={euro.format(billing.drafts)} />
            <Stat label="Clientes recurrentes" value={billing.recurringClients.length} />
          </dl>
          <p className="text-sm text-pretty text-white/65" data-animate>
            Mantenimiento mensual activo con {billing.recurringClients.join(' y ')}.
          </p>
          <p className="text-xs text-white/45" data-animate>
            Fuente: datos internos de <span translate="no">doscientos</span>,{' '}
            {formatDate(data.snapshotDate)}.
          </p>
        </div>
      </div>
    </SlideShell>
  )
}

function ProjectsSlide({ data }: SlideProps) {
  return (
    <SlideShell>
      <SlideTitle id="proyectos">Proyectos recientes</SlideTitle>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project) => (
          <li className="min-w-0" data-animate key={project.id}>
            <a
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:border-white/30 hover:bg-white/[0.07] ${focusRing}`}
              href={`/projects/${project.id}`}
            >
              <img
                alt=""
                className="aspect-[16/9] w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                decoding="async"
                height={project.cover.height}
                loading="lazy"
                src={project.cover.src}
                width={project.cover.width}
              />
              <div className="flex min-w-0 flex-1 flex-col p-5">
                <p className="truncate text-xs font-bold tracking-[0.12em] text-[var(--brand-lime)] uppercase">
                  {project.client}
                </p>
                <h3 className="mt-2 line-clamp-2 font-semibold text-balance">{project.title}</h3>
                {project.services.length > 0 && (
                  <p className="mt-auto truncate pt-3 text-xs text-white/55">
                    {project.services.slice(0, 3).join(' · ')}
                  </p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </SlideShell>
  )
}

function GoalsSlide() {
  return (
    <SlideShell>
      <SlideTitle id="objetivos">Objetivos y roadmap</SlideTitle>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <section aria-labelledby="objetivos-mensuales" className="min-w-0">
          <h3 className="text-lg font-semibold" id="objetivos-mensuales">
            Objetivos de este mes
          </h3>
          <ul className="mt-6 space-y-6">
            {monthlyGoals.map((goal) => {
              const ratio = goal.target > 0 ? Math.min(goal.actual / goal.target, 1) : 0
              return (
                <li className="min-w-0" data-animate key={goal.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-semibold">{goal.label}</span>
                    <span className="text-sm text-white/75 tabular-nums">
                      {formatGoal(goal.actual, goal.unit)} de {formatGoal(goal.target, goal.unit)}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"
                  >
                    <span
                      className="block h-full origin-left rounded-full bg-[var(--brand-lime)]"
                      data-progress
                      style={{ width: `${ratio * 100}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-white/55">{goal.description}</p>
                </li>
              )
            })}
          </ul>
        </section>
        <section aria-labelledby="roadmap-titulo" className="min-w-0">
          <h3 className="text-lg font-semibold" id="roadmap-titulo">
            Roadmap
          </h3>
          <ol className="mt-6 space-y-5 border-l border-white/15 pl-6">
            {roadmap.map((item) => (
              <li className="relative min-w-0" data-animate key={item.title}>
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[1.85rem] size-2.5 rounded-full bg-[var(--brand-lime)]"
                />
                <p className="text-xs font-bold tracking-[0.12em] text-[var(--brand-lime)] uppercase">
                  {item.period}
                </p>
                <h4 className="mt-1 font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm text-pretty text-white/65">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </SlideShell>
  )
}

function ContactSlide() {
  const { contact } = branding
  const whatsappHref = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(contact.whatsapp.defaultMessage)}`
  const links = [
    { label: 'Reservar una llamada de 30 min', href: contact.calCom.bookingUrl, external: true },
    { label: contact.email, href: `mailto:${contact.email}`, external: false },
    { label: `WhatsApp ${contact.whatsapp.displayNumber}`, href: whatsappHref, external: true },
    { label: 'Ver todos los proyectos', href: '/projects', external: false },
  ]
  return (
    <SlideShell>
      <SlideTitle id="contacto">¿Hablamos de tu próximo proyecto?</SlideTitle>
      <p className="mt-6 max-w-2xl text-lg text-pretty text-white/70" data-animate>
        Cuéntanos qué proceso quieres mejorar y te respondemos con una propuesta cerrada.
      </p>
      <ul className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
        {links.map((link, linkIndex) => (
          <li className="min-w-0" data-animate key={link.href}>
            <a
              className={`flex min-h-14 items-center justify-between gap-4 rounded-xl border px-5 py-3 font-semibold transition-colors ${linkIndex === 0
                ? 'border-transparent bg-[var(--brand-lime)] text-[#0c110b] hover:bg-white'
                : 'border-white/15 text-white hover:border-white/40 hover:bg-white/[0.06]'
                } ${focusRing}`}
              href={link.href}
              {...(link.external ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
            >
              <span className="min-w-0 break-words">{link.label}</span>
              {link.external ? (
                <>
                  <ArrowUpRight aria-hidden="true" className="shrink-0" size={18} />
                  <span className="sr-only">(se abre en una pestaña nueva)</span>
                </>
              ) : (
                <ArrowRight aria-hidden="true" className="shrink-0" size={18} />
              )}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-xs text-white/45" data-animate>
        {branding.legalName} · NIF {branding.legal.nif}
      </p>
    </SlideShell>
  )
}

const slideComponents: Record<PresentationSlideId, (props: SlideProps) => ReactNode> = {
  portada: CoverSlide,
  empresa: CompanySlide,
  fundadores: FoundersSlide,
  metodo: MethodSlide,
  facturacion: BillingSlide,
  proyectos: ProjectsSlide,
  objetivos: GoalsSlide,
  contacto: ContactSlide,
}

export function PresentationSlide({ data, id }: SlideProps & { id: PresentationSlideId }) {
  const Slide = slideComponents[id]
  return <Slide data={data} />
}
