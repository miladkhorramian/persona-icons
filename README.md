# Persona Icons

A drop-in icon system for AI persona builders (Next.js 14, App Router).

Every persona attribute — name, age, political view, tone, hobbies, … — resolves
to a Lucide icon, a human-readable label, and a semantic category
(Identity, Background, Mind, Voice, Society, Lifestyle). Raw AI output fields can
be fed straight into the resolver, so unknown or custom attribute names still get
a sensible icon instead of breaking your UI.

## Install

```bash
npm i lucide-react
```

Copy `src/lib/persona/` and `src/components/persona/` into your project. No other
dependencies required.

## File structure

```
src/
├── lib/
│   └── persona/
│       └── persona-icon-map.ts   # The icon map + resolution helpers
└── components/
    └── persona/
        ├── index.ts              # Barrel exports
        ├── cn.ts                 # Tiny className joiner
        ├── persona-icon.tsx      # <PersonaIcon /> — single attribute icon
        ├── persona-attribute-chip.tsx  # <PersonaAttributeChip /> — icon + label + value
        ├── persona-avatar.tsx    # <PersonaAvatar /> — initials avatar with category accent
        └── persona-card.tsx      # <PersonaCard /> — full persona profile card
```

## Usage

### Icon map

```tsx
import {
  getPersonaIcon,        // resolve any string → icon definition
  findPersonaIconKey,    // resolve any string → map key (or null)
  personaIcons,          // the raw map (48 attributes)
  personaIconsByCategory, // grouped keys, handy for pickers
  personaCategoryStyles, // per-category label + Tailwind classes
} from "@/lib/persona/persona-icon-map";

const def = getPersonaIcon("politicalView");   // map key
const def2 = getPersonaIcon("ideology");       // alias
const def3 = getPersonaIcon("politicalViews_custom"); // fuzzy — still matches
// def.icon → LucideIcon, def.label → "Political view", def.category → "society"
```

Unknown attributes fall back to a neutral persona icon — feed raw AI output
directly, no validation needed.

### Components

```tsx
import { PersonaIcon, PersonaAttributeChip, PersonaAvatar, PersonaCard } from "@/components/persona";

// A single icon for an attribute
<PersonaIcon attribute="politicalView" className="size-5" />

// Icon + label + value chip (great for grids of persona fields)
<PersonaAttributeChip attribute="tone" value="Warm, conversational" />

// Initials avatar with a stable per-name accent color
<PersonaAvatar name="Maya Chen" size="md" />

// Full persona profile card, grouped by category
<PersonaCard
  name="Maya Chen"
  description="Community organizer..."
  attributes={[
    { key: "politicalView", value: "Progressive" },
    { key: "occupation", value: "Teacher" },
  ]}
/>

// Or render the sample instantly
import { SamplePersonaCard } from "@/components/persona";
<SamplePersonaCard />
```

All components are safe in Server and Client Components. Styling uses plain
Tailwind classes (dark-mode aware) — no config needed beyond Tailwind itself.

## Categories

| Category   | Label              | Accent  |
| ---------- | ------------------ | ------- |
| identity   | Identity           | sky     |
| background | Background         | slate   |
| mind       | Mind & traits      | violet  |
| voice      | Voice & tone       | amber   |
| society    | Society & politics | rose    |
| lifestyle  | Lifestyle          | emerald |

## Extending

Add a new attribute to `personaIcons` in `persona-icon-map.ts`:

```ts
myCustomField: {
  icon: Wrench,            // any lucide-react icon
  label: "My field",
  category: "background",
  aliases: ["custom field"],
},
```

The type system (`satisfies Record<string, PersonaIconDefinition>`) keeps every
entry honest, and resolution (key → label → alias → fuzzy) picks it up
automatically.
