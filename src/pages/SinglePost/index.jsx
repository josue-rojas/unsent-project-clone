import React, { useEffect, useState } from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database as db} from 'firebaseService'
import { INIT_UNSENT_STATE, POST_MESSAGE_API } from "constants.js";

const SinglePost = () => {
  const [unsentData, setUnsentData] = useState(INIT_UNSENT_STATE);
  // const [message, setMessage] = useState("");
  // const [to, setTo] = useState("");
  // const [backgroundColor, setBackgroundColor] = useState("");
  // const [textColor, setTextColor] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const postRref = ref(db, `${POST_MESSAGE_API}/${id}`);
    onValue(postRref, snapshot => {
      const _unsentData = snapshot.val();
      if (_unsentData) {
        setUnsentData(_unsentData);
      } else {
        setUnsentData({
          ...unsentData,
          text: `No Message found with id:\n${id}`,
          to: "ERROR"
        });
      }
    })

  }, [id]);

  return (
    <div className={styles.singlePost}>
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

export default SinglePost;
