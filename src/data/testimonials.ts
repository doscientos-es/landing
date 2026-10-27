import type { ImageMetadata } from 'astro'

import cashMovilLogo from '~/assets/media/projects/cash-movil-canarias/logo.svg'
import cyberimpulsaLogo from '~/assets/media/projects/cyberimpulsa/logo.svg'
import flatmatchLogo from '~/assets/media/projects/flatmatch/logo.svg'
import salvadisLogo from '~/assets/media/projects/salvadis/logo.webp'
import naturastudioImg from '~/assets/media/testimonials/naturastudio.webp'

export type Testimonial = {
  quote: string
  highlight: string
  author: string
  attribution: string
  image: ImageMetadata
  imageAlt: string
  imageIsLogo?: boolean
  /** Página del caso donde aparece la cita, si procede. */
  href?: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Muy buena experiencia con Doscientos. Profesionalidad, cercanía y muy buena atención desde el primer momento. Nos ayudaron con la puesta en marcha de la web y con diferentes cuestiones técnicas, siempre de forma rápida y profesional. Muy satisfechos con el trato y el servicio. Totalmente recomendable.',
    highlight: 'Profesionalidad, cercanía y muy buena atención',
    author: 'Salvadis',
    attribution: 'Reseña de Google',
    image: salvadisLogo,
    imageAlt: 'Logo de Salvadis',
    imageIsLogo: true,
  },
  {
    quote:
      'Trabajar con Doscientos ha sido una muy buena decisión. Necesitábamos una página web que transmitiera profesionalidad nada más entrar y eso mismo es lo que han conseguido. Una empresa seria y muy buenos profesionales, gracias!',
    highlight: 'una página web que transmitiera profesionalidad nada más entrar',
    author: 'Cyberimpulsa',
    attribution: 'Reseña de Google',
    image: cyberimpulsaLogo,
    imageAlt: 'Logo de Cyberimpulsa',
    imageIsLogo: true,
  },
  {
    quote:
      "Ràpids, clars i molt professionals. M'han ajudat a prioritzar bé i a no complicar el projecte innecessàriament. Han fet el disseny, m'han acompanyat en el proces i el producte m'ha encantat!",
    highlight: "el producte m'ha encantat!",
    author: 'Natura Studio',
    attribution: 'Ressenya de Google',
    image: naturastudioImg,
    imageAlt: 'Retrat de la fotógrafa de Natura Studio',
  },
  {
    quote:
      'Por primera vez tenemos visibilidad real de nuestro negocio. Sabemos qué vendemos, qué nos deja margen y qué le ha comprado cada cliente.',
    highlight: 'visibilidad real de nuestro negocio',
    author: 'Belén, propietaria de CashMóvil Canarias',
    attribution: 'Caso de cliente',
    image: cashMovilLogo,
    imageAlt: 'Logo de CashMóvil Canarias',
    imageIsLogo: true,
    href: '/projects/cash-movil-canarias',
  },
  {
    quote:
      'En menos de un mes ya teníamos la web en producción y las primeras llamadas agendadas desde ella. Exactamente lo que necesitábamos.',
    highlight: 'las primeras llamadas agendadas desde ella',
    author: 'Rafa, Cyberimpulsa',
    attribution: 'Caso de cliente',
    image: cyberimpulsaLogo,
    imageAlt: 'Logo de Cyberimpulsa',
    imageIsLogo: true,
    href: '/projects/cyberimpulsa',
  },
  {
    quote:
      'Transformamos un proceso tedioso en una experiencia que los usuarios disfrutan. El resultado: más engagement, más conversiones, más crecimiento.',
    highlight: 'una experiencia que los usuarios disfrutan',
    author: 'Lorenzo, founder de EXCHANGE STUDENT',
    attribution: 'Caso de cliente',
    image: flatmatchLogo,
    imageAlt: 'Logo de Flatmatch',
    imageIsLogo: true,
    href: '/projects/flatmatch',
  },
]
