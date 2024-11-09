type ShallowDiff<T> = Partial<T>

export function getShallowDiff<T extends object>(
  reference: T,
  updated: Partial<T>,
): ShallowDiff<T> {
  const diff: ShallowDiff<T> = {}

  for (const key in reference) {
    if (key in updated && updated[key] !== reference[key]) {
      diff[key] = updated[key]
    }
  }

  return diff
}
