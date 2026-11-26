import { branding } from '~/config/branding'
import { company } from '~/config/company'

function escapeVCardText(value: string) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\r\n|\r|\n/g, '\\n')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
}

function foldVCardLine(line: string) {
  const encoder = new TextEncoder()
  let result = ''
  let length = 0

  for (const character of line) {
    const size = encoder.encode(character).length
    if (length + size > 75) {
      result += '\r\n '
      length = 1
    }
    result += character
    length += size
  }

  return result
}

function createVCard(member: (typeof branding.team)[number]) {
  const address = company.officeAddress
  const [givenName, ...familyName] = member.name.split(' ')
  const note = [
    'Teléfono y correo generales de doscientos.',
    `Perfil: ${member.link}`,
    `LinkedIn: ${branding.social.linkedin}`,
    `Instagram: ${branding.social.instagram}`,
    `GitHub: ${branding.social.github}`,
    `X: ${branding.social.twitter}`,
  ].join('\n')
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${escapeVCardText(member.name)}`,
    `N:${escapeVCardText(familyName.join(' '))};${escapeVCardText(givenName)};;;`,
    `ORG:${escapeVCardText(branding.name)}`,
    `TITLE:${escapeVCardText(member.role)}`,
    `TEL;TYPE=CELL,WORK:+${branding.contact.whatsapp.number}`,
    `EMAIL;TYPE=INTERNET,WORK:${branding.contact.email}`,
    `URL:${branding.url}`,
    `ADR;TYPE=WORK:;;${[address.streetAddress, address.addressLocality, address.addressRegion, address.postalCode, address.addressCountry].map(escapeVCardText).join(';')}`,
    `NOTE:${escapeVCardText(note)}`,
    'END:VCARD',
  ]

  return lines.map(foldVCardLine).join('\r\n')
}

export function GET() {
  return new Response(`${branding.team.map(createVCard).join('\r\n')}\r\n`, {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  })
}
