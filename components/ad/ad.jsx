import React from "react";

import styles from "./ad.module.css";

const Ad = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Ad;
