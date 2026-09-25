/**
 * persona-attribute-chip.tsx
 *
 * Compact "icon + label + value" chip for showing one persona attribute.
 *
 * Usage:
 *   <PersonaAttributeChip attribute="politicalView" value="Center-left" />
 */

import { getPersonaIcon } from "@/lib/persona/persona-icon-map";
import { cn } from "./cn";
import { PersonaIcon } from "./persona-icon";

export interface PersonaAttributeChipProps {
  attribute: string;
  value?: string;
  className?: string;
}

export function PersonaAttributeChip({ attribute, value, className }: PersonaAttributeChipProps) {
  const definition = getPersonaIcon(attribute);

  return (
    <div
      className={cn(
        "inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3 text-sm shadow-sm",
        className,
      )}
    >
      <PersonaIcon attribute={attribute} size="sm" />
      <span className="whitespace-nowrap text-muted-foreground">{definition.label}</span>
      {value ? (
        <span className="truncate font-medium text-foreground">{value}</span>
      ) : null}
    </div>
  );
}
