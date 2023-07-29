import styles from "../../styles/literature.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { writers } from "../../data/writers-data";
import { IWritersData, IWorkData } from "../../typescript/interfaces/data";
import {
  useAppSelector,
  useAppDispatch,
} from "../../typescript/types/redux-hooks";
import { setSnackbar, addCoins } from "../../redux/user-slice";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

const sfProRegular = localFont({
  src: "../../public/fonts/SFProDisplay-Regular.ttf",
});

export default function LiteratureContent() {
  const easyMissions = useAppSelector((state) => state.user.missions.easy);
  const email = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();

  const handleAddCoins = () => {
    if (!easyMissions.includes(2)) {
      dispatch(
        setSnackbar({
          isSnackbarOpened: true,
          snackbarMessage: "Ознайомтесь із будь-якою літературою",
        })
      );
      dispatch(addCoins({ email, type: "easy", number: 2 }));

      setTimeout(() => {
        dispatch(
          setSnackbar({
            isSnackbarOpened: false,
            snackbarMessage: "Ознайомтесь із будь-якою літературою",
          })
        );
      }, 3500);
    }
  };

  return (
    <>
      {writers.map((writer: IWritersData) => (
        <div className={styles.literature__main} key={writer.name}>
          <section>
            <Image
              src={writer.avatar}
              alt="Володимир Сосюра legacy pages"
              width={215}
              style={{ minWidth: "215px" }}
            />
          </section>
          <section className={sfProLight.className}>
            <div className={styles.outlined} style={{ fontSize: "20px" }}>
              {writer.name}
            </div>
            <div className={styles.literature__works}>
              {writer.works.map((work: IWorkData) => (
                <div className={styles["literature-work"]} key={work.name}>
                  <Image
                    src={work.img}
                    alt={`${work.name} legacy pages`}
                    width={130}
                  />
                  <section>
                    <div
                      className={`${styles["literature-work__info-el"]} ${sfProRegular.className}`}
                    >
                      {work.name}
                    </div>
                    <div className={styles["literature-work__info-el"]}>
                      {" "}
                      <span className={sfProRegular.className}>
                        Рік написання:
                      </span>{" "}
                      {work.year}
                    </div>
                    <div className={styles["literature-work__info-el"]}>
                      {" "}
                      <span className={sfProRegular.className}>Жанр:</span>{" "}
                      {work.genre}
                    </div>
                    <div className={styles["literature-work__info-el"]}>
                      Завантажити:
                    </div>
                    <div>
                      <Link
                        className={styles["literature-work__link"]}
                        href={work.links.docx}
                        target="_blank"
                        onClick={handleAddCoins}
                      >
                        DOCX
                      </Link>
                      <Link
                        className={styles["literature-work__link"]}
                        href={work.links.pdf}
                        target="_blank"
                        onClick={handleAddCoins}
                      >
                        PDF
                      </Link>
                      <Link
                        className={styles["literature-work__link"]}
                        href={work.links.rtf}
                        target="_blank"
                        onClick={handleAddCoins}
                      >
                        RTF
                      </Link>
                      <Link
                        className={styles["literature-work__link"]}
                        href={work.links.epub}
                        target="_blank"
                        onClick={handleAddCoins}
                      >
                        EPUB
                      </Link>
                      <Link
                        className={styles["literature-work__link"]}
                        href={work.links.html}
                        target="_blank"
                        onClick={handleAddCoins}
                      >
                        HTML
                      </Link>
                    </div>
                  </section>

                  <div className={styles["literature-work__button"]}>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>

                  <div className={styles["literature-work__button"]}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
