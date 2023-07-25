"use client";
import character from "../../public/images/home/character.png";
import hand1 from "../../public/images/home/hand-1.png";
import hand2 from "../../public/images/home/hand-2.png";
import hand3 from "../../public/images/home/hand-3.png";
import road from "../../public/images/home/road.png";
import roadMobile from "../../public/images/home/road-mobile.png";
import localFont from "next/font/local";
import Image from "next/image";
import styles from "../../app/home.module.scss";
import { motion } from "framer-motion";

const sfProThin = localFont({
  src: "../../public/fonts/SFProDisplay-Thin.ttf",
});

type move = {
  visible: {
    x: number;
    opacity: number;
  };

  hidden: {
    x: number;
    opacity: number;
  };
};

export default function Main() {
  const moveLeft: move = {
    visible: {
      x: 0,
      opacity: 1,
    },

    hidden: {
      x: -200,
      opacity: 0,
    },
  };

  const moveRight: move = {
    visible: {
      x: 0,
      opacity: 1,
    },

    hidden: {
      x: 200,
      opacity: 0,
    },
  };

  return (
    <main className={styles.main}>
      <section className={styles.main__left}>
        <Image
          src={character}
          className={styles["main__left-character"]}
          alt="legacy pages character"
          quality={100}
        />
      </section>
      <section className={`${styles.main__right} ${sfProThin.className}`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={moveLeft}
          transition={{ delay: 0 }}
          className={styles["main__right-msg_1"]}
        >
          Найкращий спосіб <br /> вивчати рідну спадщину
          <Image src={hand1} alt="legacy page hand" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={moveRight}
          transition={{ delay: 0.2 }}
          className={styles["main__right-msg_2"]}
        >
          Покроково проведемо <br /> крізь темряву до глибоких знань
          <Image src={hand2} alt="legacy page hand" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={moveLeft}
          transition={{ delay: 0.4 }}
          className={styles["main__right-msg_3"]}
        >
          Досліджуйте. <br /> Отримуйте та витрачайте бали
          <Image src={hand3} alt="legacy page hand" />
        </motion.div>
        <Image
          src={road}
          alt="legacy page road"
          className={styles["main__right-road"]}
        />

        <Image
          src={roadMobile}
          alt="legacy page road mobile"
          className={styles["main__right-road_mobile"]}
        />
      </section>
    </main>
  );
}
