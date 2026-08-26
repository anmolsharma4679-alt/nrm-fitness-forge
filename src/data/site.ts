/**
 * SINGLE SOURCE OF TRUTH — real THE NRM FITNESS business data.
 *
 * Owner-editable: everything below can be updated in this one file.
 * Anything still marked PLACEHOLDER is NOT shown as fact on the website —
 * the UI falls back to "Contact us" style copy instead of inventing details.
 */

import svcGym from "@/assets/svc-gym.jpg";
import svcPersonal from "@/assets/svc-personal.jpg";
import svcCrossfit from "@/assets/svc-crossfit.jpg";
import svcZumba from "@/assets/svc-zumba.jpg";
import svcYoga from "@/assets/svc-yoga.jpg";
import svcWeight from "@/assets/svc-weight.jpg";
import svcSwimming from "@/assets/svc-swimming.jpg";
import galEquipment from "@/assets/gal-equipment.jpg";
import galInterior from "@/assets/gal-interior.jpg";
import galGroup from "@/assets/gal-group.jpg";
import galTraining from "@/assets/gal-training.jpg";
import trainer1 from "@/assets/trainer-1.jpg";


export const business = {
  name: "THE NRM FITNESS",
  shortName: "NRM FITNESS",
  city: "Jodhpur",
  state: "Rajasthan",
  country: "India",
  established: "2023",
  tagline: "Train with purpose. Build strength. Stay consistent.",
  description:
    "Gym training, personal training, CrossFit, Zumba, Yoga, Swimming and fitness programs in Jodhpur.",
  longDescription:
    "THE NRM FITNESS is a modern unisex fitness center in Keshavnagar, Pal Road, Jodhpur — quality equipment, supportive trainers and a welcoming, female-friendly environment.",

  /** Real address */
  addressLine: "Ashoka Plaza, Opposite Ashok Udhyan",
  addressLine2: "Pal Road, Keshavnagar",
  addressLocality: "Jodhpur, Rajasthan 342008",
  postalCode: "342008",

  /** Real phone number */
  phoneDisplay: "+91 98283 50520",
  phoneTel: "+919828350520",
  /** WhatsApp — same business number, digits only, international format */
  whatsapp: "919828350520",

  /** PLACEHOLDER — no public email address supplied yet */
  email: "",

  /**
   * Opening hours. Set `confirmed: false` while timings are unconfirmed —
   * the site then shows `hoursFallback` instead of any invented time.
   */
  hoursConfirmed: false,
  hoursFallback: "Contact us for current timings",
  hours: [
    { days: "Monday – Saturday", time: "PLACEHOLDER" },
    { days: "Sunday", time: "PLACEHOLDER" },
  ],

  /** Google Maps — address search link (no invented coordinates) */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=THE+NRM+FITNESS+Ashoka+Plaza+Pal+Road+Keshavnagar+Jodhpur+Rajasthan+342008",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Ashoka+Plaza,+Pal+Road,+Keshavnagar,+Jodhpur,+Rajasthan+342008&output=embed",

  social: {
    instagram: "https://www.instagram.com/thenrmgym/",
    instagramHandle: "@thenrmgym",
    /** PLACEHOLDER — leave empty until verified; empty links are hidden */
    facebook: "",
    youtube: "",
  },

  /** Editable reputation values */
  rating: "4.9",
  ratingCount: "459+",
  ratingSource: "Google Rating",
  /** Google Business Profile reviews link — can be updated later */
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=THE+NRM+FITNESS+Jodhpur",

  /** Show membership prices on the site. See `plans` + `pricingIsDemo` below. */
  showPrices: true,

} as const;

export const canonicalBase = "";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Trainers", to: "/trainers" },
  { label: "Membership", to: "/membership" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: `${business.rating}★`, label: business.ratingSource },
  { value: `${business.ratingCount}`, label: "Ratings" },
  { value: `SINCE ${business.established}`, label: "Established" },
  { value: "JODHPUR", label: "Keshavnagar, Pal Road" },
] as const;

