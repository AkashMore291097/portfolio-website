/**
 * Minimal subsequence fuzzy matcher — hand-written per S-016's "no cmdk or
 * dialog library" rule. Returns true if every character of `query` appears
 * in `text`, in order, case-insensitively (not necessarily contiguous) —
 * e.g. "dlres" matches "Download resume".
 */
export function fuzzyMatch(text: string, query: string): boolean {
  if (query.length === 0) {
    return true;
  }

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  let textIndex = 0;

  for (const char of lowerQuery) {
    const found = lowerText.indexOf(char, textIndex);
    if (found === -1) {
      return false;
    }
    textIndex = found + 1;
  }

  return true;
}
