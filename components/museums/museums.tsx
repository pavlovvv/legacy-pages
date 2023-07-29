import styles from "../../styles/museums.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import localFont from "next/font/local";
import Image from "next/image";
import { museumsData } from "../../data/museum-data";
import Link from "next/link";

const sfProRegular = localFont({
  src: "../../public/fonts/SFProDisplay-Regular.ttf",
});

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Museums() {
  return (
    <div className={styles.museums}>
      {museumsData.map((museum) => (
        <div className={styles.museum} key={museum.name}>
          <div>
            <Image
              src={museum.img}
              alt={`${museum.name} legacy pages`}
              width={200}
              style={{ minWidth: "200px" }}
            />
          </div>
          <div className={sfProLight.className}>
            <div className={styles.museum__top}>
              <div className={styles.outlined} style={{ fontSize: "20px" }}>
                {museum.name}
              </div>
              <Link target="_blank" href={museum.mapLink}>
                <div className={styles.outlined} style={{ fontSize: "19px" }}>
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    style={{ width: "15px" }}
                  />
                  Показати на мапі
                </div>
              </Link>
            </div>
            <div className={styles.museum__discription}>
              {museum.description}
            </div>

            <div className={styles.museum__location}>
              <span className={sfProRegular.className}>Геолокація:</span>{" "}
              {museum.location}
            </div>
            <div className={styles.museum__galery}>
              <Link href={museum.galeryLink}>
                <div className={styles.outlined} style={{ fontSize: "19px" }}>
                  <FontAwesomeIcon icon={faImage} style={{ width: "15px" }} />
                  Перейти до галереї
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
