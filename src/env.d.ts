interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID: string
  readonly PUBLIC_CLARITY_ID?: string
  readonly PUBLIC_LEADS_ENDPOINT?: string
  readonly PUBLIC_DIAGNOSTIC_ENDPOINT?: string
  /** Build-time URL of the published-only brand feed served by the backoffice. */
  readonly PUBLIC_BRAND_KIT_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  dataLayer: Record<string, unknown>[]
  __DOS_CONSENT?: { analytics?: boolean; marketing?: boolean } | null
  __DOS_ATTRIBUTION_CONSENT_LISTENER?: boolean
}
