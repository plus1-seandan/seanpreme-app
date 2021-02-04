import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  disabled,
  require,
  ...otherProps
}) => (
  <button
    disabled={disabled}
    className={`${disabled ? "disabled" : ""} ${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sigin-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
