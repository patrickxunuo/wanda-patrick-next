import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/BackToTopBtn.module.scss";
import { defaultVariantProps, homeDelayVariants } from "../utils/constant";

const BackToTopBtn = () => {
  const goTop = () => window.scrollTo(0, 0);

  return (
    <motion.div
      className={styles.back__to__top}
      onClick={goTop}
      variants={homeDelayVariants}
      {...defaultVariantProps}
    >
      <div>Back To</div>
      <div>Top</div>
    </motion.div>
  );
};

export default BackToTopBtn;
