/**
 * persona-icon-map.ts
 *
 * Central icon map for persona attributes. Every attribute a persona can have
 * (name, age, political view, tone, hobbies, ...) resolves to a Lucide icon,
 * a human label, and a semantic category.
 *
 * Next.js 14 compatible (App Router). This module is dependency-free besides
 * `lucide-react` and is safe to import from both Server and Client Components.
 *
 * Install:  npm i lucide-react
 */

import {
  AlignLeft,
  AudioLines,
  BookOpen,
  Brain,
  Briefcase,
  Cake,
  Church,
  Coffee,
  Compass,
  Dumbbell,
  Ear,
  FileText,
  Flag,
  Flame,
  Gamepad2,
  Globe,
  GraduationCap,
  Heart,
  HeartHandshake,
  HeartPulse,
  Home,
  Hourglass,
  IdCard,
  Landmark,
  Languages,
  Laugh,
  Layers,
  Lightbulb,
  MapPin,
  Megaphone,
  MessagesSquare,
  Moon,
  Music,
  Newspaper,
  Palette,
  PawPrint,
  PenLine,
  Plane,
  Quote,
  Scale,
  ShieldAlert,
  ShoppingBag,
  Smartphone,
  Smile,
  Sparkles,
  Sun,
  Target,
  Telescope,
  Trophy,
  Type,
  UserRound,
  Utensils,
  VenusAndMars,
  Vote,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export const PERSONA_ICON_CATEGORIES = [
  "identity",
  "background",
  "mind",
  "voice",
  "society",
  "lifestyle",
] as const;

export type PersonaIconCategory = (typeof PERSONA_ICON_CATEGORIES)[number];

export interface PersonaIconDefinition {
  icon: LucideIcon;
  label: string;
  category: PersonaIconCategory;
  /** Extra strings accepted when resolving an attribute by name. */
  aliases?: string[];
}

/* ------------------------------------------------------------------ */
/* The icon map                                                        */
/* ------------------------------------------------------------------ */

export const personaIcons = {
  /* ----------------------------- Identity ----------------------------- */
  name: { icon: IdCard, label: "Name", category: "identity", aliases: ["full name", "first name"] },
  description: { icon: FileText, label: "Description", category: "identity", aliases: ["bio", "about"] },
  age: { icon: Cake, label: "Age", category: "identity" },
  gender: { icon: VenusAndMars, label: "Gender", category: "identity" },
  pronouns: { icon: Type, label: "Pronouns", category: "identity" },
  nationality: { icon: Flag, label: "Nationality", category: "identity" },
  ethnicity: { icon: Globe, label: "Ethnicity / culture", category: "identity", aliases: ["culture", "ethnicity"] },
  languages: { icon: Languages, label: "Languages", category: "identity", aliases: ["language"] },
  avatar: { icon: UserRound, label: "Avatar", category: "identity" },

  /* ---------------------------- Background ---------------------------- */
  occupation: { icon: Briefcase, label: "Occupation", category: "background", aliases: ["job", "profession", "work"] },
  education: { icon: GraduationCap, label: "Education", category: "background" },
  income: { icon: Wallet, label: "Income", category: "background", aliases: ["salary", "wealth"] },
  location: { icon: MapPin, label: "Location", category: "background", aliases: ["city", "region", "residence"] },
  familyStatus: { icon: Home, label: "Family status", category: "background", aliases: ["family", "household"] },
  relationship: { icon: HeartHandshake, label: "Relationship", category: "background", aliases: ["relationship status", "marital status"] },
  religion: { icon: Church, label: "Religion", category: "background", aliases: ["faith", "beliefs-religious"] },
  socialClass: { icon: Layers, label: "Social class", category: "background", aliases: ["class", "social status"] },
  lifeStage: { icon: Hourglass, label: "Life stage", category: "background", aliases: ["generation", "generation cohort"] },

  /* ------------------------------- Mind ------------------------------- */
  personality: { icon: Sparkles, label: "Personality traits", category: "mind", aliases: ["traits", "temperament"] },
  thinkingStyle: { icon: Brain, label: "Thinking style", category: "mind", aliases: ["cognitive style", "mindset"] },
  values: { icon: Compass, label: "Core values", category: "mind", aliases: ["values"] },
  beliefs: { icon: Lightbulb, label: "Beliefs", category: "mind", aliases: ["worldview", "convictions"] },
  goals: { icon: Target, label: "Goals", category: "mind", aliases: ["aspirations", "ambitions"] },
  motivations: { icon: Flame, label: "Motivations", category: "mind", aliases: ["drives"] },
  fears: { icon: ShieldAlert, label: "Fears & concerns", category: "mind", aliases: ["fears", "concerns", "anxieties"] },
  outlook: { icon: Sun, label: "Outlook", category: "mind", aliases: ["optimism", "pessimism", "attitude"] },
  humor: { icon: Laugh, label: "Humor", category: "mind", aliases: ["sense of humor", "funny"] },
  creativity: { icon: Palette, label: "Creativity", category: "mind", aliases: ["artistic", "imaginative"] },
  curiosity: { icon: Telescope, label: "Curiosity", category: "mind", aliases: ["openness", "exploration"] },

  /* ------------------------------- Voice ------------------------------ */
  tone: { icon: AudioLines, label: "Tone of voice", category: "voice", aliases: ["voice", "tone"] },
  communicationStyle: { icon: MessagesSquare, label: "Communication style", category: "voice", aliases: ["communication"] },
  verbosity: { icon: AlignLeft, label: "Verbosity", category: "voice", aliases: ["length", "detail level"] },
  formality: { icon: PenLine, label: "Formality", category: "voice", aliases: ["register", "style-formal"] },
  catchphrase: { icon: Quote, label: "Catchphrases", category: "voice", aliases: ["quotes", "signature phrases"] },
  emojiUse: { icon: Smile, label: "Emoji usage", category: "voice", aliases: ["emoji", "emojis"] },
  listening: { icon: Ear, label: "Listening style", category: "voice", aliases: ["listening"] },

  /* ------------------------------ Society ----------------------------- */
  politicalView: { icon: Scale, label: "Political view", category: "society", aliases: ["political view", "politics", "political leaning", "ideology", "political orientation"] },
  partyAffiliation: { icon: Landmark, label: "Party affiliation", category: "society", aliases: ["party", "political party"] },
  votingBehavior: { icon: Vote, label: "Voting behavior", category: "society", aliases: ["voting", "vote"] },
  activism: { icon: Megaphone, label: "Activism", category: "society", aliases: ["causes", "advocacy"] },
  mediaDiet: { icon: Newspaper, label: "Media diet", category: "society", aliases: ["media", "news sources"] },
  techSavviness: { icon: Smartphone, label: "Tech savviness", category: "society", aliases: ["tech", "technology", "digital literacy"] },

  /* ----------------------------- Lifestyle ---------------------------- */
  interests: { icon: Heart, label: "Interests", category: "lifestyle", aliases: ["likes", "passions"] },
  hobbies: { icon: Gamepad2, label: "Hobbies", category: "lifestyle", aliases: ["free time", "pastimes"] },
  reading: { icon: BookOpen, label: "Reading habits", category: "lifestyle", aliases: ["books", "reading"] },
  music: { icon: Music, label: "Music taste", category: "lifestyle", aliases: ["music taste", "favorite music"] },
  fitness: { icon: Dumbbell, label: "Fitness", category: "lifestyle", aliases: ["exercise", "workout"] },
  health: { icon: HeartPulse, label: "Health", category: "lifestyle", aliases: ["wellness"] },
  diet: { icon: Utensils, label: "Diet", category: "lifestyle", aliases: ["food", "eating habits"] },
  sleep: { icon: Moon, label: "Sleep habits", category: "lifestyle", aliases: ["sleep schedule"] },
  travel: { icon: Plane, label: "Travel", category: "lifestyle", aliases: ["trips", "wanderlust"] },
  shopping: { icon: ShoppingBag, label: "Shopping habits", category: "lifestyle", aliases: ["spending", "consumer behavior"] },
  pets: { icon: PawPrint, label: "Pets", category: "lifestyle", aliases: ["animals"] },
  coffee: { icon: Coffee, label: "Caffeine habits", category: "lifestyle", aliases: ["coffee", "tea"] },
  sports: { icon: Trophy, label: "Sports", category: "lifestyle", aliases: ["teams", "athletics"] },
} as const satisfies Record<string, PersonaIconDefinition>;

export type PersonaIconKey = keyof typeof personaIcons;

/* ------------------------------------------------------------------ */
/* Category styling (Tailwind classes, dark-mode aware)                */
/* ------------------------------------------------------------------ */

export const personaCategoryStyles: Record<
  PersonaIconCategory,
  { label: string; icon: string; badge: string }
> = {
  identity: {
    label: "Identity",
    icon: "text-sky-600 dark:text-sky-400",
    badge: "bg-sky-100 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400",
  },
  background: {
    label: "Background",
    icon: "text-slate-600 dark:text-slate-300",
    badge: "bg-slate-100 text-slate-600 dark:bg-slate-500/15 dark:text-slate-300",
  },
  mind: {
    label: "Mind & traits",
    icon: "text-violet-600 dark:text-violet-400",
    badge: "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  },
  voice: {
    label: "Voice & tone",
    icon: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
  },
  society: {
    label: "Society & politics",
    icon: "text-rose-600 dark:text-rose-400",
    badge: "bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400",
  },
  lifestyle: {
    label: "Lifestyle",
    icon: "text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  },
};

/* ------------------------------------------------------------------ */
/* Resolution helpers                                                  */
/* ------------------------------------------------------------------ */

const FALLBACK_DEFINITION: PersonaIconDefinition = {
  icon: UserRound,
  label: "Persona attribute",
  category: "identity",
};

/**
 * Resolve any attribute string to an icon definition.
 * Accepts map keys ("politicalView"), labels ("Political view") and aliases
 * ("ideology"). Falls back to a neutral persona icon.
 */
export function getPersonaIcon(attribute: string): PersonaIconDefinition {
  const direct = personaIcons[attribute as PersonaIconKey];
  if (direct) return direct;

  const key = findPersonaIconKey(attribute);
  return key ? personaIcons[key] : FALLBACK_DEFINITION;
}

const ICON_ENTRIES = Object.entries(personaIcons) as [
  PersonaIconKey,
  PersonaIconDefinition,
][];

/** Find the closest map key for an arbitrary attribute string. */
export function findPersonaIconKey(query: string): PersonaIconKey | null {
  const normalized = normalize(query);
  if (!normalized) return null;

  for (const [key] of ICON_ENTRIES) {
    if (normalize(key) === normalized) return key;
  }

  for (const [key, def] of ICON_ENTRIES) {
    if (normalize(def.label) === normalized) return key;
    if (def.aliases?.some((alias) => normalize(alias) === normalized)) return key;
  }

  // Last resort: substring containment, e.g. "politicalViews_custom" hits "politicalView".
  for (const [key] of ICON_ENTRIES) {
    if (normalized.includes(normalize(key))) return key;
  }

  return null;
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/[\s_/-]+/g, "");
}

/** Group all icon keys by category — handy for building pickers/settings UIs. */
export function personaIconsByCategory(): Record<PersonaIconCategory, PersonaIconKey[]> {
  const grouped = {
    identity: [],
    background: [],
    mind: [],
    voice: [],
    society: [],
    lifestyle: [],
  } as Record<PersonaIconCategory, PersonaIconKey[]>;

  for (const [key, def] of ICON_ENTRIES) {
    grouped[def.category].push(key);
  }
  return grouped;
}
