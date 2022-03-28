export const defaultConfig = <T>(
  defaultValue: T,
  inputParam: Partial<T>
): T => {
  let key: keyof Partial<T>;
  for (key in inputParam) {
    if (!inputParam[key]) {
      delete inputParam[key];
    }
  }
  return { ...defaultValue, inputParam };
};
