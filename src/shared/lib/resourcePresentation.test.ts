import { describe, expect, it } from 'vitest'

import { getResourceCategory } from './resourceCategories'
import {
  featuredResourcePicks,
  getEstimatedReadingMinutes,
  getResourceActionLabel,
  resourceJourneys,
} from './resourcePresentation'

describe('resource presentation', () => {
  it('links each reader need to an existing resource category', () => {
    expect(resourceJourneys).toHaveLength(3)
    for (const journey of resourceJourneys) {
      expect(getResourceCategory(journey.categorySlug)?.slug).toBe(journey.categorySlug)
      expect(journey.href).toBe(`/recursos/tags/${journey.categorySlug}`)
    }
  })

  it('keeps a curated set of starting resources', () => {
    expect(featuredResourcePicks.map(({ slug }) => slug)).toEqual([
      'automatizacion-procesos-empresariales',
      'software-a-medida-vs-saas',
      'validar-mvp-6-semanas',
    ])
  })

  it('estimates reading time and keeps the minimum at one minute', () => {
    expect(getEstimatedReadingMinutes('')).toBe(1)
    expect(getEstimatedReadingMinutes('palabra '.repeat(220))).toBe(1)
    expect(getEstimatedReadingMinutes('palabra '.repeat(221))).toBe(2)
  })

  it('uses an action that matches the linked resource type', () => {
    expect(getResourceActionLabel('guia')).toBe('Leer guía')
    expect(getResourceActionLabel('plantilla')).toBe('Leer plantilla')
    expect(getResourceActionLabel(undefined)).toBe('Leer artículo')
  })
})
