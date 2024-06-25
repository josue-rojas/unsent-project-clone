import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Button = ({
  appearance,
  children,
  className,
  disabled,
  intent,
  onClick,
  type,
  ...props
}) => {
  const _onClick = (e) => {
    !disabled && onClick(e);
  };

  const _className = classNames(
    styles.button,
    styles[appearance],
    styles[intent],
    { [styles.disabled]: disabled },
    className
  );

  return (
    <button className={_className} type={type} onClick={_onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  appearance: PropTypes.oneOf(["", "default", "primary", "minimal"]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  intent: PropTypes.oneOf(["", "none", "success", "warning", "danger"]),
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  appearance: "default",
  disabled: false,
  intent: "none",
  onClick: () => {},
  type: "button",
};

export default Button;
