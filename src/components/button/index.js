import React from "react";
import classnames from "classnames";
import ButtonWrapper from "./styles";

const Button = ButtonWrapper(
  ({ type = "button", of, size, className, ghost, children, ...rest }) => {
    const classNames = classnames(
      "tz-btn",
      {
        [`tz-btn-${of}`]: true,
        [`tz-btn-${size}`]: size,
        [`tz-btn-ghost`]: ghost
      },
      className
    );

    if (rest.href) {
      return (
        <a {...rest} role="button" className={classNames}>
          {children}
        </a>
      );
    }

    return (
      <button {...rest} type={type} className={classNames}>
        {children}
      </button>
    );
  }
);

Button.defaultProps = {
  of: "default"
};

export default Button;
