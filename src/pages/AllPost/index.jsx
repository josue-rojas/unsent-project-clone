import React, { useEffect, useState } from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";
import { ref, onValue } from "firebase/database";
import { database as db} from 'firebaseService.js'
import { INIT_UNSENT_STATE, POST_MESSAGE_API } from "constants.js";
import { constructColor } from "utils";
import Button from "components/Button";

const sortByColor = (postA, postB, asc) => {
  const [_keyA, singlePostA] = postA;
  const [_keyB, singlePostB] = postB;

  if (asc) {
    return singlePostA.backgroundColorSort.hue - singlePostB.backgroundColorSort.hue;
  }
  return singlePostB.backgroundColorSort.hue - singlePostA.backgroundColorSort.hue;
}

const sortByDate = (postA, postB, asc) => {
  const [_keyA, singlePostA] = postA;
  const [_keyB, singlePostB] = postB;
  
  if (asc) {
    return singlePostA.dateAdded - singlePostB.dateAdded  
  }
  return singlePostB.dateAdded - singlePostA.dateAdded  
}

const AllPost = () => {
  const [allPost, setAllPost] = useState([]);
  const [currentSort, setCurrentSort] = useState(['color', true]);
  const sorts = {
    color: sortByColor,
    date: sortByDate,
  }

  useEffect(() => {
    const postRref = ref(db, POST_MESSAGE_API);
    onValue(postRref, snapshot => {
      if (snapshot.val()) {
        const data = Object.entries(snapshot.val());
        const [sortBy, asc] = currentSort;

        let sortedPost = data.map((post) => {
          const [key, singlePost] = post
          return [key, {
            ...singlePost,
            backgroundColorSort: constructColor(singlePost.backgroundColor)
          }]
        }).sort((a, b) => sorts[sortBy](a, b, asc))

        setAllPost(sortedPost);
      } else {
        setAllPost([['blah', {
          text: "No Messages Found",
          to: "ERROR",
          textColor: 100000,
          backgroundColor: 111111
        }]]);
      }
    })
  }, []);

  const sortPost = (sortBy) => {
    const [_sortBy, _asc] = currentSort;
    const asc = _sortBy === sortBy ? !_asc : true
    const sortPost = [...allPost].sort((a, b) => sorts[sortBy](a, b, asc))

    setAllPost(sortPost);
    setCurrentSort([sortBy, asc])
  }

  return (
    <div className={styles.random}>
      <div className={styles.buttons}>
        Sort By: 
      <Button appearance="primary" intent="success" onClick={() => sortPost('color')}>Color</Button>
      {/* <Button appearance="primary" intent="success" onClick={() => sortPost('date')}>Date</Button> */}
      </div>
      <div className={styles.boxes}>
        {allPost.map((post) => {
          const [key, singlePost] = post;
          return (<UnsentBox
            key={key}
            initBackgroundColor={singlePost.backgroundColor}
            initMessage={singlePost.text}
            initTextColor={singlePost.textColor}
            initDate={singlePost.dateAdded}
            isDisabled={true}
            initTo={singlePost.to}
          />)
        })}
      </div>
    </div>
  );
};

export default AllPost;
