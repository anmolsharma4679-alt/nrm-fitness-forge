/**
 * SINGLE SOURCE OF TRUTH — replace placeholders with the client's real data.
 * Anything marked PLACEHOLDER must be confirmed by THE NRM FITNESS before launch.
 */

import svcGym from "@/assets/svc-gym.jpg";
import svcPersonal from "@/assets/svc-personal.jpg";
import svcCrossfit from "@/assets/svc-crossfit.jpg";
import svcZumba from "@/assets/svc-zumba.jpg";
import svcYoga from "@/assets/svc-yoga.jpg";
import svcWeight from "@/assets/svc-weight.jpg";
import svcSwimming from "@/assets/svc-swimming.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import galEquipment from "@/assets/gal-equipment.jpg";
import galInterior from "@/assets/gal-interior.jpg";
import galGroup from "@/assets/gal-group.jpg";
import galTraining from "@/assets/gal-training.jpg";
import transformBefore from "@/assets/transform-before.jpg";
import transformAfter from "@/assets/transform-after.jpg";

export const business = {
  name: "THE NRM FITNESS",
  shortName: "NRM FITNESS",
  city: "Jodhpur",
  state: "Rajasthan",
  country: "India",
  tagline: "Premium fitness. Expert coaching. Real transformation.",
  description:
    "A modern fitness center in Jodhpur offering gym training, personal training, CrossFit, Zumba, yoga, swimming and structured fitness programs.",
  /** PLACEHOLDER — replace with the real street address */
  addressLine: "Address line 1, Area Name",
  addressLocality: "Jodhpur, Rajasthan 342001",
  /** PLACEHOLDER — replace with the real phone number (E.164 for tel:) */
  phoneDisplay: "+91 XXXXX XXXXX",
  phoneTel: "+910000000000",
  /** PLACEHOLDER — WhatsApp number in international format, digits only */
  whatsapp: "910000000000",
  /** PLACEHOLDER — replace with the real inbox */
  email: "hello@example.com",
  /** PLACEHOLDER — replace with real opening hours */
  hours: [
    { days: "Mon – Sat (Morning)", time: "0:00 AM – 0:00 AM (to be confirmed)" },
    { days: "Mon – Sat (Evening)", time: "0:00 PM – 0:00 PM (to be confirmed)" },
    { days: "Sunday", time: "To be confirmed" },
  ],
  /** PLACEHOLDER — replace with the gym's Google Maps place link */
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=gym+in+Jodhpur+Rajasthan",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Jodhpur,+Rajasthan,+India&output=embed",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
  /** PLACEHOLDER — editable stats */
  rating: "4.9",
  ratingSource: "Google Rating",
  memberCount: "500+",
  /** Set to false to hide prices and show "GET MEMBERSHIP DETAILS" instead */
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
  { value: `${business.rating}★`, label: "Google Rating" },
  { value: "EXPERT", label: "Coaching" },
  { value: "7+", label: "Fitness Programs" },
  { value: "JODHPUR", label: "Local Fitness Community" },
] as const;

export const whyUs = [
  {
    icon: "dumbbell",
    title: "PREMIUM EQUIPMENT",
    text: "Modern equipment designed for effective strength and fitness training.",
  },
  {
    icon: "whistle",
    title: "EXPERT COACHING",
    text: "Professional guidance to help members train safely and effectively.",
  },
  {
    icon: "target",
    title: "RESULT DRIVEN",
    text: "Programs designed around individual fitness goals.",
  },
  {
    icon: "users",
    title: "SUPPORTIVE COMMUNITY",
    text: "A motivating environment where members can stay consistent.",
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
    text: "Build strength, improve fitness and develop consistency.",
    image: svcGym,
    alt: "Member training with a barbell on the gym floor at THE NRM FITNESS",
  },
  {
    slug: "personal-training",
    title: "PERSONAL TRAINING",
    text: "One-on-one coaching focused on your individual goals.",
    image: svcPersonal,
    alt: "Personal trainer coaching a member through a dumbbell exercise",
  },
  {
    slug: "crossfit",
    title: "CROSSFIT",
    text: "High-intensity functional training for strength and conditioning.",
    image: svcCrossfit,
    alt: "Functional training with ropes and kettlebells in a dark gym",
  },
  {
    slug: "zumba",
    title: "ZUMBA",
    text: "High-energy group fitness sessions combining movement and music.",
    image: svcZumba,
    alt: "Group zumba dance fitness class in progress",
  },
  {
    slug: "yoga",
    title: "YOGA",
    text: "Improve mobility, flexibility, balance and mind-body connection.",
    image: svcYoga,
    alt: "Member holding a yoga warrior pose in a studio",
  },
  {
    slug: "weight-management",
    title: "WEIGHT MANAGEMENT",
    text: "Structured fitness support for healthy weight-management goals.",
    image: svcWeight,
    alt: "Member running on a treadmill in the cardio zone",
  },
  {
    slug: "swimming",
    title: "SWIMMING",
    text: "Fitness and conditioning through swimming.",
    image: svcSwimming,
    alt: "Swimmer doing freestyle laps in an indoor pool",
  },
];