export const whyUs = [
  {
    icon: "dumbbell",
    title: "QUALITY EQUIPMENT",
    text: "A well-equipped environment for strength, cardio and fitness training.",
  },
  {
    icon: "whistle",
    title: "SUPPORTIVE TRAINERS",
    text: "Guidance and motivation to help members stay consistent.",
  },
  {
    icon: "target",
    title: "MULTIPLE FITNESS OPTIONS",
    text: "Gym training, personal training, CrossFit, Zumba, Yoga, Swimming and more.",
  },
  {
    icon: "users",
    title: "WELCOMING ENVIRONMENT",
    text: "A comfortable, motivating and inclusive fitness environment for everyone.",
  },
] as const;

export type Service = {
  slug: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    slug: "gym-training",
    title: "GYM TRAINING",
    text: "Strength, cardio and general fitness training in a modern gym environment.",
    image: svcGym,
    alt: "Member training with a barbell on the gym floor at THE NRM FITNESS",
  },
  {
    slug: "personal-training",
    title: "PERSONAL TRAINING",
    text: "Personalized coaching and guidance around individual fitness goals.",
    image: svcPersonal,
    alt: "Personal trainer coaching a member through a dumbbell exercise",
  },
  {
    slug: "crossfit",
    title: "CROSSFIT",
    text: "Functional, high-intensity training focused on strength and conditioning.",
    image: svcCrossfit,
    alt: "Functional training with ropes and kettlebells in a dark gym",
  },
  {
    slug: "zumba",
    title: "ZUMBA",
    text: "Energetic group fitness sessions combining movement, music and exercise.",
    image: svcZumba,
    alt: "Group zumba dance fitness class in progress",
  },
  {
    slug: "yoga",
    title: "YOGA",
    text: "Yoga-focused movement, flexibility, mobility and mind-body practice.",
    image: svcYoga,
    alt: "Member holding a yoga warrior pose in a studio",
  },
  {
    slug: "swimming",
    title: "SWIMMING",
    text: "Swimming and fitness activities in the available pool facility.",
    image: svcSwimming,
    alt: "Swimmer doing freestyle laps in an indoor pool",
  },
  {
    slug: "weight-management",
    title: "WEIGHT MANAGEMENT",
    text: "Fitness-focused support for people working toward healthy weight-management goals.",
    image: svcWeight,
    alt: "Member running on a treadmill in the cardio zone",
  },
];

/**
 * Coaching disciplines offered at the gym.
 * No trainer names, photos, credentials or biographies are claimed here —
 * add a `trainers` array with real profiles once the client supplies them.
 */
export const coachingDisciplines = [
  {
    title: "GYM & STRENGTH",
    text: "Guidance on strength and cardio training, technique and progression on the gym floor.",
  },
  {
    title: "PERSONAL TRAINING",
    text: "One-on-one coaching built around your individual fitness goal and schedule.",
  },
  {
    title: "GROUP FITNESS",
    text: "Zumba, Yoga and CrossFit-style group sessions led in a motivating environment.",
  },
] as const;

/** Trainer profiles are not published yet — the UI shows a "coming soon" state instead. */
export const trainerProfilesAvailable = false;

/** Member transformations are not published yet — the UI shows a "coming soon" state instead. */
export const transformationsAvailable = false;

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * MEMBERSHIP PLANS — SINGLE PLACE TO EDIT PRICING
 *
 * TODO: Replace temporary demo membership prices with client-approved prices
 * before final public launch.
 *
 * The prices below are TEMPORARY DEMO/PLACEHOLDER VALUES for design purposes
 * only. They are NOT verified official THE NRM FITNESS prices.
 *
 * How to update:
 *   1. Edit `price` / `period` / `features` in `plans` below.
 *   2. Set `pricingIsDemo = false` once prices are client-approved — this
 *      removes the "indicative pricing" notice from the membership page.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const pricingIsDemo = true;

