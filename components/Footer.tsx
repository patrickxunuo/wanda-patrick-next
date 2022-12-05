import React from "react";
import Img from "../public/assets/images/twoHead.png";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className="footer__top">
          <Image src={Img} width={100} alt="" />
        </div>
        <div className="footer__middle">
          <span>Created By Wanda&Patrick</span>
        </div>
        <div className="footer__bottom">
          <span>Last Updated at 2022 - 09 - 09</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
