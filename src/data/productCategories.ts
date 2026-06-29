import type { ProductCategory } from './types';

export const productCategories: ProductCategory[] = [
  {
    slug: "pumps-and-motors",
    name: "Pumps & Motors",
    description:
      "Submersible, openwell, and centrifugal pumps for agricultural irrigation and domestic water supply, backed by motors built for continuous-duty performance.",
    photos: ["[PHOTO NEEDED]"],
    segments: ["agriculture", "retail-home"],
    icon: "droplet",
  },
  {
    slug: "submersible-cable-and-starters",
    name: "Submersible Cable & Starters",
    description:
      "Flat submersible cables and motor starters engineered to protect and control agricultural pump sets, ensuring reliable field operation.",
    photos: ["[PHOTO NEEDED]"],
    segments: ["agriculture"],
    icon: "plug-connected",
  },
  {
    slug: "fans-and-air-circulation",
    name: "Fans & Air Circulation",
    description:
      "Ceiling fans, wall-mounted air circulators, pedestal fans, and industrial exhaust fans for homes, commercial spaces, and factory floors.",
    photos: ["[PHOTO NEEDED]"],
    segments: ["retail-home", "industrial"],
    icon: "windmill",
  },
  {
    slug: "wiring-switches-and-accessories",
    name: "Wiring, Switches & Accessories",
    description:
      "Modular switches, sockets, MCB distribution boards, and wiring accessories for safe, neat residential and commercial electrical installations.",
    photos: ["[PHOTO NEEDED]"],
    segments: ["retail-home"],
    icon: "plug",
  },
  {
    slug: "lighting",
    name: "Lighting",
    description:
      "LED bulbs, tube lights, battens, and luminaires for energy-efficient illumination in homes, shops, and industrial work areas.",
    photos: ["[PHOTO NEEDED]"],
    segments: ["retail-home", "industrial"],
    icon: "bulb",
  },
  {
    slug: "cables-and-wires",
    name: "Cables & Wires",
    description:
      "PVC-insulated house wires, flexible cables, armoured power cables, and specialised agricultural cables from trusted national manufacturers.",
    photos: ["[PHOTO NEEDED]"],
    segments: ["retail-home", "agriculture", "industrial"],
    icon: "bolt",
  },
  {
    slug: "switchgear-and-protection",
    name: "Switchgear & Protection",
    description:
      "MCBs, ELCBs, RCCBs, fuse units, and distribution boards that protect residential circuits and light-industrial installations against overloads and faults.",
    photos: ["[PHOTO NEEDED]"],
    segments: ["industrial", "retail-home"],
    icon: "settings",
  },
  {
    slug: "industrial-automation-and-controls",
    name: "Industrial Automation & Controls",
    description:
      "Contactors, motor protection relays, soft starters, control panels, and automation components for manufacturing, processing, and infrastructure projects.",
    photos: ["[PHOTO NEEDED]"],
    segments: ["industrial"],
    icon: "cpu",
  },
];
