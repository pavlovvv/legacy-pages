"use client";

import styles from "./main.module.scss";
import s from "../../styles/preloader.module.scss";
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
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../typescript/types/redux-hooks";
import { getAuth } from "./../../redux/user-slice";
import { useAppSelector } from "../../typescript/types/redux-hooks";
import { CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

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

  const [bg, setBg] = useState(bgMain);

  useEffect(() => {
    if (pathname === "/main") setBg(bgMain);
    if (pathname === "/main/literature") setBg(bgLiterature);
  }, [pathname]);

  const session = useSession();
  const dispatch = useAppDispatch();
  const isPending = useAppSelector((state) => state.user.isPending);
  const isSnackbarOpened = useAppSelector(
    (state) => state.user.isSnackbarOpened
  );
  const snackbarMessage = useAppSelector((state) => state.user.snackbarMessage);

  useEffect(() => {
    if (session.status === "authenticated") {
      if (session.data.user.email) {
        dispatch(getAuth({ email: session.data.user.email }));
      }
    }
  }, [session]);

  return (
    <>
      <div
        className={styles.wrapper}
        style={
          !isPending
            ? { minWidth: "1550px", backgroundImage: `url(${bg?.src})` }
            : { display: "none" }
        }
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
            <div
              className={`${styles.header__buttons} ${sfProLight.className}`}
            >
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
      <div
        className={!isPending ? s.none : ""}
        style={{ backgroundImage: `url(${bg?.src})` }}
      >
        <div className={s.preloader}>
          <div className={s.preloaderitem}>
            <CircularProgress
              size={100}
              sx={{ display: "block", margin: "auto", color: "#fff" }}
            />
          </div>
        </div>
      </div>
      <Snackbar
        open={isSnackbarOpened}
        TransitionComponent={Slide}
        autoHideDuration={3000}
        color="#fff"
      >
        <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
