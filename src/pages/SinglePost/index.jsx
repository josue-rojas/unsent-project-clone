import React, { useEffect, useState } from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { database } from "firebase.js";
import { POST_MESSAGE_API } from "constants.js";

const SinglePost = () => {
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const { id } = useParams();

  useEffect(() => {
    database
      .ref(`${POST_MESSAGE_API}/${id}`)
      .once("value")
      .then(snapshot => {
        const data = snapshot.val();
        if (data) {
          setMessage(data.text);
          setTo(data.to);
          setBackgroundColor(data.backgroundColor);
          setTextColor(data.textColor);
        } else {
          setMessage(`No Message found with id:\n${id}`);
          setTo(`ERROR`);
        }
      });
  }, [id]);

  return (
    <div className={styles.singlePost}>
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

export default SinglePost;
