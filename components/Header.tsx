import React from "react";
import TitleImg from "../public/assets/images/titleImg.png";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { defaultVariantProps, homeDelayVariants } from "../utils/constant";

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      variants={homeDelayVariants}
      {...defaultVariantProps}
    >
      <Link className={styles.header__left} href="/">
        <Image src={TitleImg} width={113} alt="" />
      </Link>
      <div className={styles.header__middle}>
        <div className={styles.header__nav}>
          <span className={styles.header__nav__item}>Gallery</span>
          <span className={styles.header__nav__item}>Theatre</span>
          <Link href="/anniversary">
            <span className={styles.header__nav__item}>Anniversary</span>
          </Link>
        </div>
      </div>
      <div className={styles.header__right}>
        <span>Service</span>
      </div>
    </motion.header>
  );
};

export default Header;
