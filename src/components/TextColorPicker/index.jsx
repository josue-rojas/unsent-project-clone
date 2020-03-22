import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "components/ColorPicker";
import styles from "./styles.module.css";

const TextColorPicker = props => {
  return (
    <ColorPicker {...props}>
      <div className={styles.inputDisplay}>ABC</div>
    </ColorPicker>
  );
};

TextColorPicker.defaultProps = {
  initColor: "#0"
};

TextColorPicker.propTypes = {
  className: PropTypes.string,
  colorOnChange: PropTypes.func,
  initColor: PropTypes.string
};

export default TextColorPicker;
