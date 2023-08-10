import Head from "next/head";
import BackToTopBtn from "../components/BackToTopBtn";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LatestView from "../components/LatestView";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // home background
  const homeBg = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.7, 0.85, 1],
    ["#fdfbef", "#fdfbef", "#3b3947", "#121422", "#fdfbef", "#fdfbef"]
  );

  const clothFilter = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.7, 1],
    [
      "none",
      "none",
      "invert(21%) sepia(9%) saturate(924%) hue-rotate(208deg) brightness(96%) contrast(93%)",
      "#121422",
      "#124214",
    ]
  );

  // cutest boy opacity
  const cBOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.175, 0.2, 1],
    [0, 0, 1, 0, 0]
  );
  // cutest boy right
  const cbRight = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 1],
    [0, -100, 100, 0]
  );

  // luckiest girl opacity
  const lGOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.175, 0.2, 1],
    [0, 0, 1, 0, 0]
  );
  // luckiest girl left
  const lGLeft = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 1],
    [0, -100, 100, 0]
  );

  // flashing light opacity
  const fLOpacity = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.28) return 0;
    const result = (pos * 100) % 10;
    if (result > 9.5 || result < 0.5) {
      return 1;
    } else if (result > 9 || result < 1) {
      return 0.5;
    } else {
      return 0;
    }
  });

  // action__content opacity
  const aCOpacity = useTransform(
    scrollYProgress,
    [0, 0.225, 0.25, 1],
    [0, 1, 0, 0]
  );

  const imageTop = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.825) return "50%";
    const result =
      (0.825 - pos) * document.body.offsetHeight + window.innerHeight / 2;
    return result;
  });

  // firework image
  const fwScale = useTransform(scrollYProgress, [0.31, 0.38], [0, 1]);
  const fwTop = useTransform(scrollYProgress, [0.31, 0.38], [0, -500]);
  const fwLeft = useTransform(scrollYProgress, [0.31, 0.38], [0, 500]);
  const fwOpacity = useTransform(scrollYProgress, [0.36, 0.38], [1, 0]);
  const fwRotate = useTransform(scrollYProgress, [0.31, 0.38], [0, 45]);

  // gibson image
  const gsScale = useTransform(scrollYProgress, [0.41, 0.48], [0, 1]);
  const gsTop = useTransform(scrollYProgress, [0.41, 0.48], [0, 500]);
  const gsLeft = useTransform(scrollYProgress, [0.41, 0.48], [0, -600]);
  const gsOpacity = useTransform(scrollYProgress, [0.46, 0.48], [1, 0]);
  const gsRotate = useTransform(scrollYProgress, [0.41, 0.48], [0, 60]);

  // quebec image
  const qbScale = useTransform(scrollYProgress, [0.51, 0.58], [0, 1]);
  const qbTop = useTransform(scrollYProgress, [0.51, 0.58], [0, -1000]);
  const qbLeft = useTransform(scrollYProgress, [0.51, 0.58], [0, -600]);
  const qbOpacity = useTransform(scrollYProgress, [0.56, 0.58], [1, 0]);
  const qbRotate = useTransform(scrollYProgress, [0.51, 0.58], [0, 80]);

  // lighthouse image
  const lhScale = useTransform(scrollYProgress, [0.61, 0.68], [0, 1]);
  const lhTop = useTransform(scrollYProgress, [0.61, 0.68], [0, 700]);
  const lhLeft = useTransform(scrollYProgress, [0.61, 0.68], [0, 800]);
  const lhOpacity = useTransform(scrollYProgress, [0.66, 0.68], [1, 0]);
  const lhRotate = useTransform(scrollYProgress, [0.61, 0.68], [0, -30]);

  // victoria image
  const vcScale = useTransform(scrollYProgress, [0.71, 0.78], [0, 1]);
  const vcTop = useTransform(scrollYProgress, [0.71, 0.78], [0, 300]);
  const vcLeft = useTransform(scrollYProgress, [0.71, 0.78], [0, -400]);
  const vcOpacity = useTransform(scrollYProgress, [0.76, 0.78], [1, 0]);
  const vcRotate = useTransform(scrollYProgress, [0.71, 0.78], [0, 70]);

  useEffect(() => {
    setTimeout(() => {
      document.body.style.setProperty("height", "auto");
      document.body.style.setProperty("overflow", "auto scroll");
    }, 2000);
  }, []);

  return (
    <motion.div
      className={styles.home}
      ref={targetRef}
      style={{ backgroundColor: homeBg }}
    >
      <Head>
        <title>Wanda & Patrick</title>
        <meta
          name="description"
          content="Designed and created by Wanda & Patrick"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*main image start*/}
      <motion.div
        className={styles.main__img__wrap}
        style={{
          top: imageTop,
          position: "fixed",
        }}
      >
        <motion.div className={styles.flash__light}>
          <motion.div
            className={styles.flash__light__content}
            style={{ opacity: fLOpacity }}
          />
          <motion.div
            className={styles.firework}
            style={{
              scale: fwScale,
              top: fwTop,
              left: fwLeft,
              opacity: fwOpacity,
            }}
          >
            <motion.img
              className={styles.firework__img}
              style={{
                rotate: fwRotate,
              }}
              src="/assets/images/mainPage/firework.png"
              alt="none"
            />
          </motion.div>
          <motion.div
            className={styles.firework}
            style={{
              scale: qbScale,
              top: qbTop,
              left: qbLeft,
              opacity: qbOpacity,
            }}
          >
            <motion.img
              className={styles.firework__img}
              style={{
                rotate: qbRotate,
              }}
              src="/assets/images/mainPage/quebec.jpg"
              alt="none"
            />
          </motion.div>
          <motion.div
            className={styles.firework}
            style={{
              scale: gsScale,
              top: gsTop,
              left: gsLeft,
              opacity: gsOpacity,
            }}
          >
            <motion.img
              className={styles.firework__img}
              style={{
                rotate: gsRotate,
              }}
              src="/assets/images/mainPage/gibson.jpg"
              alt="none"
            />
          </motion.div>
          <motion.div
            className={styles.firework}
            style={{
              scale: vcScale,
              top: vcTop,
              left: vcLeft,
              opacity: vcOpacity,
            }}
          >
            <motion.img
              className={styles.firework__img}
              style={{
                rotate: vcRotate,
              }}
              src="/assets/images/mainPage/victoria.jpg"
              alt="none"
            />
          </motion.div>
          <motion.div
            className={styles.firework}
            style={{
              scale: lhScale,
              top: lhTop,
              left: lhLeft,
              opacity: lhOpacity,
            }}
          >
            <motion.img
              className={styles.firework__img}
              style={{
                rotate: lhRotate,
              }}
              src="/assets/images/mainPage/lighthouse.jpg"
              alt="none"
            />
          </motion.div>
        </motion.div>
        <img
          className={styles.the__img}
          src="/assets/images/mainPage/main.png"
          alt="none"
        />
        <motion.img
          className={styles.the__img__clothes}
          style={{ filter: clothFilter }}
          src="/assets/images/mainPage/main_clothes.png"
          alt="none"
        />
      </motion.div>
      {/*main image end*/}

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
          {/*luckiest girl start*/}
          <motion.div
            className={styles.luckiest__girl}
            style={{ opacity: lGOpacity, left: lGLeft }}
          >
            <span>WANDA IS THE MOST ADORABLE GIRL</span>
          </motion.div>
          {/*luckiest girl end*/}
          <motion.div
            className={styles.action__content}
            style={{ opacity: aCOpacity }}
          >
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
          </motion.div>
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
          {/*cutest boy start*/}
          <motion.div
            className={styles.cutest__boy}
            style={{ opacity: cBOpacity, right: cbRight }}
          >
            <div>PATRICK IS THE CUTEST BOY</div>
          </motion.div>
          {/*cutest boy end*/}
          {/*<div className={styles.tree__bird}>*/}
          {/*  <div>*/}
          {/*    <img*/}
          {/*      width={100}*/}
          {/*      src="/assets/images/mainPage/bird.png"*/}
          {/*      alt="none"*/}
          {/*      className={styles.bird}*/}
          {/*    />*/}
          {/*    <img*/}
          {/*      width={200}*/}
          {/*      src="/assets/images/mainPage/tree.png"*/}
          {/*      alt="none"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <img*/}
          {/*    className={styles.firework}*/}
          {/*    src="/assets/images/mainPage/firework.png"*/}
          {/*    alt="none"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>

      {/*<div className={styles.third__scene}>*/}
      {/*  <div>*/}
      {/*    <span>DFNGVOSNRHBRTGKMBHGP[MPG,ERFXERECERCG</span>*/}
      {/*    <span>ERCGXRMRTG,ONRT</span>*/}
      {/*    <span>CXRGIIIIITP4RF</span>*/}
      {/*    <span>CGRTMGORT,</span>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <LatestView />
      <BackToTopBtn />
    </motion.div>
  );
}
