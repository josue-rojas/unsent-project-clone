import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ColorTextArea = ({
  backgroundColor,
  className,
  maxChar,
  onChange,
  readOnly,
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
        readOnly={readOnly}
      ></textarea>
      {maxChar && !readOnly && (
        <span className={styles.char} style={{ color: textColor }}>
          {text.length}/{maxChar}
        </span>
      )}
    </div>
  );
};

ColorTextArea.defaultProps = {
  maxChar: 240,
  readOnly: false,
  rows: 13
};

ColorTextArea.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  maxChar: PropTypes.number,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  rows: PropTypes.number,
  textColor: PropTypes.string
};

export default ColorTextArea;
