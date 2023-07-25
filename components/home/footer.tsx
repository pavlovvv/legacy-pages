import styles from "../../app/home.module.scss";
import localFont from "next/font/local";
import yt from "../../public/images/home/youtube.svg";
import tel from "../../public/images/home/telegram.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

const sfProUltraLight = localFont({
  src: "../../public/fonts/SFProDisplay-Ultralight.ttf",
});

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__team} ${sfProUltraLight.className}`}>
        voidFuture
      </div>
      <div className={styles.footer__links}>
        
      <FontAwesomeIcon icon={faTwitter}/>
      <FontAwesomeIcon icon={faInstagram}/>
      <FontAwesomeIcon icon={faYoutube}/>   
      <FontAwesomeIcon icon={faTelegram}/>
      
      </div>
    </footer>
  );
}
