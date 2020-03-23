import React from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";

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

const sendCallBack = data => {
  console.log("sending", data);
};

const Home = () => {
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