export const plans = [
  {
    name: "MONTHLY",
    summary: "Flexible month-to-month training",
    price: "₹999",
    period: "per month",
    features: ["Full gym floor access", "Induction session", "Locker access"],
    featured: false,
  },
  {
    name: "QUARTERLY",
    summary: "Three months of consistency",
    price: "₹2,499",
    period: "per 3 months",
    features: [
      "Full gym floor access",
      "Group fitness sessions",
      "Trainer guidance on the floor",
    ],
    featured: true,
  },
  {
    name: "HALF-YEARLY",
    summary: "Six months, better value",
    price: "₹4,499",
    period: "per 6 months",
    features: ["Full gym floor access", "Group fitness sessions", "Goal-based programming"],
    featured: false,
  },
  {
    name: "YEARLY",
    summary: "Best value for the long run",
    price: "₹7,999",
    period: "per 12 months",
    features: [
      "Full gym floor access",
      "Group fitness sessions",
      "Priority membership support",
    ],
    featured: false,
  },
] as const;


export const galleryCategories = [
  "All",
  "Gym",
  "Equipment",
  "Training",
  "Trainers",
  "Group Classes",
  "Swimming",
  "Interior",
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  category: (typeof galleryCategories)[number];
};

/** Replace `src` values with real NRM Fitness photos — structure stays the same */
export const gallery: GalleryItem[] = [
  { src: galInterior, alt: "Gym interior with squat racks and mirrors", category: "Interior" },
  { src: svcGym, alt: "Barbell training on the gym floor", category: "Gym" },
  { src: galEquipment, alt: "Dumbbells and kettlebells on the rack", category: "Equipment" },
  { src: galTraining, alt: "Member training with cable ropes", category: "Training" },
  { src: trainer1, alt: "Coaching support during a training session", category: "Trainers" },
  { src: galGroup, alt: "Group fitness class in the studio", category: "Group Classes" },
  { src: svcSwimming, alt: "Swimming lap training in the pool", category: "Swimming" },
  { src: svcCrossfit, alt: "Functional CrossFit-style training area", category: "Training" },
  { src: svcZumba, alt: "Zumba group class with music and movement", category: "Group Classes" },
  { src: svcYoga, alt: "Yoga session in the studio", category: "Group Classes" },
  { src: svcPersonal, alt: "Personal training session in progress", category: "Training" },
  { src: svcWeight, alt: "Cardio zone with treadmills", category: "Gym" },
];

export const fitnessGoals = [
  "Weight Loss",
  "Muscle Gain",
  "Strength",
  "General Fitness",
  "Personal Training",
  "Other",
] as const;

export const programOptions = [
  "Gym",
  "Personal Training",
  "CrossFit",
  "Zumba",
  "Yoga",
  "Swimming",
  "Weight Management",
] as const;

export const contactMethods = ["WhatsApp", "Phone Call", "Either"] as const;

/** Full address as a single line — used for schema and directions */
export const fullAddress = `${business.addressLine}, ${business.addressLine2}, ${business.addressLocality}, ${business.country}`;

export function whatsappLink(message?: string) {
  const text =
    message ??
    `Hi ${business.name}, I would like to enquire about joining the gym. Please share membership details.`;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function enquiryMessage(input: {
  name: string;
  phone: string;
  goal: string;
  program: string;
  contactMethod: string;
  message: string;
}) {
  return [
    `Hi ${business.name},`,
    "",
    "I would like to enquire about joining the gym.",
    "",
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Fitness Goal: ${input.goal}`,
    `Program: ${input.program}`,
    `Preferred Contact: ${input.contactMethod}`,
    input.message ? `Message: ${input.message}` : "",
    "",
    "Please contact me with membership details.",
  ]
    .filter((l, i, a) => !(l === "" && a[i - 1] === ""))
    .join("\n");
}
