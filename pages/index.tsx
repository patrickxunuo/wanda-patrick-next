import Head from "next/head";
import BackToTopBtn from "../components/BackToTopBtn";
import styles from "../styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LatestView from "../components/LatestView";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import useScroll from "../hooks/useScroll";
import dynamic from "next/dynamic";

const textVariants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  initial: {
    y: 200,
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
  const imageFixed = scrollY < windowHeight;

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

      <div className={styles.first__scene}>
        <motion.div
          className={styles.main__img__wrap}
          style={{
            position: imageFixed ? "fixed" : "relative",
            opacity: imageFixed ? 1 : 0,
          }}
          layout="position"
          layoutId="homeImage"
        >
          <img
            height={340}
            width={300}
            src="/assets/images/mainPage/main.png"
            alt="none"
          />
        </motion.div>
        <motion.div
          variants={textVariants}
          className={styles.patrick__text}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {patrickText.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={textVariants}
          className={styles.wanda__text}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {wandaText.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <div className={styles.deco__text}>
          <div>Here will witness our</div>
          <div>meet, grow and love</div>
        </div>
      </div>

      <div className={styles.second__scene}>
        <motion.div
          className={styles.main__img__wrap__2}
          style={{ opacity: imageFixed ? 0 : 1 }}
          layout="position"
          layoutId="homeImage"
        >
          <Image
            height={340}
            width={300}
            src="/assets/images/mainPage/main.png"
            alt="none"
          />
        </motion.div>
        <div className={styles.scroll__down}>
          <div className={styles.scroll__down__text}>Scroll down</div>
        </div>
        <div className={styles.cutest__boy}>
          <div>PATRICK IS THE</div>
          <div>CUTEST BOY</div>
          <div>ON EARTH</div>
        </div>
        <div className={styles.left__content}>
          <div className={styles.every__day}>
            <div>Every day I'm still discovering</div>
            <div>new things about you to love.</div>
          </div>
          <div className={styles.anni__text}>2022 . 03 . 22</div>
          <div>
            <span className={styles.anni__redirect}>
              Check other anniversary
            </span>
            <Link href="/anniversary">
              <div className={styles.anni__btn}>
                <FontAwesomeIcon icon={faArrowRight} color="#CF4B47" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <LatestView />
      <BackToTopBtn />
    </div>
  );
}
