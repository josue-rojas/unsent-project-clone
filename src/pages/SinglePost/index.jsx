import React, { useEffect, useState } from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    // TODO: implement fetch
    setMessage(`some message with id: ${id}`);
    setTo("josue");
  }, [id]);

  return (
    <div className={styles.singlePost}>
      <UnsentBox initMessage={message} initTo={to} isDisabled={true} />
    </div>
  );
};

export default SinglePost;
