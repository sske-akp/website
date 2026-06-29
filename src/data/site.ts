// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT: Fields marked [...] or with a // PLACEHOLDER comment contain
// stand-in values that are NOT real business data.
// Replace ALL of them before the site goes live.
// ─────────────────────────────────────────────────────────────────────────────

import type { SiteSettings } from './types';

export const site: SiteSettings = {
  businessName: "Sri Sai Krishna Enterprises",
  shortName: "SSKE",
  tagline: "Powering homes, farms & industry since 1998",
  establishedYear: 1998,

  address: {
    line1: "[SHOWROOM ADDRESS LINE 1 — ADD BEFORE LAUNCH]",
    line2: "[LANDMARK / AREA — optional]",
    city: "Anakapalli",
    district: "Visakhapatnam",
    state: "Andhra Pradesh",
    pincode: "[PINCODE — ADD BEFORE LAUNCH]",
  },

  phone: "+910000000000",       // PLACEHOLDER — replace with real number
  phoneDisplay: "[PHONE — ADD BEFORE LAUNCH]",
  whatsapp: "910000000000",     // PLACEHOLDER — digits only for wa.me

  email: "[EMAIL — ADD BEFORE LAUNCH]",

  // mapEmbedUrl intentionally omitted until verified embed code is available
  mapLink: "[GOOGLE MAPS LINK — ADD BEFORE LAUNCH]",

  hours: [
    { days: "[DAYS — e.g. Mon – Sat]",  time: "[HOURS — e.g. 9:30 AM – 8:30 PM]" },
    { days: "Sunday",                    time: "[OPEN / CLOSED — ADD BEFORE LAUNCH]" },
  ],

  social: [], // No social profiles confirmed — add before launch if applicable
};
