const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, val], index) => [key, fn(key, val, index)])
  );

function forEachNested(o, func) {
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(o)) {
    if (value != null && typeof value === "object") {
      forEachNested(value, func);
    } else {
      func.apply(this, [o, key, value]);
    }
  }
}

export default { objectMap, forEachNested };
