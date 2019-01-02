import React from "react";
import TitleStyle from "./style";

const Title = ({ title, description, ...rest }) => {
  return (
    <TitleStyle {...rest}>
      {title}
      {description && <small>{description}</small>}
    </TitleStyle>
  );
};

Title.defaultProps = {
  border: false,
  borderType: "solid",
  horizontal: false
};

export default Title;
