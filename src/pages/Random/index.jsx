import React, { useEffect, useState } from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { database } from "firebase.js";
import { POST_MESSAGE_API } from "constants.js";
import { useLocation } from "react-router-dom";

// TODO: was implemented with the worst way possible....
// might need to update if this becomes bigger or has a lot of data

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const Random = () => {
  const [unsentData, setUnsentData] = useState({
    backgroundColor: "",
    textColor: "",
    text: "",
    to: ""
  });
  const location = useLocation();

  useEffect(() => {
    database
      .ref(`${POST_MESSAGE_API}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          const data = Object.entries(snapshot.val());
          const randomIndex = getRandomInt(0, data.length);
          const _unsentData = data[randomIndex][1];
          setUnsentData(_unsentData);
        } else {
          setUnsentData({
            text: "No Message Found",
            to: "ERROR"
          });
        }
      });
  }, [location]);

  return (
    <div className={styles.random}>
      <UnsentBox
        initBackgroundColor={unsentData.backgroundColor}
        initMessage={unsentData.text}
        initTextColor={unsentData.textColor}
        initTo={unsentData.to}
        isDisabled={true}
      />
    </div>
  );
};

export default Random;
