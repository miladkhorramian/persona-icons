/**
 * persona-avatar.tsx
 *
 * Deterministic gradient avatar for a persona: same name always gets the same
 * gradient. Shows initials, or the persona's mapped icon when you pass one
 * via `iconKey` (e.g. "personality"). Works in Server and Client Components.
 */

import { getPersonaIcon } from "@/lib/persona/persona-icon-map";
import { cn } from "./cn";

const GRADIENTS = [
  "from-rose-500 to-orange-400",
  "from-sky-500 to-indigo-500",
  "from-emerald-500 to-teal-400",
  "from-amber-500 to-pink-500",
  "from-violet-500 to-purple-400",
  "from-cyan-500 to-blue-500",
  "from-lime-500 to-emerald-400",
  "from-fuchsia-500 to-rose-400",
] as const;

const SIZES = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-lg",
  xl: "h-20 w-20 text-2xl",
} as const;

export interface PersonaAvatarProps {
  name: string;
  /** Optional persona attribute key whose icon is shown instead of initials. */
  iconKey?: string;
  size?: keyof typeof SIZES;
  className?: string;
}

export function PersonaAvatar({ name, iconKey, size = "md", className }: PersonaAvatarProps) {
  const gradient = GRADIENTS[hashString(name) % GRADIENTS.length];

  return (
    <div
      aria-hidden={!name}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-semibold text-white shadow-sm",
        gradient,
        SIZES[size],
        className,
      )}
    >
      {iconKey ? (
        <AvatarGlyph iconKey={iconKey} size={size} />
      ) : (
        <span>{initials(name)}</span>
      )}
    </div>
  );
}

function AvatarGlyph({ iconKey, size }: { iconKey: string; size: keyof typeof SIZES }) {
  const Icon = getPersonaIcon(iconKey).icon;
  const px = { sm: 14, md: 16, lg: 22, xl: 32 }[size];
  return <Icon size={px} strokeWidth={2} aria-hidden />;
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}
