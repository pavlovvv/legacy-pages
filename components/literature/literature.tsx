import styles from "../../styles/literature.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import localFont from "next/font/local";
import LiteratureContent from "./literature-content";

const sfProRegular = localFont({
  src: "../../public/fonts/SFProDisplay-Regular.ttf",
});

export default function Literature() {
  return (
    <div className={styles.literature}>
      <div className={`${styles.literature__top} ${sfProRegular.className}`}>
        <div className={`${styles.outlined_mini} ${styles.outlined_easy}`}>
          <FontAwesomeIcon width={13} icon={faBookOpen} />
          Початківець
        </div>
        <div className={`${styles.outlined} ${styles.outlined_mini}`}>
          Доступно: 0 з 5
        </div>
      </div>

      <LiteratureContent />
    </div>
  );
}
