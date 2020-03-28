import React from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { database } from "firebase.js";
import { useHistory } from "react-router-dom";
import { POST_MESSAGE_API } from "constants.js";

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const randomColor = () => {
  return `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(
    256
  )})`;
};

const initTextColor = randomColor();
const initBackgroundColor = randomColor();

const Home = () => {
  const history = useHistory();

  const sendCallBack = data => {
    const { key } = database.ref(POST_MESSAGE_API).push(data);
    history.push(`/post/${key}`);
  };

  return (
    <div className={styles.home}>
      <UnsentBox
        initBackgroundColor={initBackgroundColor}
        initTextColor={initTextColor}
        sendCallBack={sendCallBack}
      />
    </div>
  );
};

export default Home;
