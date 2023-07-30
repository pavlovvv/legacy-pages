"use client";

import styles from "../../museum.module.scss";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faCube,
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { scanData } from "../../../../../../data/scan-data";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../../../typescript/types/redux-hooks";
import { useEffect, useState } from "react";
import { setSnackbar, addCoins } from "../../../../../../redux/user-slice";
import { CircularProgress } from "@mui/material";

const sfProLight = localFont({
  src: "../../../../../../public/fonts/SFProDisplay-Light.ttf",
});

const sfProRegular = localFont({
  src: "../../../../../../public/fonts/SFProDisplay-Regular.ttf",
});

export default function Scan({ params }: { params: { id: string } }) {
  const scanObject = scanData[Number(params.id) - 1];
  const id = Number(params.id);

  const isLoaded = useAppSelector((state) => state.user.isLoaded);
  const easyMissions = useAppSelector((state) => state.user.missions.easy);
  const email = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(true);

  const handleLoading = (loadingInfo: boolean) => {
    setLoading(loadingInfo);
  };

  useEffect(() => {
    if (isLoaded && !easyMissions.includes(4)) {
      dispatch(
        setSnackbar({
          isSnackbarOpened: true,
          snackbarMessage: "Перегляньте відскановний об'єкт будь-якого музею",
        })
      );
      dispatch(addCoins({ email, type: "easy", number: 4 }));

      setTimeout(() => {
        dispatch(
          setSnackbar({
            isSnackbarOpened: false,
            snackbarMessage: "Перегляньте відскановний об'єкт будь-якого музею",
          })
        );
      }, 3500);
    }
  }, [isLoaded]);

  return (
    <section className={`${styles.main__info} ${styles["scroll-container"]}`}>
      <div
        className={styles["main__info-top"]}
        style={{ marginBottom: "15px" }}
      >
        <h1 className={sfProLight.className}>
          Пісківський історико-меморіальний музей Павла Тичини
        </h1>
      </div>

      <div className={styles.museum}>
        <div className={`${styles.museum__top} ${sfProRegular.className}`}>
          <div className={`${styles.outlined} ${styles.outlined_mini}`}>
            <FontAwesomeIcon icon={faCube} />
            Відсканований предмет {params.id} з {scanData.length}
          </div>
        </div>
        <div className={`${styles.museum__photos} ${styles.museum__scan}`}>
          <Spline
            scene={scanObject.scene}
            onLoad={() => {
              handleLoading(false);
            }}
          />

          <div
            className={`${styles.scan_description} ${sfProRegular.className}`}
          >
            {scanObject.name}
            <br />
            <div style={{ marginTop: "10px" }}>{scanObject.description}</div>
            <Link
              href={""}
              className={styles.outlined}
              style={{ marginTop: "30px" }}
            >
              <FontAwesomeIcon icon={faMobileScreen} />
              Подивитися у Mobile AR
            </Link>
          </div>
          {isLoading && (
            <CircularProgress
              size={70}
              sx={{
                position: "absolute",
                left: "420px",
                top: "250px",
                color: "#fff",
              }}
            />
          )}

          {id > 1 && (
            <Link
              href={`/main/museums/tychyna/scan/${id - 1}`}
              className={styles["scan__button-left"]}
            >
              <FontAwesomeIcon icon={faCircleLeft} />
            </Link>
          )}

          {id < scanData.length && (
            <Link
              href={`/main/museums/tychyna/scan/${id + 1}`}
              className={styles["scan__button-right"]}
            >
              <FontAwesomeIcon
                icon={faCircleRight}
                href={`/main/museums/tychyna/scan/${id + 1}`}
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
