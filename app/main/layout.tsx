"use client";

import styles from "./main.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import localFont from "next/font/local";
import { faThumbTack, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../components/main/nav";
import Shimmer from "../../components/shimmer";
import Link from "next/link";
import bgMain from "../../public/images/main/bg.png";
import bgLiterature from "../../public/images/literature/bg.png";
import bgMuseum from "../../public/images/museums/bg.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../typescript/types/redux-hooks";
import { setAuthData } from "./../../redux/user-slice";
import { useAppSelector } from "../../typescript/types/redux-hooks";
import { useMediaQuery, Snackbar, Alert, Slide } from "@mui/material";
import { navIcons, navLinks } from "../../data/nav-data";
import NavPopover from "../../components/main/popover";
import { useUserData } from "../../components/Providers";
import { IUserState } from "../../typescript/interfaces/data";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const data = useUserData();
  const [bg, setBg] = useState(bgMain);
  const dispatch = useAppDispatch();
  const isSnackbarOpened = useAppSelector(
    (state) => state.user.isSnackbarOpened
  );
  const snackbarMessage = useAppSelector((state) => state.user.snackbarMessage);
  const min650 = useMediaQuery("(min-width:651px)");
  const isLoaded = useAppSelector((state) => state.user.isLoaded);

  useEffect(() => {
    if (!isLoaded) dispatch(setAuthData(data.user as IUserState));
    if (pathname === "/main") setBg(bgMain);
    if (pathname.includes("/literature")) setBg(bgLiterature);
    if (pathname.includes("/museums")) setBg(bgMuseum);
  }, [pathname, isLoaded]);
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${bg?.src})` }}
      >
        <header className={styles.header}>
          <div className={styles.header__logo}>
            <Image
              src={logo}
              alt="legacy pages logo"
              className={styles["header__logo-img"]}
            />
          </div>
          {!min650 && <NavPopover />}
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
            {navIcons.map((el, i) => (
              <Link
                key={i}
                className={styles["main__nav-el"]}
                href={navLinks[i]}
              >
                <FontAwesomeIcon key={i} icon={el} />
              </Link>
            ))}
          </Shimmer>

          {children}
        </main>

        {min650 && <Nav />}
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
