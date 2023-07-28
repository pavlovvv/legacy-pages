import styles from "./main.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import localFont from "next/font/local";
import {
  faSpinner,
  faInfo,
  faBook,
  faIdBadge,
  faMuseum,
  faClapperboard,
  faThumbTack,
  faHourglass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/main/table";
import Museum from "../../components/main/museum";
import Gift from "../../components/main/gift";
import DayRewards from "../../components/main/day-rewards";
import Nav from "../../components/main/nav";
import Shimmer from "../../components/shimmer";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Main() {
  const icons: IconDefinition[] = [
    faInfo,
    faBook,
    faIdBadge,
    faMuseum,
    faClapperboard,
  ];

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Image
            src={logo}
            alt="legacy pages logo"
            className={styles["header__logo-img"]}
          />
        </div>
        <Shimmer>
          <div className={`${styles.header__buttons} ${sfProLight.className}`}>
            <span>
              <FontAwesomeIcon icon={faThumbTack} />
              Розстріляне відродження
            </span>
            <span>
              1922-1934
              <FontAwesomeIcon icon={faHourglass} />
            </span>
          </div>
        </Shimmer>
      </header>

      <main className={styles.main}>
        <Shimmer nameOfClass="main__nav">
          {icons.map((el, i) => (
            <div className={styles["main__nav-el"]}>
              <FontAwesomeIcon key={i} icon={el} />
            </div>
          ))}
        </Shimmer>

        <section className={styles.main__info}>
          <div className={styles["main__info-top"]}>
            <h1 className={sfProLight.className}>Розстріляне відродження</h1>
            <div
              className={`${styles["info-progress"]} ${sfProLight.className}`}
            >
              <FontAwesomeIcon icon={faSpinner} />
              Ваш прогрес: 0%
            </div>
          </div>
          <div className={styles["main__info-description"]}>
            <h2 className={sfProLight.className}>
              Доба творчої особистості, яка продемонструвавши всю силу
              українського духу, його творчий потенціал, ввійшла в конфлікт із
              тоталітарним режимом і вкотре довела необхідність свого шляху й
              незалежності від впливу інших культур.
            </h2>
          </div>
          <Shimmer>
            <Table />
          </Shimmer>

          <div className={styles["main__info-bottom"]}>
            <Shimmer>
              <Museum />
            </Shimmer>
            <Shimmer>
              <Gift />
            </Shimmer>
            <Shimmer>
              <DayRewards />
            </Shimmer>
          </div>
        </section>
      </main>

      <Nav />
    </div>
  );
}
