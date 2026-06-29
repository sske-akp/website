// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT: Fields marked [...] or with a // PLACEHOLDER comment contain
// stand-in values that are NOT real business data.
// Replace ALL of them before the site goes live.
// ─────────────────────────────────────────────────────────────────────────────

import type { SiteSettings } from "./types";

export const site: SiteSettings = {
  businessName: "Sri Sai Krishna Enterprises",
  shortName: "SSKE",
  tagline: "Powering homes, farms & industry since 1998",
  establishedYear: 1998,

  address: {
    line1: "12-4-118, Pudimadaka Rd",
    line2: "Opp Bajaj Electronics",
    city: "Anakapalli",
    district: "Visakhapatnam",
    state: "Andhra Pradesh",
    pincode: "531001",
  },

  phone: "+919182565955", // PLACEHOLDER — replace with real number
  phoneDisplay: "9182565955",
  whatsapp: "919182565955", // PLACEHOLDER — digits only for wa.me

  email: "saikrishna.anakapalli@gmail.com",

  // Live embedded map (iframe src) — renders on /visit-us
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30409.8253171056!2d82.9940620880379!3d17.686678478139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3971284f8088b9%3A0x6acd13d807828a2e!2sSri%20Sai%20Krishna%20Enterprises!5e0!3m2!1sen!2sin!4v1782755424790!5m2!1sen!2sin",
  // "Get directions" deep link — opens turn-by-turn navigation to the showroom
  mapLink: "https://maps.app.goo.gl/bEAwgRm6huuhSirv7",

  hours: [
    {
      days: "Mon – Sat",
      time: "10:30 AM – 8:30 PM",
    },
    { days: "Sunday", time: "CLOSED" },
  ],

  social: [], // No social profiles confirmed — add before launch if applicable
};
