"use client";
import styles from "../main.module.scss";
import s from "../../../styles/literature.module.scss";
import localFont from "next/font/local";
import Fiction from "../../../components/literature/literature";
import Shimmer from "../../../components/shimmer";
import { setSnackbar, addCoins } from "../../../redux/user-slice";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../typescript/types/redux-hooks";
import { useEffect } from "react";

const sfProLight = localFont({
  src: "../../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Literature() {
  const isLoaded = useAppSelector((state) => state.user.isLoaded);
  const easyMissions = useAppSelector((state) => state.user.missions.easy);
  const email = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoaded && !easyMissions.includes(1)) {
      dispatch(
        setSnackbar({
          isSnackbarOpened: true,
          snackbarMessage: "Ознайомтесь зі списком літератур",
        })
      );
      dispatch(addCoins({ email, type: "easy", number: 1 }));

      setTimeout(() => {
        dispatch(
          setSnackbar({
            isSnackbarOpened: false,
            snackbarMessage: "Ознайомтесь зі списком літератур",
          })
        );
      }, 3500);
    }
  }, [isLoaded]);

  return (
    <section className={`${styles.main__info} ${s["scroll-container"]}`}>
      <div
        className={styles["main__info-top"]}
        style={{ marginBottom: "15px" }}
      >
        <h1 className={sfProLight.className}>Список літератури</h1>
      </div>
      <Shimmer>
        <Fiction />
      </Shimmer>
    </section>
  );
}
