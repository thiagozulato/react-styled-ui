import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import styled, { css, ThemeProvider } from "styled-components";
import classnames from "classnames";
import createTheme, { colorsPalette } from "./components/styles/createTheme";

//UI Components
import Button from "./components/button";

import "./styles.css";

const Input = styled.input`
  ${props => {
    const theme = createTheme(props.theme);
    const bgColor = colorsPalette(theme.primaryColor);

    return css`
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
      outline: none;

      &:focus,
      &:hover {
        border: 1px solid ${bgColor.color5};
        box-shadow: 0 0px 0px 2px ${bgColor.color1};
      }

      &:active {
        border: 1px solid ${bgColor.color6};
      }
    `;
  }}
`;

const DivStyle = styled.div`
  ${props => {
    return css`
      width: 66px;
      height: 15px;
      background-color: ${props.color};
      display: inline-block;
      padding: 2px 8px;
      color: #fff;
      text-align: center;
      font-size: 12px;

      & + & {
        margin-left: 1px;
      }

      span {
        font-size: 12px;
      }
    `;
  }}
`;

const Div = ({ color, children }) => (
  <DivStyle color={color}>{children}</DivStyle>
);

const ColorPalette = ({ theme }) => {
  const themeDefault = createTheme(theme);
  const bgColor = colorsPalette(themeDefault.primaryColor);
  return (
    <div>
      <Div color={bgColor.color0}>{bgColor.color0}</Div>
      <Div color={bgColor.color1}>{bgColor.color1}</Div>
      <Div color={bgColor.color2}>{bgColor.color2}</Div>
      <Div color={bgColor.color3}>{bgColor.color3}</Div>
      <Div color={bgColor.color4}>{bgColor.color4}</Div>
      <Div color={bgColor.color5}>{bgColor.color5}</Div>
      <Div color={bgColor.color6}>{bgColor.color6}</Div>
    </div>
  );
};

const TitleStyle = styled.h1`
  ${props => {
    const theme = createTheme(props.theme);
    return css`
      font-size: 18px;
      color: ${theme.textColor};
      font-weight: 600;

      small {
        display: block;
        font-size: 13px;
        color: #b4b2c2;
        font-weight: 300;
        margin-top: 5px;
      }
    `;
  }}
`;

const TextWrapper = styled.span`
  ${props => {
    const theme = createTheme(props.theme);
    return css`
      color: ${theme.textColor};
      display: block;

      &.tz-text {
        &-primary {
          color: ${theme.primaryColor};
        }

        &-success {
          color: ${theme.successColor};
        }

        &-error {
          color: ${theme.errorColor};
        }

        &-warning {
          color: ${theme.warningColor};
        }
      }
    `;
  }}
`;

const Text = ({ title, type }) => {
  return (
    <TextWrapper
      className={classnames("tz-text", {
        [`tz-text-${type}`]: true
      })}
    >
      {title}
    </TextWrapper>
  );
};

Text.defaultProps = {
  type: "default"
};

const Title = ({ title, description }) => {
  return (
    <TitleStyle>
      {title}
      {description && <small>{description}</small>}
    </TitleStyle>
  );
};

const theme = {
  primaryColor: "#512da8"
};

const ButtonDemo = styled.div`
  display: block;
  margin-bottom: 10px;

  .tz-btn + .tz-btn {
    margin-left: 10px;
  }
`;

class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Title title="Color Palette" />
          <ColorPalette theme={theme} />
          <br />
          <Title title="Button" />
          <ButtonDemo>
            <Button>Default</Button>
            <Button of="primary">Primary</Button>
            <Button of="success">Success</Button>
            <Button of="error">Error</Button>
            <Button of="warning">Warning</Button>
            <Button disabled>Disabled</Button>

            <Button of="primary" href="https://www.google.com" target="_blank">
              Button as Link
            </Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button size="sm">Default</Button>
            <Button size="sm" of="primary">
              Primary small
            </Button>
            <Button size="sm" of="success">
              Success small
            </Button>
            <Button size="sm" of="error">
              Error small
            </Button>
            <Button size="sm" of="warning">
              Warning small
            </Button>
            <Button size="sm" disabled>
              Disabled small
            </Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button size="lg">Default</Button>
            <Button size="lg" of="primary">
              Primary large
            </Button>
            <Button size="lg" of="success">
              Success large
            </Button>
            <Button size="lg" of="error">
              Error large
            </Button>
            <Button size="lg" of="warning">
              Warning large
            </Button>
            <Button size="lg" disabled>
              Disabled large
            </Button>
          </ButtonDemo>
          <Title title="Button ghost" />
          <ButtonDemo>
            <Button of="primary" ghost>
              Primary
            </Button>
            <Button of="success" ghost>
              Success
            </Button>
            <Button of="error" ghost>
              Error
            </Button>
            <Button of="warning" ghost>
              Warning
            </Button>
          </ButtonDemo>
          <br />
          <br />
          <Input />
          <br />
          <Title
            title="Title Sample"
            description="A description for the title"
          />
          <br />
          <Title title="Text component" />
          <Text title="this is the default text" />
          <Text type="primary" title="this is the primary text" />
          <Text type="success" title="this is the success text" />
          <Text type="error" title="this is the error text" />
          <Text type="warning" title="this is the warning text" />
        </div>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
