import React from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { database } from "firebase.js";
import { useHistory } from "react-router-dom";
import { POST_MESSAGE_API } from "constants.js";

const Home = () => {
  const history = useHistory();

  const sendCallBack = data => {
    const { key } = database.ref(POST_MESSAGE_API).push(data);
    history.push(`/post/${key}`);
  };

  return (
    <div className={styles.home}>
      <UnsentBox sendCallBack={sendCallBack} />
    </div>
  );
};

export default Home;
