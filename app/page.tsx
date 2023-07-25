import styles from "./home.module.scss";
import Footer from "../components/home/footer";
import Main from "../components/home/main";
import Header from "../components/home/header";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}
