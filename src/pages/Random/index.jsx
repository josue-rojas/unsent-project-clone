import React, { useEffect, useState } from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { database } from "firebase.js";
import { GET_AMOUNT_POST_API, POST_MESSAGE_API } from "constants.js";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const Random = () => {
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    database
      .ref(`${GET_AMOUNT_POST_API}`)
      .once("value")
      .then(snapshot => {
        const amount = snapshot.val();
        const randomIndex = getRandomInt(1, amount + 1);
        // TODO: trying to limit get data cause there isn't a random get
        // this might help mobile not get all the data
        // or might be worse cause it has another fetch.... not sure, in the meantime this is it
        database
          .ref(`${POST_MESSAGE_API}`)
          .limitToLast(randomIndex)
          .once("value")
          .then(_snapshot => {
            if (_snapshot.val()) {
              const data = Object.entries(_snapshot.val());
              const randomIndex = getRandomInt(0, data.length);
              const unsentData = data[randomIndex][1];
              setMessage(unsentData.text);
              setTo(unsentData.to);
              setBackgroundColor(unsentData.backgroundColor);
              setTextColor(unsentData.textColor);
            } else {
              setMessage(`No Message found.`);
              setTo(`ERROR`);
            }
          });
      });
  }, []);

  return (
    <div className={styles.random}>
      <UnsentBox
        initBackgroundColor={backgroundColor}
        initMessage={message}
        initTextColor={textColor}
        initTo={to}
        isDisabled={true}
      />
    </div>
  );
};

export default Random;
