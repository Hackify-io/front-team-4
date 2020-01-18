const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const isRequired = value => {
  value = !isEmpty(value) ? value : "";
  return value;
};

export default isEmpty;
