import React, { useRef, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ColorPicker = ({
  children,
  className,
  colorOnChange,
  initColor,
  readOnly
}) => {
  const inputRef = useRef(null);
  const [color, colorChange] = useState(initColor);

  const handleColorOnChange = e => {
    const newColor = e.target.value;
    colorChange(newColor);
    colorOnChange && colorOnChange(newColor);
  };

  const focusInput = _ => {
    if (!readOnly) {
      inputRef.current.click();
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={classNames(className, styles.inputWrapper, {
        [styles.isDisabled]: readOnly
      })}
    >
      <div onClick={focusInput}>{children}</div>
      <input
        className={styles.input}
        onChange={handleColorOnChange}
        ref={inputRef}
        type="color"
        value={color}
        readOnly={readOnly}
      ></input>
    </div>
  );
};

ColorPicker.defaultProps = {
  initColor: "#0"
};

ColorPicker.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colorOnChange: PropTypes.func,
  initColor: PropTypes.string,
  readOnly: PropTypes.bool
};

export default ColorPicker;
