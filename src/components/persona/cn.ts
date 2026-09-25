/**
 * Minimal class-name joiner so the icon components work in any Next.js 14
 * project without requiring clsx / tailwind-merge. If your project already
 * has a `cn` util (e.g. from shadcn/ui), you can swap the imports for it.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
