/**
 * persona-card.tsx
 *
 * Ready-made persona card: gradient avatar, name/role header, and a grid of
 * attribute chips driven entirely by the icon map. Use it as-is or as a
 * reference for wiring the icon system into your own layout.
 */

import { personaCategoryStyles } from "@/lib/persona/persona-icon-map";
import { cn } from "./cn";
import { PersonaAttributeChip } from "./persona-attribute-chip";
import { PersonaAvatar } from "./persona-avatar";
import { PersonaIcon } from "./persona-icon";

export interface PersonaAttribute {
  /** Icon-map key, label or alias — e.g. "politicalView". */
  attribute: string;
  value: string;
}

export interface PersonaCardProps {
  name: string;
  role?: string;
  /** Attribute key shown inside the avatar, e.g. "personality". Omit for initials. */
  avatarIconKey?: string;
  /** Attribute key rendered as a highlighted badge in the header, e.g. "tone". */
  toneAttribute?: string;
  toneValue?: string;
  attributes: PersonaAttribute[];
  className?: string;
}

export function PersonaCard({
  name,
  role,
  avatarIconKey,
  toneAttribute,
  toneValue,
  attributes,
  className,
}: PersonaCardProps) {
  return (
    <article
      className={cn(
        "w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <header className="flex items-center gap-3">
        <PersonaAvatar name={name} iconKey={avatarIconKey} size="lg" />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-foreground">{name}</h3>
          {role ? (
            <p className="truncate text-sm text-muted-foreground">{role}</p>
          ) : null}
        </div>
        {toneAttribute && toneValue ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
            <PersonaIcon attribute={toneAttribute} size="xs" plain />
            {toneValue}
          </span>
        ) : null}
      </header>

      <div className="mt-4 flex flex-wrap gap-2">
        {attributes.map((attr) => (
          <PersonaAttributeChip
            key={attr.attribute}
            attribute={attr.attribute}
            value={attr.value}
          />
        ))}
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Sample data so you can render something immediately                 */
/* ------------------------------------------------------------------ */

export const samplePersona = {
  name: "Maya Okafor",
  role: "Community organizer · Portland",
  avatarIconKey: "personality",
  toneAttribute: "tone",
  toneValue: "Warm, direct",
  attributes: [
    { attribute: "age", value: "34" },
    { attribute: "occupation", value: "Nonprofit director" },
    { attribute: "education", value: "MA Sociology" },
    { attribute: "location", value: "Portland, OR" },
    { attribute: "politicalView", value: "Progressive" },
    { attribute: "votingBehavior", value: "Always votes" },
    { attribute: "mediaDiet", value: "NPR, long-form essays" },
    { attribute: "values", value: "Equity, community" },
    { attribute: "humor", value: "Dry, self-aware" },
    { attribute: "communicationStyle", value: "Story-first" },
    { attribute: "interests", value: "Urban gardening, live music" },
    { attribute: "techSavviness", value: "Confident" },
  ] satisfies PersonaAttribute[],
};

/** Demo usage: <PersonaCard {...samplePersona} /> */
export function SamplePersonaCard() {
  return <PersonaCard {...samplePersona} />;
}

/** Grouped legend of every category, using the map's own styling. */
export function PersonaCategoryLegend() {
  return (
    <ul className="flex flex-wrap gap-3 text-sm">
      {Object.entries(personaCategoryStyles).map(([category, styles]) => (
        <li key={category} className="inline-flex items-center gap-2">
          <span className={cn("h-3 w-3 rounded-full", styles.badge.split(" ")[0])} />
          <span className="text-muted-foreground">{styles.label}</span>
        </li>
      ))}
    </ul>
  );
}
