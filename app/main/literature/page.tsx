import styles from "../main.module.scss";
import s from "../../../styles/literature.module.scss";
import localFont from "next/font/local";
import Fiction from "../../../components/literature/literature";
import Shimmer from "../../../components/shimmer";

const sfProLight = localFont({
  src: "../../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Literature() {
  return (
    <section className={`${styles.main__info} ${s["scroll-container"]}`}>
      <div
        className={styles["main__info-top"]}
        style={{ marginBottom: "15px" }}
      >
        <h1 className={sfProLight.className}>Список літератури</h1>
      </div>
      <Shimmer>
        <Fiction />
      </Shimmer>
    </section>
  );
}
