import React from "react";
import styles from "../styles/BackToTopBtn.module.scss";

const BackToTopBtn = () => {
  const goTop = () => window.scrollTo(0, 0);

  return (
    <div className={styles.back__to__top} onClick={goTop}>
      <div>Back To</div>
      <div>Top</div>
    </div>
  );
};

export default BackToTopBtn;
