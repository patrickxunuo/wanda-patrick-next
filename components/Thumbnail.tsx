import React from "react";
import styles from "../styles/Thumbnail.module.scss";
import { motion } from "framer-motion";

export default function thumbnail() {
  return (
    <div className={styles.thumbnail}>
      <div className={styles.thumbnail__text__wrap}>
        <div className={styles.thumbnail__text}>Patrick and Wanda</div>
        <div className={styles.thumbnail__text}>Couple Site</div>
      </div>
    </div>
  );
}
