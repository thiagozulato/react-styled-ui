import { css } from "styled-components";
import { colorsPalette } from "../styles/createTheme";
import { isLight } from "../styles/colors/utils";

const buttonMixins = theme => {
  const mixins = {
    size(padding, fontSize = "14px", borderRadius = "4px") {
      return css`
        padding: ${padding};
        border-radius: ${borderRadius};
        font-size: ${fontSize};
      `;
    },

    solid(color, background) {
      const colors = colorsPalette(background);
      return css`
        color: ${isLight(background) ? "#333" : color};
        background: ${colors.color5};
        border-color: ${colors.color5};

        &:hover {
          background: ${colors.color4};
        }

        &:active {
          background: ${colors.color6};
          box-shadow: 0 0 0 3px ${colors.color1};
        }
      `;
    },

    ghost(color) {
      const colors = colorsPalette(color);
      return css`
        color: ${isLight(color) ? "#333" : colors.color5};
        background: #fff;
        border-color: ${colors.color5};

        &:hover {
          background: ${colors.color5};
          color: ${isLight(color) ? "#333" : "#fff"};
        }

        &:active {
          color: ${isLight(color) ? "#333" : "#fff"};
          background: ${colors.color6};
          box-shadow: 0 0 0 3px ${colors.color1};
        }
      `;
    },

    base() {
      return css`
        display: inline-block;
        position: relative;
        border: 1px solid transparent;
        color: #fff;
        font-weight: 400;
        outline: none;
        border-radius: 2px;
        background: #fff;
        color: #333;
        cursor: pointer;
        line-height: 1.5;
        vertical-align: middle;
        text-align: center;
        ${mixins.size("6px 12px", theme.fontSizeBase)};

        &.tz-btn {
          &-sm {
            ${mixins.size("4px 8px", theme.fontSizeSmall, "2px")};
          }

          &-lg {
            ${mixins.size("8px 16px", theme.fontSizeLarge)};
          }
        }
      `;
    },

    btnDefault() {
      return css`
        ${mixins.base()};
        border-color: #d9d9d9;
        background: #fff;
      `;
    }
  };

  return mixins;
};

export default buttonMixins;
