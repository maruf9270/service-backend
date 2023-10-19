export const getErrorMessage = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  const poperty = propertyPath.split(".");
  let value = obj;
  for (const prop of poperty) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }
  return value.message;
};
