import Head from "next/head";
import BackToTopBtn from "../components/BackToTopBtn";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LatestView from "../components/LatestView";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import useScroll from "../hooks/useScroll";
import { useEffect, useMemo, useState } from "react";
import { defaultVariantProps, homeDelayVariants } from "../utils/constant";

const textVariants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const textVariants2 = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  initial: {
    y: 250,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const patrickText = ["P", "a", "t", "r", "i", "c", "k"];
const wandaText = ["W", "a", "n", "d", "a"];

export default function Home() {
  const { scrollY } = useScroll();
  const { height: windowHeight } = useWindowSize();

  const imageFixed = useMemo(
    () => scrollY < windowHeight,
    [scrollY, windowHeight]
  );

  useEffect(() => {
    setTimeout(() => {
      document.body.style.setProperty("height", "auto");
      document.body.style.setProperty("overflow", "auto scroll");
    }, 2000);
  }, []);

  return (
    <div className={styles.home}>
      <Head>
        <title>Wanda & Patrick</title>
        <meta
          name="description"
          content="Designed and created by Wanda & Patrick"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
        {imageFixed ? (
          <motion.div
            className={styles.main__img__wrap}
            style={{
              top: "50%",
              position: "fixed",
            }}
          >
            <img
              height={400}
              width={360}
              src="/assets/images/mainPage/main.png"
              alt="none"
            />
          </motion.div>
        ) : (
          <motion.div
            className={styles.main__img__wrap}
            style={{
              top: windowHeight * 1.5 || "50%",
              position: "absolute",
            }}
          >
            <img
              height={400}
              width={360}
              src="/assets/images/mainPage/main.png"
              alt="none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.first__scene}>
        <motion.div
          variants={textVariants}
          className={styles.patrick__text}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {patrickText.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={textVariants2}
          className={styles.wanda__text}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {wandaText.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className={styles.deco__text}
          variants={homeDelayVariants}
          {...defaultVariantProps}
        >
          <div>Here will witness our</div>
          <div>meet, grow and love</div>
        </motion.div>
      </div>

      <div className={styles.second__scene}>
        <div className={styles.left__content}>
          <div className={styles.every__day}>
            <div>Every day I'm still discovering</div>
            <div>new things about you to love.</div>
          </div>
          <div className={styles.anni__text}>2022 . 03 . 22</div>
          <div className={styles.anni__bottom}>
            <span className={styles.anni__redirect}>
              Check other anniversary
            </span>
            <Link href="/anniversary">
              <div className={styles.anni__btn}>
                <FontAwesomeIcon icon={faArrowRight} color="#CF4B47" />
              </div>
            </Link>
          </div>
          <div className={styles.luckiest__girl}>
            <span>WANDA IS THE</span>
            <span>LUCKIEST GIRL</span>
            <span>ON EARTH</span>
          </div>
        </div>
        <div className={styles.middle__content}>
          <motion.div
            className={styles.scroll__down}
            variants={homeDelayVariants}
            {...defaultVariantProps}
          >
            <div className={styles.scroll__down__text}>Scroll down</div>
          </motion.div>
        </div>
        <div className={styles.right__content}>
          <div className={styles.cutest__boy}>
            <div>PATRICK IS THE</div>
            <div>CUTEST BOY</div>
            <div>ON EARTH</div>
          </div>
          <div className={styles.tree__bird}>
            <div>
              <img
                width={100}
                src="/assets/images/mainPage/bird.png"
                alt="none"
                className={styles.bird}
              />
              <img
                width={200}
                src="/assets/images/mainPage/tree.png"
                alt="none"
              />
            </div>
            <img
              className={styles.firework}
              src="/assets/images/mainPage/firework.png"
              alt="none"
            />
          </div>
        </div>
      </div>

      <div className={styles.third__scene}>
        <div>
          <span>DFNGVOSNRHBRTGKMBHGP[MPG,ERFXERECERCG</span>
          <span>ERCGXRMRTG,ONRT</span>
          <span>CXRGIIIIITP4RF</span>
          <span>CGRTMGORT,</span>
        </div>
      </div>

      <LatestView />
      <BackToTopBtn />
    </div>
  );
}
