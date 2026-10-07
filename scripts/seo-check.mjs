import { readFileSync } from 'node:fs'

const checks = []

function read(path) {
  return readFileSync(path, 'utf8')
}

function assert(condition, message) {
  checks.push({ ok: Boolean(condition), message })
}

const schemaOrg = read('src/components/seo/SchemaOrg.astro')
assert(
  schemaOrg.includes('name: pageTitle') && schemaOrg.includes('description: pageDescription'),
  'WebPage JSON-LD must use the current page title and description.',
)
assert(
  !schemaOrg.includes('aggregateRating'),
  'SchemaOrg must not emit aggregateRating without eligible review data.',
)
assert(
  !schemaOrg.includes('reviewRating'),
  'SchemaOrg must not emit reviewRating without eligible review data.',
)
assert(
  !schemaOrg.includes('"@type": "Review"'),
  'SchemaOrg must not emit Review snippets for generic testimonials.',
)

const baseHead = read('src/components/BaseHead.astro')
assert(
  !baseHead.includes('property="og:image"') && !baseHead.includes('name="twitter:card"'),
  'Open Graph and Twitter metadata must be emitted only once by OpenGraph.astro.',
)

const homePage = read('src/pages/index.astro')
assert(
  homePage.includes('Software a medida y automatización para pymes | doscientos'),
  'Homepage title must describe the primary services and audience.',
)
assert(
  homePage.includes('pymes de Barcelona y el Maresme') && homePage.includes('precio cerrado'),
  'Homepage description must include the verified audience, service area, and offer.',
)
assert(
  !homePage.includes('faqs={faqs}'),
  'Homepage must not emit stale FAQ structured data separate from visible FAQ content.',
)

const barcelonaPage = read('src/pages/desarrollo-web-barcelona.astro')
assert(
  barcelonaPage.includes('Agencia de desarrollo web en Barcelona | doscientos') &&
    barcelonaPage.includes('Agencia de desarrollo web en Barcelona para empresas'),
  'Barcelona landing metadata must target agency and web development searches with a clear offer.',
)
assert(
  barcelonaPage.includes('Desarrollo web para empresas de Barcelona') &&
    barcelonaPage.includes('href="/crm-a-medida"') &&
    barcelonaPage.includes('href="/automatizacion-procesos"'),
  'Barcelona landing must explain its services and link to relevant commercial pages.',
)

const crmPage = read('src/pages/crm-a-medida.mdx')
assert(
  crmPage.includes('href="/crm-asesoria-energetica"') &&
    !crmPage.includes('<h2>CRM para asesorías energéticas</h2>'),
  'Generic CRM landing must link to, not compete with, the energy-advisor CRM landing.',
)

const specificLandings = read('src/data/specificLandings.ts')
assert(
  specificLandings.includes("slug: 'crm-asesoria-energetica'") &&
    specificLandings.includes('En Optinergia entregamos seis módulos en dos semanas.') &&
    specificLandings.includes("title: 'Automatización de Excel para pymes | doscientos'") &&
    specificLandings.includes("title: 'Software a medida y ERP para empresas | doscientos'"),
  'Existing service landings must target CRM energy, Excel automation, and ERP queries.',
)

const energyProject = read('src/content/projects/optinergia.mdx')
assert(
  energyProject.includes('Caso Optinergia: CRM para una asesoría energética') &&
    energyProject.includes('/crm-asesoria-energetica'),
  'Optinergia project page must be framed as case-study proof and link to the service landing.',
)

const energyArticle = read('src/content/blog/software-gestion-asesoria-energetica.mdx')
assert(
  energyArticle.includes("updatedDate: '2026-10-07'") &&
    energyArticle.includes('/crm-asesoria-energetica') &&
    !energyArticle.includes('60%'),
  'Energy CRM guide must link to the commercial landing and avoid unsupported savings claims.',
)

const erpArticle = read('src/content/blog/cuanto-cuesta-erp-a-medida.mdx')
assert(
  erpArticle.includes('/projects/bitacora') &&
    !erpArticle.includes('/projects/bitacora-erp') &&
    erpArticle.includes("from '../../assets/media/projects/bitacora/crm.webp'") &&
    !erpArticle.includes('250.000-400.000€') &&
    erpArticle.includes('No hay un precio universal'),
  'ERP guide must link to the real Bitácora project and use its relevant imagery.',
)

const commercialRoutes = read('src/data/commercialRoutes.ts')
for (const href of [
  '/diagnostico-procesos',
  '/automatizacion-procesos',
  '/automatizar-excel',
  '/crm-renovaciones',
]) {
  assert(commercialRoutes.includes(href), `commercialRoutes.ts must include ${href}.`)
}

const sitemap = read('src/pages/sitemap.xml.ts')
assert(
  sitemap.includes('commercialRoutes'),
  'sitemap.xml.ts must use the shared commercial route registry.',
)
assert(
  sitemap.includes("route.href !== '/diagnostico-procesos'"),
  'sitemap.xml.ts must avoid duplicating the diagnostic route.',
)

const breadcrumbs = read('src/components/seo/Breadcrumbs.astro')
assert(
  breadcrumbs.includes('new URL(item.url, baseUrl).toString()'),
  'Breadcrumb JSON-LD must resolve absolute URLs without duplicate slashes.',
)

const notFound = read('src/pages/404.astro')
assert(
  notFound.includes('robots="noindex, nofollow"'),
  'The 404 page must be excluded from search results.',
)

const vercelConfig = read('vercel.json')
assert(
  vercelConfig.includes('"source": "/blog/:path*"') &&
    vercelConfig.includes('"destination": "/recursos/:path*"'),
  'Legacy blog articles must permanently redirect to their canonical resource URLs.',
)

const blogTemplate = read('src/pages/blog/[...slug].astro')
assert(!blogTemplate.includes('as any'), 'Blog template must not cast CTA variants with as any.')
assert(
  blogTemplate.includes('commercialBlogLinks'),
  'Blog template must use shared commercial internal links.',
)

const failed = checks.filter((check) => !check.ok)

if (failed.length > 0) {
  console.error('SEO check failed:')
  for (const check of failed) {
    console.error(`- ${check.message}`)
  }
  process.exit(1)
}

console.log(`SEO check passed (${checks.length} checks).`)
