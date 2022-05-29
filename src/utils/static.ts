import { GeneralStyle, GrassColor } from "../@types";

export const GRASS_COLOR = {
  GREEN: ["#292D34", "#20432C", "#2E6B38", "#52A44E", "#6DD065"],
  BLUE: [],
};

export const MonthMapper = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const DayMapper = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const CONTRIBUTION_BOX_COLOR = "#646E7A";

export const CONTRIBUTION_FONT_COLOR = "#CFDAE4";

export const CONTRIBUTION_FONT_SIZE = 12;

export const DefaultConfigValue = {
  color: "GREEN" as const,
  grassSpan: 30,
  month: 3 as const,
  darkmode: false,
  grassShape: "Rectangle" as const,
};

export const BACKGROUND_COLOR = "#23272D";

export const GENERAL_STYLE: GeneralStyle = {
  theme: {
    DARK: {
      font: "#CFDAE4",
      subFont: "#78838F",
      contributionFont: "#CFDAE4",
      background: "#23272D",
      contributionBackground: "#646E7A",
    },
    LIGHT: {
      font: "#25292E",
      subFont: "#596069",
      contributionFont: "#CFDAE4",
      background: "#FFFFFF",
      contributionBackground: "#25292E",
    },
  },
  font: undefined,
};

export const GRASS_COLORS: GrassColor = {
  theme: {
    DARK: {
      GREEN: ["#292D34", "#20432C", "#2E6B38", "#52A44E", "#6DD065"],
      BLUE: ["aa"],
      ORANGE: [],
      PINK: [],
      PURPLE: [],
    },
    LIGHT: {
      GREEN: ["#EBEDF0", "#386C3E", "#69C16E", "#549F57", "#386C3E"],
      BLUE: ["#EBEDF0", "#00AFE7", "#89D5FF", "#2CB4FF", "#00AFE7"],
      ORANGE: ["#EBEDF0", "#FFF3C8", "#FFD976", "#FFC01F", "#FF9900"],
      PINK: ["#EBEDF0", "#FFD6CF", "#FFC4B9", "#FFA595", "#FF7056"],
      PURPLE: ["#EBEDF0", "#CED5FF", "#97A5FF", "#8976FF", "#6B37FF"],
    },
  },
};
