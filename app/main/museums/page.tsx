"use client";
import styles from "../main.module.scss";
import s from "../../../styles/museums.module.scss";
import localFont from "next/font/local";
import Shimmer from "../../../components/shimmer";
import { setSnackbar, addCoins } from "../../../redux/user-slice";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../typescript/types/redux-hooks";
import { useEffect } from "react";
import Museums from "../../../components/museums/museums";

const sfProLight = localFont({
  src: "../../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Literature() {
  const isLoaded = useAppSelector((state) => state.user.isLoaded);
  const easyMissions = useAppSelector((state) => state.user.missions.easy);
  const email = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoaded && !easyMissions.includes(3)) {
      dispatch(
        setSnackbar({
          isSnackbarOpened: true,
          snackbarMessage: "Ознайомтесь зі списком музеїв",
        })
      );
      dispatch(addCoins({ email, type: "easy", number: 3 }));

      setTimeout(() => {
        dispatch(
          setSnackbar({
            isSnackbarOpened: false,
            snackbarMessage: "Ознайомтесь зі списком музеїв",
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
        <div>
          <h1 className={sfProLight.className}>Музеї та пам'тяки</h1>
        </div>
      </div>
      <Shimmer nameOfClass="width_100">
        <Museums />
      </Shimmer>
    </section>
  );
}
