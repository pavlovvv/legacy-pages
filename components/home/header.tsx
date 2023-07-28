"use client";
import localFont from "next/font/local";
import styles from "../../app/home.module.scss";
import { useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const sfProLight = localFont({
  src: "../../public/fonts/SFProDisplay-Light.ttf",
});

export default function Header() {
  const buttonRef = useRef(null);

  const mouseMoveEvent = (e) => {
    const { x, y } = buttonRef.current.getBoundingClientRect();
    buttonRef.current.style.setProperty("--x", e.clientX - x);
    buttonRef.current.style.setProperty("--y", e.clientY - y);
  };

  useEffect(() => {
    if (buttonRef) {
      buttonRef.current.addEventListener("mousemove", mouseMoveEvent);
    }

    return () =>
      buttonRef.current?.removeEventListener("mousemove", mouseMoveEvent);
  }, [buttonRef]);
  const session = useSession();

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Image
          src={logo}
          alt="legacy pages logo"
          className={styles["header__logo-img"]}
        />
      </div>

      {session?.data ? (
        <div>
          <Link href="/main">
            <div
              className={`${styles.header__buttons} ${sfProLight.className}`}
              ref={buttonRef}
            >
              Перейти до головної
            </div>
          </Link>
        </div>
      ) : session.status === "loading" ? (
        <div
          className={`${styles.header__buttons} ${sfProLight.className}`}
          ref={buttonRef}
        >
          Завантаження...
        </div>
      ) : (
        <div
          className={`${styles.header__buttons} ${sfProLight.className}`}
          ref={buttonRef}
          onClick={() => {
            signIn("google", { callbackUrl: "/main" });
          }}
        >
          Увійти через Google
        </div>
      )}
    </header>
  );
}
