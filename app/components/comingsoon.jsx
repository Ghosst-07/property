// pages/index.js

import React from "react";
import styles from "./comingsoon.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.comingSoonContainer}>
      <h1 className="text-5xl font-bold pb-5">Coming Soon</h1>
      <p className={styles.details}>
        We are working on something amazing. Stay tuned for updates!
      </p>
    </div>
  );
};

export default ComingSoon;
