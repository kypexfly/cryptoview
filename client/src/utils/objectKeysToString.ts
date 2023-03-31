export const objectKeysToString = (object: Object) =>
  Object.keys(object)
    .filter((key) => object[key] === true)
    .join(',')