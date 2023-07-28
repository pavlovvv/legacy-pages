"use client";
import { useEffect, useRef } from "react";
import shimmer from "../styles/shimmer.module.scss";
import styles from "../app/main/main.module.scss";

export default function Shimmer({
  children,
  nameOfClass,
}: {
  children: React.ReactNode;
  nameOfClass?: string;
}) {
  const elRef = useRef(null);

  const mouseMoveEvent = (e) => {
    const { x, y } = elRef.current.getBoundingClientRect();
    elRef.current.style.setProperty("--x", e.clientX - x);
    elRef.current.style.setProperty("--y", e.clientY - y);
  };

  useEffect(() => {
    if (elRef) {
      elRef.current.addEventListener("mousemove", mouseMoveEvent);
    }

    return () =>
      elRef.current?.removeEventListener("mousemove", mouseMoveEvent);
  }, [elRef]);

  return (
    <div ref={elRef} className={`${shimmer.shimmer} ${styles[nameOfClass]}`}>
      {children}
    </div>
  );
}
