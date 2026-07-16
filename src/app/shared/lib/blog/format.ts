/** Format an ISO date (e.g. "2026-07-02") as "July 2, 2026". UTC-fixed so the
 *  displayed day never shifts with server timezone. */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
