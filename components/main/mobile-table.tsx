"use client";
import styles from "../../app/main/main.module.scss";
import localFont from "next/font/local";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tableData } from "../../data/table-data";
import { useRef } from "react";
import { useAppSelector } from "../../typescript/types/redux-hooks";
import MobileTableContent from "./mobile-table-content";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function MobileTable() {
  const totalNum = useRef<number[]>([]);

  for (let i = 1; i <= tableData.topNumber; i++) {
    totalNum.current.push(i);
  }

  const missions = useAppSelector((state) => state.user.missions);

  return (
    <table className={styles["main__info-table"]}>
      <tbody className={sfProLight.className}>
        <tr>
          <th colSpan={3}>
            <div
              className={styles.outlined}
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <FontAwesomeIcon icon={faStar} />
              Завдання
            </div>
          </th>
        </tr>
        <tr>
          <td>
            <div className={styles["td-wrapper"]}>
              <div className={`${styles.outlined} ${styles.outlined_easy}`}>
                Легкі
              </div>{" "}
              <div className={`${styles.outlined} ${styles.outlined_mini}`}>
                Виконано: {missions.easy.length} з 4
              </div>
            </div>
          </td>
        </tr>
        {totalNum.current.map((el, i) => {
          return (
            <tr key={i}>
              <MobileTableContent
                el={el}
                i={i}
                dataType={tableData.easy}
                missionType={missions.easy}
              />
            </tr>
          );
        })}

        <tr>
          <td>
            <div className={styles["td-wrapper"]}>
              <div className={`${styles.outlined} ${styles.outlined_medium}`}>
                Непрості
              </div>{" "}
              <div className={`${styles.outlined} ${styles.outlined_mini}`}>
                Виконано: {missions.medium.length} з 3
              </div>
            </div>
          </td>
        </tr>
        {totalNum.current.map((el, i) => {
          return (
            <tr key={i}>
              <MobileTableContent
                el={el}
                i={i}
                dataType={tableData.medium}
                missionType={missions.medium}
              />
            </tr>
          );
        })}

        <tr>
          <td>
            {" "}
            <div className={styles["td-wrapper"]}>
              <div className={`${styles.outlined} ${styles.outlined_hard}`}>
                Складні
              </div>{" "}
              <div className={`${styles.outlined} ${styles.outlined_mini}`}>
                Виконано: {missions.hard.length} з 3
              </div>
            </div>
          </td>
        </tr>
        {totalNum.current.map((el, i) => {
          return (
            <tr key={i}>
              <MobileTableContent
                el={el}
                i={i}
                dataType={tableData.hard}
                missionType={missions.hard}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
