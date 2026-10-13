// Snapshot del backoffice usado en /presentacion. Actualizar a mano desde el MCP del backoffice.
export const presentationSnapshotDate = '2026-10-13'

export const presentationSlides = [
  { id: 'portada', label: 'Portada' },
  { id: 'empresa', label: 'La empresa' },
  { id: 'fundadores', label: 'Fundadores' },
  { id: 'metodo', label: 'Método' },
  { id: 'facturacion', label: 'Facturación' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'objetivos', label: 'Roadmap' },
  { id: 'contacto', label: 'Contacto' },
] as const

export type PresentationSlideId = (typeof presentationSlides)[number]['id']

export const companyTotals = {
  clients: 6,
  projects: 14,
  leads: 89,
}

export const companyPillars = [
  {
    title: 'Software a medida',
    description: 'CRM, portales de cliente y herramientas internas que sustituyen hojas de cálculo',
  },
  {
    title: 'Automatización',
    description: 'Procesos repetitivos conectados entre sí para que el equipo se centre en vender',
  },
  {
    title: 'Web y presencia digital',
    description: 'Landings y presentaciones comerciales que explican bien lo que hace tu empresa',
  },
  {
    title: 'Mantenimiento continuo',
    description: 'Acompañamos el producto después del lanzamiento con mejoras mensuales',
  },
] as const

export const methodSteps = [
  {
    title: 'Diagnóstico',
    description: 'Entendemos el proceso actual y dónde se pierde tiempo o dinero.',
  },
  {
    title: 'Propuesta cerrada',
    description: 'Alcance, plazo y precio fijos antes de escribir una línea de código.',
  },
  {
    title: 'Desarrollo en ciclos cortos',
    description: 'Entregas semanales para validar con el equipo real desde el principio.',
  },
  {
    title: 'Lanzamiento y evolución',
    description: 'Puesta en producción en menos de 6 semanas y mantenimiento posterior.',
  },
] as const

// Total (IVA incluido) de las facturas emitidas, agrupado por mes de emisión.
export const billing = {
  months: [
    { month: '2026-06', amount: 363 },
    { month: '2026-07', amount: 2432.1 },
    { month: '2026-08', amount: 4815.8 },
    { month: '2026-09', amount: 2023.52 },
    { month: '2026-10', amount: 1270.5 },
  ],
  total: 10904.92,
  invoicesIssued: 17,
  billedClients: 6,
  drafts: 2299,
  recurringClients: ['Optinergia', 'Salvadis',"Kache envíos", "LEX"],
} as const

export type GoalUnit = 'count' | 'eur' | 'percent'

export interface PresentationGoal {
  label: string
  description: string
  target: number
  actual: number
  unit: GoalUnit
}

export const monthlyGoals: PresentationGoal[] = [
  {
    label: 'Leads nuevos',
    description: 'Contactos cualificados que entran cada mes.',
    target: 20,
    actual: 5,
    unit: 'count',
  },
  {
    label: 'Facturación mensual',
    description: 'Importe facturado en el mes (IVA incluido).',
    target: 3001,
    actual: 1220,
    unit: 'eur',
  },
  {
    label: 'Conversión',
    description: 'Porcentaje de propuestas que se convierten en proyecto.',
    target: 0.25,
    actual: 0,
    unit: 'percent',
  },
]

export const roadmap = [
  {
    period: 'Q4 2026',
    title: 'Cumplir los objetivos mensuales',
    description: '20 leads, 3.000 € facturados y un 25 % de conversión cada mes.',
  },
  {
    period: 'Q1 2027',
    title: 'Más ingresos recurrentes',
    description: 'Convertir cada proyecto entregado en un plan de mantenimiento mensual.',
  },
  {
    period: 'Q2 2027',
    title: 'Productos propios',
    description: 'Empaquetar los módulos internos de facturación, Verifactu y changelog.',
  },
  {
    period: '2027',
    title: 'Packs sectoriales',
    description: 'Soluciones listas para negocios locales con instalación y cuota fija.',
  },
] as const

export const featuredProjectIds = [
  'gruas-del-valles',
  'kache-envios',
  'lex-crm',
  'optinergia',
  'salvadis',
  'palumba',
] as const
