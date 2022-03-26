import { LawnProps, LawnPropsRequired } from "../../@types";

export const defaultConfig = (params: LawnProps): LawnPropsRequired => {
  let { color, grassSpan, month } = params;
  if (!color) {
    color = "GREEN";
  }
  if (!grassSpan) {
    grassSpan = 30;
  }
  if (!month) {
    month = 3;
  }

  return { color, grassSpan, month };
};
