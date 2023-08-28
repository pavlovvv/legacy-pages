"use client";
import styles from "../../app/main/main.module.scss";
import Image from "next/image";
import coin from "../../public/images/coin.png";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";
import Shimmer from "../shimmer";
import { useAppSelector } from "../../typescript/types/redux-hooks";
import Link from "next/link";
import { navItems } from "../../data/nav-data";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Nav() {
  const coins = useAppSelector((state) => state.user.coins);

  return (
    <nav className={sfProLight.className}>
      <Shimmer nameOfClass="nav">
        {navItems.map((item) => (
          <Link key={item.name} href={item.link} style={{ zIndex: 1 }}>
            <div className={`${styles.outlined} ${styles.outlined_mini}`}>
              <FontAwesomeIcon icon={item.icon} />
              {item.name}
            </div>
          </Link>
        ))}

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
