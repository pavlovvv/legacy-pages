import styles from "../../app/main/main.module.scss";
import Image from "next/image";
import coin from "../../public/images/coin.png";
import localFont from "next/font/local";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

const sfProRegular = localFont({
  src: "../../public/fonts/SFProDisplay-Regular.ttf",
});

export default function DayRewards() {
  return (
    <div className={styles.special}>
      <div className={`${styles.special__top} ${sfProRegular.className}`}>
        <FontAwesomeIcon icon={faFireFlameCurved} width={15} /> День: 1
      </div>
      <div className={`${styles.special__days} ${sfProLight.className}`}>
        <div className={styles["special__days-inner"]}>
          7 днів навчання{" "}
          <div className={`${styles.outlined} ${styles.outlined_mini}`}>
            <Image src={coin} width={13} alt="Legacy Page Coin" /> 30
          </div>
        </div>

        <div className={styles["special__days-inner"]}>
          14 днів навчання{" "}
          <div className={`${styles.outlined} ${styles.outlined_mini}`}>
            <Image src={coin} width={13} alt="Legacy Page Coin" /> 60
          </div>
        </div>

        <div className={styles["special__days-inner"]}>
          30 днів навчання{" "}
          <div className={`${styles.outlined} ${styles.outlined_mini}`}>
            <Image src={coin} width={13} alt="Legacy Page Coin" /> 100
          </div>
        </div>
      </div>
      <div
        className={`${styles.special__bottom} ${sfProLight.className}`}
        style={{ justifyContent: "flex-start" }}
      >
        Вчіться щодня!
      </div>
    </div>
  );
}
