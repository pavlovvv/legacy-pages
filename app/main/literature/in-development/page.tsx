"use client";
import styles from "../../main.module.scss";
import s from "../../../../styles/literature.module.scss";
import localFont from "next/font/local";

const sfProLight = localFont({
  src: "../../../../public/fonts/SFProDisplay-Light.ttf",
});

export default function InDevelopment() {
  return (
    <section className={`${styles.main__info} ${s["scroll-container"]}`}>
      <div className={styles["main__info-top"]}>
        <h1 className={sfProLight.className}>У розробці...</h1>
      </div>
    </section>
  );
}
