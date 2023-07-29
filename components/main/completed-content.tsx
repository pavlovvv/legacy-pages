import styles from "../../app/main/main.module.scss";
import Image from "next/image";
import checked from "../../public/images/checked.png";

type CompletedContentProps = {
  data: string;
};

export default function CompletedContent({ data }: CompletedContentProps) {
  return (
    <td className={styles.table__content}>
      <div className={styles["table__content-inner_completed"]}>
        {data}
        <div className={`${styles.outlined} ${styles.outlined_mini}`} style={{minWidth: '70px'}}>
          <Image src={checked} width={15} alt="Legacy Page Checked" />
        </div>
      </div>
    </td>
  );
}
