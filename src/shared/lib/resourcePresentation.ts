import type { ResourceCategory } from './resourceCategories'
import { resourceTypeLabels } from './resources'

type ResourceType = keyof typeof resourceTypeLabels

type ResourceJourney = {
  categorySlug: ResourceCategory['slug']
  title: string
  description: string
  href: string
  linkLabel: string
}

export const resourceJourneys: readonly ResourceJourney[] = [
  {
    categorySlug: 'automatizacion',
    title: 'Reducir tareas manuales',
    description:
      'Detecta qué procesos repetitivos consumen tiempo y cómo priorizar una automatización útil.',
    href: '/recursos/tags/automatizacion',
    linkLabel: 'Explorar automatización',
  },
  {
    categorySlug: 'software-a-medida',
    title: 'Elegir o crear un software',
    description:
      'Compara un SaaS con una solución propia y valida qué necesitas antes de invertir.',
    href: '/recursos/tags/software-a-medida',
    linkLabel: 'Explorar opciones de software',
  },
  {
    categorySlug: 'digitalizacion',
    title: 'Modernizar un sistema existente',
    description:
      'Encuentra recursos sobre migraciones, sistemas antiguos y transformación digital.',
    href: '/recursos/tags/digitalizacion',
    linkLabel: 'Explorar modernización',
  },
]

export const featuredResourcePicks = [
  {
    slug: 'automatizacion-procesos-empresariales',
    eyebrow: 'Automatización',
    action: 'Leer guía',
  },
  {
    slug: 'software-a-medida-vs-saas',
    eyebrow: 'Decisión de software',
    action: 'Leer comparativa',
  },
  {
    slug: 'validar-mvp-6-semanas',
    eyebrow: 'Validación de producto',
    action: 'Leer guía',
  },
] as const

const resourceActionLabels: Record<ResourceType, string> = {
  articulo: 'Leer artículo',
  guia: 'Leer guía',
  checklist: 'Leer checklist',
  plantilla: 'Leer plantilla',
  calculadora: 'Abrir recurso',
  caso: 'Leer caso',
  newsletter: 'Leer newsletter',
}

export function getEstimatedReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/u).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}

export function getResourceActionLabel(type: ResourceType | undefined): string {
  return resourceActionLabels[type ?? 'articulo']
}
