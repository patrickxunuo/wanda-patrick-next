import React from "react";
import TitleImg from "../public/assets/images/titleImg.png";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Image src={TitleImg} width={113} alt="" />
      </div>
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
    </header>
  );
};

export default Header;
