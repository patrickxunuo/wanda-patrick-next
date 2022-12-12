import Head from "next/head";
import BackToTopBtn from "../components/BackToTopBtn";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LastestView from "../components/LatestView";

export default function Home() {
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
        <div className={styles.main__img__wrap}>
          <Image
            height={340}
            width={300}
            src="/assets/images/mainPage/main.png"
            alt="none"
          />
        </div>
        <div className={styles.patrick__text}>Patrick</div>
        <div className={styles.wanda__text}>Wanda</div>
        <div className={styles.deco__text}>
          <div>Here will witness our</div>
          <div>meet, grow and love</div>
        </div>
      </div>

      <div className={styles.second__scene}>
        <div className={styles.main__img__wrap}>
          <Image
            height={340}
            width={300}
            src="/assets/images/mainPage/main.png"
            alt="none"
          />
        </div>
        <div className={styles.scroll__down}>
          <div className={styles.scroll__down__text}>Scroll down</div>
        </div>
        <div className={styles.custest__boy}>
          <div>PATRICK IS THE</div>
          <div>CUSTEST BOY</div>
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

      <LastestView />
      <BackToTopBtn />
    </div>
  );
}
