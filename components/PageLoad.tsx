import React from "react";
import styles from "../styles/PageLoad.module.scss";
import { motion } from "framer-motion";

const PageLoad = () => {
  return (
    <div className={styles.page__load}>
      <motion.div layoutId="main__img">
        <motion.img src="/assets/images/mainPage/main.png" alt="none" />
      </motion.div>
    </div>
  );
};

export default PageLoad;
