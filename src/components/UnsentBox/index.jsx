import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

import TextColorPicker from "components/TextColorPicker";
import DefaultColorPicker from "components/DefaultColorPicker";
import ColorTextArea from "components/ColorTextArea";

const UnsentBox = ({
  initBackgroundColor,
  initTextColor,
  isDisabled,
  sendCallBack
}) => {
  const [backgroundColor, backgroundColorChange] = useState(
    initBackgroundColor
  );
  const [textColor, textColorChange] = useState(initTextColor);
  const [text, textChange] = useState("");

  const sendData = () => {
    !isDisabled &&
      sendCallBack &&
      sendCallBack({
        backgroundColor: backgroundColor,
        textColor: textColor,
        text: text
      });
  };

  return (
    <div className={styles.unsentBox}>
      <div className={styles.top}>
        <TextColorPicker
          colorOnChange={c => textColorChange(c)}
          initColor={initTextColor}
          readOnly={isDisabled}
        />
        <span className={styles.textWrapper}>
          <label htmlFor="sender">To</label>
          <input
            className={styles.toInput}
            id="sender"
            type="text"
            readOnly={isDisabled}
          />
        </span>
        <DefaultColorPicker
          colorOnChange={c => backgroundColorChange(c)}
          initColor={initBackgroundColor}
          readOnly={isDisabled}
        />
      </div>
      <div className={styles.middle}>
        <ColorTextArea
          backgroundColor={backgroundColor}
          onChange={textChange}
          textColor={textColor}
          readOnly={isDisabled}
        />
      </div>
      <div className={styles.bottom}>
        <span className={styles.clickable} onClick={sendData}>
          Send
        </span>
        <a href="https://theunsentproject.com/abouttheunsentproject/">
          #unsentproject
        </a>
        {
          //"TODO: still not sure what to do with back"
        }
        <span className={styles.clickable}>Back</span>
      </div>
    </div>
  );
};

UnsentBox.propTypes = {
  initBackgroundColor: PropTypes.string,
  initTextColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  sendCallBack: PropTypes.func
};

export default UnsentBox;
