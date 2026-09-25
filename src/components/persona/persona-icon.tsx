/**
 * persona-icon.tsx
 *
 * Renders the mapped icon for a persona attribute, color-coded by category.
 * Works in Server and Client Components (no hooks, no browser APIs).
 *
 * Usage:
 *   <PersonaIcon attribute="politicalView" />              // tinted tile
 *   <PersonaIcon attribute="tone" plain size="lg" />        // bare icon
 *   <PersonaIcon attribute="hobbies" className="ml-2" />    // any string is accepted
 */

import type { HTMLAttributes } from "react";
import {
  getPersonaIcon,
  personaCategoryStyles,
} from "@/lib/persona/persona-icon-map";
import { cn } from "./cn";

const ICON_SIZES = { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 } as const;

const TILE_SIZES = {
  xs: "h-5 w-5 rounded",
  sm: "h-6 w-6 rounded-md",
  md: "h-8 w-8 rounded-lg",
  lg: "h-10 w-10 rounded-xl",
  xl: "h-12 w-12 rounded-2xl",
} as const;

export interface PersonaIconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Map key, label or alias — anything `getPersonaIcon` understands. */
  attribute: string;
  size?: keyof typeof ICON_SIZES;
  /** Render the bare icon without the tinted tile background. */
  plain?: boolean;
}

export function PersonaIcon({
  attribute,
  size = "md",
  plain = false,
  className,
  ...props
}: PersonaIconProps) {
  const definition = getPersonaIcon(attribute);
  const Icon = definition.icon;
  const styles = personaCategoryStyles[definition.category];

  if (plain) {
    return (
      <Icon
        size={ICON_SIZES[size]}
        strokeWidth={2}
        aria-hidden
        className={cn(styles.icon, className)}
      />
    );
  }

  return (
    <span
      title={definition.label}
      className={cn(
        "inline-flex shrink-0 select-none items-center justify-center",
        TILE_SIZES[size],
        styles.badge,
        className,
      )}
      {...props}
    >
      <Icon size={ICON_SIZES[size]} strokeWidth={2} aria-hidden />
    </span>
  );
}
