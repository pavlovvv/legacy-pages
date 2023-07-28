"use client";
import styles from "../../app/main/main.module.scss";
import localFont from "next/font/local";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tableData } from "../../data/table-data";
import { useRef } from "react";
import TableContent from "./table-content";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Table() {
  const totalNum = useRef<number[]>([]);

  for (let i = 0; i < tableData.topNumber; i++) {
    totalNum.current.push(i);
  }

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
                Виконано: 0 з 4
              </div>
            </div>
          </td>
          <td>
            <div className={styles["td-wrapper"]}>
              <div className={`${styles.outlined} ${styles.outlined_medium}`}>
                Непрості
              </div>{" "}
              <div className={`${styles.outlined} ${styles.outlined_mini}`}>
                Виконано: 0 з 3
              </div>
            </div>
          </td>
          <td>
            {" "}
            <div className={styles["td-wrapper"]}>
              <div className={`${styles.outlined} ${styles.outlined_hard}`}>
                Складні
              </div>{" "}
              <div className={`${styles.outlined} ${styles.outlined_mini}`}>
                Виконано: 1 з 3
              </div>
            </div>
          </td>
        </tr>
        {totalNum.current.map((el) => {
          return (
            <tr key={el}>
              <TableContent el={el} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
