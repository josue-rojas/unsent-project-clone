import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ColorTextArea = ({
  backgroundColor,
  className,
  maxChar,
  onChange,
  rows,
  textColor
}) => {
  const [text, textChange] = useState("");

  const textOnChange = e => {
    let newText = e.target.value;
    if (maxChar && !newText.length < maxChar + 1) {
      newText = newText.substring(0, maxChar);
    }

    textChange(newText);
    onChange && onChange(newText);
  };

  return (
    <div className={classNames(className, styles.textWrapper)}>
      <textarea
        onChange={textOnChange}
        rows={rows}
        style={{ backgroundColor: backgroundColor, color: textColor }}
        value={text}
      ></textarea>
      {maxChar && (
        <span className={styles.char} style={{ color: textColor }}>
          {text.length}/{maxChar}
        </span>
      )}
    </div>
  );
};

ColorTextArea.defaultProps = {
  maxChar: 240,
  rows: 13
};

ColorTextArea.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  maxChar: PropTypes.number,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  textColor: PropTypes.string
};

export default ColorTextArea;
