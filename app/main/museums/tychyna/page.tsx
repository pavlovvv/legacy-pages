import styles from "./museum.module.scss";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faCube } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { photoData, docData, scanData } from "../../../../data/photo-data";
import Shimmer from "../../../../components/shimmer";
import Link from "next/link";

const sfProLight = localFont({
  src: "../../../../public/fonts/SFProDisplay-Light.ttf",
});

const sfProRegular = localFont({
  src: "../../../../public/fonts/SFProDisplay-Regular.ttf",
});

export default function Museum() {
  return (
    <section
      className={`${styles.main__info} ${styles["scroll-container"]}`}
      style={{ minWidth: "1355px" }}
    >
      <div
        className={styles["main__info-top"]}
        style={{ marginBottom: "15px" }}
      >
        <h1 className={sfProLight.className}>
          Літературно-меморіальний музей-квартира П. Г. Тичини
        </h1>
      </div>

      <Shimmer>
        <div className={styles.museum}>
          <div className={`${styles.museum__top} ${sfProRegular.className}`}>
            <div className={`${styles.outlined} ${styles.outlined_mini}`}>
              <FontAwesomeIcon icon={faCube} />
              Відскановані предмети: {scanData.length}
            </div>
          </div>
          <div className={styles.museum__photos}>
            {scanData.map((scan, i) => (
              <Link href={`/main/museums/tychyna/scan/${i + 1}`}>
                <Image src={scan} alt="museum scan legacy pages" />
              </Link>
            ))}
          </div>

          <div className={`${styles.museum__top} ${sfProRegular.className}`}>
            <div className={`${styles.outlined} ${styles.outlined_mini}`}>
              <FontAwesomeIcon icon={faImages} />
              Фотографії: {photoData.length}
            </div>
          </div>
          <div className={styles.museum__photos}>
            {photoData.map((photo) => (
              <Image src={photo} alt="museum photo legacy pages" />
            ))}
          </div>

          <div className={`${styles.museum__top} ${sfProRegular.className}`}>
            <div className={`${styles.outlined} ${styles.outlined_mini}`}>
              <FontAwesomeIcon icon={faFile} />
              Відскановані документи: {docData.length}
            </div>
          </div>
          <div className={styles.museum__photos}>
            {docData.map((doc) => (
              <Image src={doc} alt="museum document legacy pages" />
            ))}
          </div>
        </div>
      </Shimmer>
    </section>
  );
}