/** PLACEHOLDER trainers — names, roles and experience must come from the client */
export const trainers = [
  {
    name: "TRAINER NAME",
    role: "Strength & Conditioning Coach",
    experience: "X+ YEARS EXPERIENCE",
    specialty: "Strength · Muscle Gain",
    bio: "Short trainer bio placeholder. Replace with the coach's real background and training approach.",
    image: trainer1,
    alt: "Portrait placeholder of a strength and conditioning coach",
  },
  {
    name: "TRAINER NAME",
    role: "Group Fitness & Zumba Coach",
    experience: "X+ YEARS EXPERIENCE",
    specialty: "Zumba · Weight Loss",
    bio: "Short trainer bio placeholder. Replace with the coach's real background and training approach.",
    image: trainer2,
    alt: "Portrait placeholder of a group fitness and zumba coach",
  },
  {
    name: "TRAINER NAME",
    role: "Functional Training Coach",
    experience: "X+ YEARS EXPERIENCE",
    specialty: "CrossFit · Conditioning",
    bio: "Short trainer bio placeholder. Replace with the coach's real background and training approach.",
    image: trainer3,
    alt: "Portrait placeholder of a functional training coach",
  },
] as const;

/** PLACEHOLDER pricing — replace with the client's approved plans and prices */
export const plans = [
  {
    name: "STARTER",
    summary: "Gym access",
    price: "₹XXXX",
    period: "/ MONTH",
    features: ["Full gym floor access", "Induction session", "Locker access"],
    featured: false,
  },
  {
    name: "FITNESS",
    summary: "Gym + group programs",
    price: "₹XXXX",
    period: "/ 3 MONTHS",
    features: [
      "Everything in Starter",
      "Group classes (Zumba, Yoga)",
      "Fitness assessment",
    ],
    featured: true,
  },
  {
    name: "TRANSFORMATION",
    summary: "Gym + personal training",
    price: "₹XXXX",
    period: "/ MONTH",
    features: [
      "Everything in Fitness",
      "Personal training sessions",
      "Goal-based program",
    ],
    featured: false,
  },
  {
    name: "PREMIUM",
    summary: "Custom fitness experience",
    price: "₹XXXX",
    period: "/ YEAR",
    features: [
      "All programs included",
      "Priority coach scheduling",
      "Progress reviews",
    ],
    featured: false,
  },
] as const;

/** PLACEHOLDER transformations — do not publish until real member stories are supplied */
export const transformations = [
  {
    name: "MEMBER NAME (PLACEHOLDER)",
    goal: "Weight Loss",
    story: "Placeholder story — replace with a real, consented member story.",
    before: transformBefore,
    after: transformAfter,
  },
  {
    name: "MEMBER NAME (PLACEHOLDER)",
    goal: "Muscle Gain",
    story: "Placeholder story — replace with a real, consented member story.",
    before: transformBefore,
    after: transformAfter,
  },
  {
    name: "MEMBER NAME (PLACEHOLDER)",
    goal: "General Fitness",
    story: "Placeholder story — replace with a real, consented member story.",
    before: transformBefore,
    after: transformAfter,
  },
] as const;

/** PLACEHOLDER reviews — replace with genuine Google/member reviews */
export const reviews = [
  { text: "REAL MEMBER REVIEW WILL BE ADDED HERE", name: "MEMBER NAME", stars: 5 },
  { text: "REAL MEMBER REVIEW WILL BE ADDED HERE", name: "MEMBER NAME", stars: 5 },
  { text: "REAL MEMBER REVIEW WILL BE ADDED HERE", name: "MEMBER NAME", stars: 5 },
  { text: "REAL MEMBER REVIEW WILL BE ADDED HERE", name: "MEMBER NAME", stars: 5 },
  { text: "REAL MEMBER REVIEW WILL BE ADDED HERE", name: "MEMBER NAME", stars: 5 },
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

export const gallery: GalleryItem[] = [
  { src: galInterior, alt: "Gym interior with squat racks and mirrors", category: "Interior" },
  { src: svcGym, alt: "Barbell training on the gym floor", category: "Gym" },
  { src: galEquipment, alt: "Dumbbells and kettlebells on the rack", category: "Equipment" },
  { src: galTraining, alt: "Member training with cable ropes", category: "Training" },
  { src: trainer1, alt: "Coach portrait at THE NRM FITNESS", category: "Trainers" },
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
    `Message: ${input.message}`,
    "",
    "Please contact me with membership details.",
  ].join("\n");
}
