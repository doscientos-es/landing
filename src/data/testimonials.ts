import type { ImageMetadata } from 'astro'

import cyberimpulsaLogo from '~/assets/media/projects/cyberimpulsa/logo.svg'
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
]
