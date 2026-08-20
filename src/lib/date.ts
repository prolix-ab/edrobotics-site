const MONTHS_SV = [
  "JAN", "FEB", "MAR", "APR", "MAJ", "JUN",
  "JUL", "AUG", "SEP", "OKT", "NOV", "DEC",
];

export function formatPostDay(date: string): string {
  const d = new Date(date);
  return String(d.getUTCDate()).padStart(2, "0");
}

export function formatPostMonth(date: string): string {
  const d = new Date(date);
  return `${MONTHS_SV[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
