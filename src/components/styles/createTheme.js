import colorPalette from "./colors/colorPalette";

export const colorsPalette = color => {
  return {
    color0: colorPalette(color, 1),
    color1: colorPalette(color, 2),
    color2: colorPalette(color, 3),
    color3: colorPalette(color, 4),
    color4: colorPalette(color, 5),
    color5: color,
    color6: colorPalette(color, 7)
  };
};

const createTheme = custom => {
  const theme = {
    primaryColor: "#108ee9",
    infoColor: "#108ee9",
    successColor: "#28a745",
    errorColor: "#ff3737",
    warningColor: "#ecb306",

    // font
    fontSizeBase: "14px",
    fontSizeSmall: "12px",
    fontSizeLarge: "16px",
    fontFamily: '"Segoe UI", sans-serif',

    // text
    textColor: "#514d6a",

    // border
    borderRadiusBase: "4px",
    borderRadiusBaseSmall: "2px",
    borderColorBase: "#d9d9d9",

    // button
    btnPrimaryColor: "#fff",
    get btnPrimaryBg() {
      return theme.primaryColor;
    },

    btnDefaultBg: "#fff",
    get btnDefaultColor() {
      return theme.textColor;
    },
    get btnDefaultBorder() {
      return theme.borderColorBase;
    },

    get btnSuccessBg() {
      return theme.successColor;
    },

    get btnDangerBg() {
      return theme.errorColor;
    },

    get btnWarningBg() {
      return theme.warningColor;
    },

    // Card
    cardDescriptionColor: "#c0bdd0",
    get cardBorderRadius() {
      return theme.borderRadiusBaseSmall;
    },

    ...custom
  };

  return theme;
};

export default createTheme;
