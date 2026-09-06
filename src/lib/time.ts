/**
 * Formats the current time in a given IANA timezone as "HH:MM TZ", e.g.
 * "14:32 IST". Pure — takes the reference date as a parameter so callers
 * control when "now" is sampled.
 */
export function formatLocalTime(date: Date, timeZone: string, label: string): string {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  });
  return `${formatter.format(date)} ${label}`;
}
