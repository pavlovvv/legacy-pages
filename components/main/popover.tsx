"use client";
import React from "react";
import { Popover } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/nav-popover.module.scss";
import Link from "next/link";
import { navItems } from "./../../data/nav-data";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";
import { useAppSelector } from "../../typescript/types/redux-hooks";
import Image from "next/image";
import coin from "../../public/images/coin.png";

export default function NavPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const coins = useAppSelector((state) => state.user.coins);

  return (
    <div>
      <button className={styles.popover__button} onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className={styles.popover}
        slotProps={{ paper: { className: styles["popover-paper"] } }}
      >
        <div className={styles.popover__inner}>
          <div className={styles.popover__icons}>
            {navItems.map((el, i) => (
              <Link key={i} className={styles.popover__icon} href={el.link}>
                <FontAwesomeIcon key={i} icon={el.icon} />
              </Link>
            ))}
            <div
              className={styles.popover__icon}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
          </div>

          <div className={styles["popover__icon-coin"]}>
            <Image src={coin} width={19} alt="Legacy Page Coin" /> {coins}
          </div>
        </div>
      </Popover>
    </div>
  );
}
