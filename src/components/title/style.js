import styled, { css } from "styled-components";
import createTheme from "../styles/createTheme";

const horizontal = isHorizontal => {
  if (isHorizontal) {
    return css`
      flex-direction: row;
      align-items: center;

      > small {
        margin: 0 10px;
      }
    `;
  }

  return css`
    flex-direction: column;
    align-items: flex-start;
  `;
};

const TitleStyle = styled.h1`
  ${props => {
    const theme = createTheme(props.theme);
    return css`
      font-size: ${theme.fontSizeLarge};
      color: ${theme.textColor};
      font-weight: 600;
      display: flex;

      small {
        display: block;
        font-size: ${theme.fontSizeSmall};
        color: #b4b2c2;
        font-weight: 300;
        margin-top: 5px;
      }

      ${horizontal(props.horizontal)};

      ${props.border &&
        css`
          padding-bottom: 8px;
          border-bottom: 1px ${props.borderType} #ddd;
        `};
    `;
  }}
`;

export default TitleStyle;
