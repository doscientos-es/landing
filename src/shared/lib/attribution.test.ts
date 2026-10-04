import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  buildAttributionPayload,
  buildAttributedCalendarBookingUrl,
  buildDirectWhatsappUrl,
  trackEvent,
} from './attribution'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('attribution consent', () => {
  it('does not persist or send visitor attribution without analytics consent', () => {
    const localStorage = {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }
    const sessionStorage = {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }
    const fetch = vi.fn()
    vi.stubGlobal('window', {
      __DOS_CONSENT: null,
      location: { search: '?utm_source=campaign', pathname: '/contact' },
      localStorage,
      sessionStorage,
    })
    vi.stubGlobal('fetch', fetch)

    const attribution = buildAttributionPayload()
    trackEvent('page_view')

    expect(attribution.visitor_id).toBe('')
    expect(attribution.first_utm_source).toBe('')
    expect(attribution.last_landing_path).toBe('')
    expect(attribution.conversion_step).toBe('')
    expect(attribution.internal_traffic).toBe(false)
    expect(localStorage.setItem).not.toHaveBeenCalled()
    expect(sessionStorage.setItem).not.toHaveBeenCalled()
    expect(fetch).not.toHaveBeenCalled()
  })

  it('does not retain advertising click IDs with analytics-only consent', () => {
    const localStorage = {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }
    const sessionStorage = {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }
    vi.stubGlobal('window', {
      __DOS_CONSENT: { analytics: true, marketing: false },
      location: {
        search: '?utm_source=campaign&gclid=google-click&fbclid=meta-click',
        pathname: '/contact',
      },
      localStorage,
      sessionStorage,
    })
    vi.stubGlobal('document', { referrer: 'https://search.example/' })

    const attribution = buildAttributionPayload()

    expect(attribution.first_utm_source).toBe('campaign')
    expect(attribution.first_gclid).toBe('')
    expect(attribution.last_gclid).toBe('')
    const storedTouch = JSON.parse(localStorage.setItem.mock.calls[0][1] as string)
    expect(storedTouch.gclid).toBe('')
    expect(storedTouch.fbclid).toBe('')
  })
})

describe('buildAttributedCalendarBookingUrl', () => {
  it('preserves the booking URL and stamps the visitor attribution as Cal metadata', () => {
    const result = buildAttributedCalendarBookingUrl(
      'https://cal.example/team/intro?existing=value',
      {
        event_id: 'event-1',
        visitor_id: 'visitor-1',
        conversion_step: 'calendar_booking',
        first_landing_path: '/',
        first_referrer: 'https://search.example',
        first_utm_source: 'google',
        first_utm_medium: 'cpc',
        first_utm_campaign: 'summer',
        first_utm_term: 'automation',
        first_utm_content: 'hero',
        first_gclid: '',
        last_landing_path: '/',
        last_referrer: 'https://search.example',
        last_utm_source: 'google',
        last_utm_medium: 'cpc',
        last_utm_campaign: 'summer',
        last_utm_term: 'automation',
        last_utm_content: 'hero',
        last_gclid: '',
        internal_traffic: false,
      },
      'home-hero',
    )

    const url = new URL(result ?? '')
    expect(url.searchParams.get('existing')).toBe('value')
    expect(url.searchParams.get('metadata[eventId]')).toBe('event-1')
    expect(url.searchParams.get('metadata[visitorId]')).toBe('visitor-1')
    expect(url.searchParams.get('metadata[landingRef]')).toBe('home-hero')
    expect(url.searchParams.get('metadata[firstUtmCampaign]')).toBe('summer')
  })

  it('returns null for an invalid booking URL', () => {
    expect(
      buildAttributedCalendarBookingUrl('not a URL', {
        event_id: 'event-1',
        visitor_id: 'visitor-1',
        conversion_step: 'calendar_booking',
        first_landing_path: '',
        first_referrer: '',
        first_utm_source: '',
        first_utm_medium: '',
        first_utm_campaign: '',
        first_utm_term: '',
        first_utm_content: '',
        first_gclid: '',
        last_landing_path: '',
        last_referrer: '',
        last_utm_source: '',
        last_utm_medium: '',
        last_utm_campaign: '',
        last_utm_term: '',
        last_utm_content: '',
        last_gclid: '',
        internal_traffic: false,
      }),
    ).toBeNull()
  })
})

describe('buildDirectWhatsappUrl', () => {
  it('removes tracking parameters while preserving the WhatsApp destination and message', () => {
    const result = buildDirectWhatsappUrl(
      'https://app.example/api/public/whatsapp-click?phone=%2B34%20611%20222%20333&text=Hola&visitor_id=visitor',
    )

    const url = new URL(result ?? '')
    expect(url.hostname).toBe('wa.me')
    expect(url.pathname).toBe('/34611222333')
    expect(url.searchParams.get('text')).toBe('Hola')
    expect(url.searchParams.has('visitor_id')).toBe(false)
  })
})
