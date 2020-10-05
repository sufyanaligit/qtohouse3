export function isObjectEmpty(obj) {
  if (obj.size === 0) return true;
  return Object.keys(obj).length === 0;
}
