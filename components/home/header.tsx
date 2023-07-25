"use client";
import localFont from "next/font/local";
import styles from "../../app/home.module.scss";
import { useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { signIn, signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

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
      buttonRef.current.removeEventListener("mousemove", mouseMoveEvent);
  }, [buttonRef]);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const session = useSession();

  console.log(session);

  return (
    <SessionProvider>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Image
            src={logo}
            alt="legacy pages logo"
            className={styles["header__logo-img"]}
          />
        </div>

        {session?.data ? (
          <div
            className={`${styles.header__buttons} ${sfProLight.className}`}
            ref={buttonRef}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Вийти з аккаунту
          </div>
        ) : (
          <div
            className={`${styles.header__buttons} ${sfProLight.className}`}
            ref={buttonRef}
            onClick={() => {
              signIn("google", { callbackUrl });
            }}
          >
            Увійти через Google
          </div>
        )}
      </header>
    </SessionProvider>
  );
}
