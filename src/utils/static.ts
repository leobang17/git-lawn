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
  "Dev",
];

export const DayMapper = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const CONTRIBUTION_BOX_COLOR = "#646E7A";

export const CONTRIBUTION_FONT_COLOR = "#CFDAE4";

export const CONTRIBUTION_FONT_SIZE = 12;

export const DefaultConfigValue = {
  color: "GREEN" as const,
  grassSpan: 30,
  month: 3,
  darkmode: false,
};

export const BACKGROUND_COLOR = "#23272D";

export const GENERAL_STYLE: GeneralStyle = {
  theme: {
    DARK: {
      font: "#CFDAE4",
      subFont: "#78838F",
      background: "#23272D",
      contributionBackground: "#646E7A",
    },
    LIGHT: {
      font: "#25292E",
      subFont: "#596069",
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
    },
    LIGHT: {
      GREEN: ["#EBEDF0", "#ACE7AE", "#69C16E", "#549F57", "#386C3E"],
      BLUE: ["aa"],
    },
  },
};
