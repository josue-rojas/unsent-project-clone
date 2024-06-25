import React from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";
import { POST_MESSAGE_API } from "constants.js";
import { ref, set } from "firebase/database";
import { database as db } from 'firebaseService'
import rgbHex from 'rgb-hex';

export const guid = () => s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
export const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const rgbToHex = (color) => {
  if (color.includes('#')) return color;
  else return `#${rgbHex(color)}`;
}

const Home = () => {
  const history = useHistory();

  const sendCallBack = data => {
    const key = guid();
    data.backgroundColor = rgbToHex(data.backgroundColor);
    data.textColor = rgbToHex(data.textColor);
    set(ref(db, POST_MESSAGE_API + `/${key}`), data)

    history.push(`/post/${key}`);
  };

  return (
    <div className={styles.home}>
      <UnsentBox sendCallBack={sendCallBack} />
    </div>
  );
};

export default Home;
