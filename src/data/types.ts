export type CustomerSegment = "agriculture" | "industrial" | "retail-home";

export interface Brand {
  name: string;
  logo: string;              // asset path or "[LOGO NEEDED]"
  description: string;        // one factual line, no invented superlatives
  categoryTags: string[];     // e.g. "switchgear","cables","pumps","motors","fans","wiring","lighting"
  website?: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  photos: string[];           // "[PHOTO NEEDED]" until real assets exist
  segments: CustomerSegment[];
  icon: string;               // tabler icon name WITHOUT prefix, e.g. "bolt","droplet","engine"
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  district: string;
  state: string;
  pincode?: string;
}

export interface OpeningHour {
  days: string;
  time: string;
}

export interface SiteSettings {
  businessName: string;
  shortName?: string;
  tagline: string;
  establishedYear: number;
  address: Address;
  phone: string;          // tel: format e.g. "+919999999999"
  phoneDisplay: string;   // "+91 99999 99999"
  whatsapp: string;       // digits only for wa.me e.g. "919999999999"
  email?: string;
  mapEmbedUrl?: string;
  mapLink?: string;
  hours: OpeningHour[];
  social?: { label: string; href: string }[];
}

export interface StoryContent {
  heading: string;
  lead: string;
  paragraphs: string[];
  milestones?: { year: string; label: string }[];
}
