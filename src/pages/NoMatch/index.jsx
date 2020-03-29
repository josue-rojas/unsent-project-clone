import React from "react";
import UnsentBox from "components/UnsentBox";
import styles from "./styles.module.css";

const NoMatch = () => {
  return (
    <div className={styles.nomatch}>
      <UnsentBox
        initMessage="Page not found. Click something else on top"
        initTo="404"
        isDisabled={true}
      />
    </div>
  );
};

export default NoMatch;
