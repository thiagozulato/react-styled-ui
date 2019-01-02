import styled, { css } from "styled-components";
import createTheme from "../styles/createTheme";
import buttonMixins from "./mixins";

const prefix = "tz-btn";

const ButtonWrapper = Component => styled(Component)`
  ${props => {
    const theme = createTheme(props.theme);
    const mixins = buttonMixins(theme);

    return css`
      ${mixins.btnDefault()};

      &.${prefix} {
        &-primary {
          ${mixins.solid("#fff", theme.primaryColor)};

          &.${prefix}-ghost {
            ${mixins.ghost(theme.primaryColor)};
          }
        }

        &-success {
          ${mixins.solid("#fff", theme.successColor)};

          &.${prefix}-ghost {
            ${mixins.ghost(theme.successColor)};
          }
        }

        &-error {
          ${mixins.solid("#fff", theme.errorColor)};

          &.${prefix}-ghost {
            ${mixins.ghost(theme.errorColor)};
          }
        }

        &-warning {
          ${mixins.solid("#fff", theme.warningColor)};

          &.${prefix}-ghost {
            ${mixins.ghost(theme.warningColor)};
          }
        }
      }

      &[disabled] {
        border: 1px solid #d9d9d9;
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        cursor: not-allowed;
      }
    `;
  }}
`;

export default ButtonWrapper;
