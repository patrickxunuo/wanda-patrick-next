import { motion, useScroll } from "framer-motion";
import React from "react";
import styles from "../styles/BackToTopBtn.module.scss";
import { defaultVariantProps, homeDelayVariants } from "../utils/constant";

const BackToTopBtn = () => {
  const goTop = () => window.scrollTo(0, 0);
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.back__to__top}
      onClick={goTop}
      variants={homeDelayVariants}
      {...defaultVariantProps}
    >
      <motion.div
        className={styles.backdrop}
        style={{ scaleY: scrollYProgress }}
      />
      <div>Back To</div>
      <div>Top</div>
    </motion.div>
  );
};

export default BackToTopBtn;
