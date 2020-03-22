import React, { useRef, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ColorPicker = ({ className, colorOnChange, initColor }) => {
  const inputRef = useRef(null);
  const [color, colorChange] = useState(initColor);

  const handleColorOnChange = e => {
    const newColor = e.target.value;
    colorChange(newColor);
    colorOnChange && colorOnChange(newColor);
  };

  const focusInput = _ => {
    inputRef.current.click();
  };

  return (
    <div className={classNames(className, styles.inputWrapper)}>
      <div className={styles.inputDisplay} onClick={focusInput}>
        ABC
      </div>
      <input
        className={styles.input}
        onChange={handleColorOnChange}
        ref={inputRef}
        type="color"
        value={color}
      ></input>
    </div>
  );
};

ColorPicker.defaultProps = {
  initColor: "#0"
};

ColorPicker.propTypes = {
  className: PropTypes.string,
  colorOnChange: PropTypes.func,
  initColor: PropTypes.string
};

export default ColorPicker;
