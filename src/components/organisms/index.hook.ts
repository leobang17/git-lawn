import { GitLawnProps, LawnProps } from "../../@types";

export const defaultConfig = (
  params: Pick<GitLawnProps, "color" | "grassSpan" | "month">
): Required<Pick<GitLawnProps, "color" | "grassSpan" | "month">> => {
  let { color, grassSpan, month } = params;
  if (!color) {
    color = "green";
  }
  if (!grassSpan) {
    grassSpan = 30;
  }
  if (!month) {
    month = 3;
  }

  return { color, grassSpan, month };
};
