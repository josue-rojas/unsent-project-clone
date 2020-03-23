import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "components/ColorPicker";
import styles from "./styles.module.css";

const DefaultColorPicker = props => {
  return (
    <ColorPicker {...props} className={styles.colorPicker}>
      <div className={styles.inputDisplay}></div>
    </ColorPicker>
  );
};

DefaultColorPicker.defaultProps = {
  initColor: "#0"
};

DefaultColorPicker.propTypes = {
  className: PropTypes.string,
  colorOnChange: PropTypes.func,
  initColor: PropTypes.string,
  readOnly: PropTypes.bool
};

export default DefaultColorPicker;
