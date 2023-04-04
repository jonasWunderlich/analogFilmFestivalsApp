export function selectReferencedObject<T extends { id: string }>(
  arr: Array<T>,
  reference: string
): T | undefined {
  return arr.find((item) => item.id === reference);
}

export function selectReferencedObjects<T extends { id: string }>(
  arr: Array<T>,
  references: string[]
): Array<T> {
  return arr.filter((item) => references.indexOf(item.id) > -1);
}
