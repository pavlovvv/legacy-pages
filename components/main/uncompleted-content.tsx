import styles from "../../app/main/main.module.scss";
import Image from "next/image";
import coin from "../../public/images/coin.png";

export default function UncompletedContent({
  data,
  coinNumber,
}: {
  data: string;
  coinNumber: number;
}) {
  return (
    <td className={styles.table__content}>
      <div className={styles["table__content-inner"]}>
        {data}
        <div className={`${styles.outlined} ${styles.outlined_mini}`}>
          <Image src={coin} width={15} alt="Legacy Page Coin" /> {coinNumber}
        </div>
      </div>
    </td>
  );
}
