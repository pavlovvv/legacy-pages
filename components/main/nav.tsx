"use client";
import styles from "../../app/main/main.module.scss";
import Image from "next/image";
import coin from "../../public/images/coin.png";
import level from "../../public/images/level.png";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faShieldCat,
  faHouse,
  faStore,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";
import Shimmer from "../shimmer";
import { useAppSelector } from "../../typescript/types/redux-hooks";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Nav() {

  const coins = useAppSelector((state) => state.user.coins);
  const levelNumber = useAppSelector((state) => state.user.level);

  return (
    <nav className={sfProLight.className}>
      <Shimmer nameOfClass="nav">
        <div className={`${styles.outlined} ${styles.outlined_mini}`}>
          <FontAwesomeIcon icon={faHouse} />
          Головна
        </div>
        <div className={`${styles.outlined} ${styles.outlined_mini}`}>
          <FontAwesomeIcon icon={faCalendar} />
          Календар
        </div>
        <div className={`${styles.outlined} ${styles.outlined_mini}`}>
          <FontAwesomeIcon icon={faShieldCat} />
          Рейтинг
        </div>
        <div className={`${styles.outlined} ${styles.outlined_mini}`}>
          <FontAwesomeIcon icon={faStore} />
          Магазин
        </div>
        <div className={`${styles.outlined} ${styles.outlined_mini}`}>
          <FontAwesomeIcon icon={faUser} />
          Профіль
        </div>

        <div
          className={`${styles.outlined} ${styles.outlined_mini}`}
          style={{
            color: "#c8e8eb",
            background:
              "linear-gradient(310deg, rgba(6,223,206,0.17969194513742992) 0%, rgba(255,255,255,0) 100%)",
            border: "rgba(200, 232, 235, 0.1) 1px solid",
          }}
        >
          <Image src={level} width={20} alt="Legacy Page Coin" /> {levelNumber}
        </div>

        <div
          className={`${styles.outlined} ${styles.outlined_mini}`}
          style={{
            color: "#ff89d7",
            background:
              "linear-gradient(111deg, rgba(2,0,36,0) 0%, rgba(234,136,222,0.2049194677871149) 100%)",
            border: "rgba(255, 137, 215, 0.1) 1px solid",
          }}
        >
          <Image src={coin} width={20} alt="Legacy Page Coin" /> {coins}
        </div>
        <div
          className={`${styles.outlined} ${styles.outlined_mini}`}
          style={{ height: "32px" }}
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>
      </Shimmer>
    </nav>
  );
}
