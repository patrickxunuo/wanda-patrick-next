import React from "react";
import Dark from "../public/assets/images/mainPage/dark.png";
import Nope from "../public/assets/images/mainPage/nope.png";
import Xxjm from "../public/assets/images/mainPage/xxjm.png";
import styles from "../styles/LastestView.module.scss";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <div className={styles.lastest__view__section}>
      <div className={styles.divider}>
        <div className={styles.line__left} />
        <span className={styles.title}>LASTEST VIEW</span>
        <div className={styles.line__right} />
      </div>
      <div className={styles.subtitle__wrap}>
        <span className={styles.subtitle__content}>
          “It doesn’t matter what you watch, it’s who you have beside you.”
        </span>
      </div>
      <div className={styles.poster__wrap}>
        <div className={styles.poster__item}>
          <Image height={400} width={250} src={Dark} alt="" />
        </div>
        <div className={styles.poster__item}>
          <Image height={400} width={250} src={Xxjm} alt="" />
        </div>
        <div className={styles.poster__item}>
          <Image height={400} width={250} src={Nope} alt="" />
        </div>
      </div>
      <Link href="/theatre">
        <div className={styles.discover__btn}>Discover</div>
      </Link>
    </div>
  );
};

export default Index;
