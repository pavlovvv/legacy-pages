"use client";
import styles from "./main.module.scss";
import localFont from "next/font/local";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/main/table";
import Museum from "../../components/main/museum";
import Gift from "../../components/main/gift";
import DayRewards from "../../components/main/day-rewards";
import Shimmer from "../../components/shimmer";
import { useAppSelector } from "../../typescript/types/redux-hooks";
import MobileTable from "../../components/main/mobile-table";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Main() {
  const total = useAppSelector((state) => state.user.total);
  const totalCompleted = useAppSelector((state) => state.user.totalCompleted);
  const percentage: number = (totalCompleted / total) * 100;

  return (
    <section className={styles.main__info}>
      <div className={styles["main__info-top"]}>
        <h1 className={sfProLight.className}>Розстріляне відродження</h1>
        <div className={`${styles["info-progress"]} ${sfProLight.className}`}>
          <FontAwesomeIcon icon={faSpinner} />
          Ваш прогрес: {percentage}%
        </div>
      </div>
      <div className={styles["main__info-description"]}>
        <h2 className={sfProLight.className}>
          Доба творчої особистості, яка продемонструвавши всю силу українського
          духу, його творчий потенціал, ввійшла в конфлікт із тоталітарним
          режимом і вкотре довела необхідність свого шляху й незалежності від
          впливу інших культур.
        </h2>
      </div>

      {window?.innerWidth > 650 ? (
        <Shimmer>
          <Table />
        </Shimmer>
      ) : (
        <MobileTable />
      )}

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
  );
}
