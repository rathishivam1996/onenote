const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, val], index) => [key, fn(key, val, index)])
  );

export default objectMap;
