import styles from "../../app/main/main.module.scss";
import Image from "next/image";
import coin from "../../public/images/coin.png";
import localFont from "next/font/local";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

const sfProRegular = localFont({
  src: "../../public/fonts/SFProDisplay-Regular.ttf",
});

export default function Museum() {
  return (
    <div className={styles.special}>
      <div className={`${styles.special__top} ${sfProRegular.className}`}>
        <FontAwesomeIcon icon={faCamera} width={15} /> Цифровізовано командою
        Legacy Pages
      </div>
      <div className={`${styles.special__content} ${sfProLight.className}`}>
        Завітайте до{" "}
        <span className={styles.special__highlight}>
          Пісківського історико-меморіального музею Павла Тичини
        </span>{" "}
        та отримайте додаткові бали!
        <p style={{ marginTop: "5px" }}>
          Ми підготували багато високоякісних матеріалів для вашого найкращого
          ознайомлення
        </p>
      </div>
      <div className={`${styles.special__bottom} ${sfProLight.className}`}>
        <Link href="/main/museums/tychyna" style={{zIndex: 1}}>
        <span className={`${styles.outlined} ${styles.outlined_mini}`}>
          Перейти
        </span>
        </Link>
        <div className={`${styles.outlined} ${styles.outlined_mini}`}>
          <Image src={coin} width={15} alt="Legacy Page Coin" /> 5
        </div>
      </div>
    </div>
  );
}
