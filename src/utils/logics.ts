import { ColorType, GeneralColorProps, ThemeType } from "../@types";
import { GENERAL_STYLE, GRASS_COLORS } from "./static";

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

export class ThemeResolver {
  constructor(readonly theme: boolean, readonly colorType: ColorType) {}

  public resolveGeneralStyle() {
    const THEME = this.themeStringConverter(this.theme);
    return GENERAL_STYLE.theme[THEME];
  }

  public resolveGrassColor() {
    return GRASS_COLORS.theme[this.themeStringConverter(this.theme)][
      this.colorType
    ];
  }

  private themeStringConverter(theme: boolean): ThemeType {
    if (theme) {
      return "DARK" as const;
    }
    return "LIGHT" as const;
  }
}
