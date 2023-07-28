"use client";

import styles from "./main.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import localFont from "next/font/local";
import {
  faInfo,
  faBook,
  faIdBadge,
  faMuseum,
  faClapperboard,
  faThumbTack,
  faHourglass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../components/main/nav";
import Shimmer from "../../components/shimmer";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Link from "next/link";
import bgMain from "../../public/images/main/bg.png";
import bgLiterature from "../../public/images/literature/bg.png";
import { usePathname } from "next/navigation";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const icons: IconDefinition[] = [
    faInfo,
    faBook,
    faIdBadge,
    faMuseum,
    faClapperboard,
  ];

  const links: string[] = [
    "/main",
    "/main/literature",
    "/main",
    "/main",
    "/main",
  ];

  const bg = (function () {
    if (pathname === "/main") return bgMain;
    if (pathname === "/main/literature") return bgLiterature;
  })();

  return (
    <div
      className={styles.wrapper}
      style={{ minWidth: "1550px", backgroundImage: `url(${bg?.src})` }}
    >
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
            <Link key={i} className={styles["main__nav-el"]} href={links[i]}>
              <FontAwesomeIcon key={i} icon={el} />
            </Link>
          ))}
        </Shimmer>

        {children}
      </main>
      <Nav />
    </div>
  );
}
