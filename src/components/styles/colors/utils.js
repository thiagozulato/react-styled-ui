import Color from "color";

export const hsl = (color, saturation, lightness) => {
  const newColor = Color(color);
  const hue = newColor.hue();
  return new Color(color).hsl(hue, saturation, lightness).hex();
};

export const fade = (color, ratio) => {
  return new Color(color).fade(ratio).string();
};

export const darken = (color, ratio) => {
  return new Color(color).darken(ratio).string();
};

export const isLight = color => {
  return new Color(color).isLight();
};
