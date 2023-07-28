import styles from "../../app/main/main.module.scss";
import Image from "next/image";
import localFont from "next/font/local";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import box from "../../public/images/main/box.png";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

const sfProRegular = localFont({
  src: "../../public/fonts/SFProDisplay-Regular.ttf",
});

export default function Gift() {
  return (
    <div className={styles.special}>
      <div className={`${styles.special__top} ${sfProRegular.className}`}>
        <FontAwesomeIcon icon={faGift} width={15} /> Особливі винагороди
      </div>
      <div
        className={`${styles.special__content} ${sfProLight.className}`}
        style={{
          display: "flex",
          columnGap: "15px",
          alignItems: "center",
          maxWidth: "500px",
        }}
      >
        <div>
          Пройдіть всі тести та отримайте{" "}
          <span className={styles.special__highlight}>Legacy Box</span> по
          епосі!
          <p style={{ marginTop: "5px" }}>
            Legacy Box містить 16 карток письменників епохи, які можна обміняти
            в магазині
          </p>
        </div>
        <Image src={box} alt="legacy pages box" width={70} />
      </div>
      <div className={`${styles.special__bottom} ${sfProLight.className}`}>
        <div className={`${styles.outlined} ${styles.outlined_mini}`}>
          <Image src={box} alt="legacy pages box" width={15} /> 1
        </div>
      </div>
    </div>
  );
}
