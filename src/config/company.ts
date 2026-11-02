import { branding } from './branding'

export const company = {
  legalAddress: {
    streetAddress: branding.legal.address.street,
    postalCode: branding.legal.address.postalCode,
    addressLocality: branding.legal.address.city,
    addressRegion: branding.legal.address.province,
    addressCountry: 'ES',
  },
  officeAddress: {
    streetAddress: 'Carrer Joan XXIII, 8',
    postalCode: '08330',
    addressLocality: 'Premià de Mar',
    addressRegion: 'Barcelona',
    addressCountry: 'ES',
  },
  // Coordenadas del número 8 publicadas en el censo municipal de actividades.
  geo: { latitude: 41.4885158, longitude: 2.3528098 },
  serviceAreas: ['Premià de Mar', 'Maresme', 'Mataró', 'Barcelona', 'España'],
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '13:00',
    },
  ],
  contactPoints: [
    {
      contactType: 'sales',
      email: branding.contact.email,
      telephone: branding.contact.whatsapp.displayNumber,
      availableLanguage: ['es', 'ca'],
    },
  ],
}
