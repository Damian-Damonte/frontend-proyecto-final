export const areEqualsObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let propiedad in object1) {
    if (object1[propiedad] !== object2[propiedad]) {
      return false;
    }
  }
  return true;
};
