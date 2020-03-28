import React, { useEffect, useState } from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const { id } = useParams();

  useEffect(() => {
    // TODO: implement fetch
    setMessage(`some message with id: ${id}`);
    setTo("josue");
    setBackgroundColor("rgb(50, 10, 50)");
    setTextColor("rgb(240, 10, 250)");
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
