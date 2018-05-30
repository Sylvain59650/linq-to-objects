Array.castArray = function(obj) {
  if (obj === null) { return []; }
  if (typeof obj === "object" && obj.length) { return obj; }
  return [obj];
}