import {
  faCalendar,
  faShieldCat,
  faHouse,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInfo,
  faBook,
  faIdBadge,
  faMuseum,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export const navItems = [
  { name: "Головна", icon: faHouse, link: "/main" },
  {
    name: "Календар",
    icon: faCalendar,
    link: "/main/literature/in-development",
  },
  {
    name: "Рейтинг",
    icon: faShieldCat,
    link: "/main/literature/in-development",
  },
  { name: "Магазин", icon: faStore, link: "/main/literature/in-development" },
  { name: "Профіль", icon: faUser, link: "/main/literature/in-development" },
];

export const navIcons: IconDefinition[] = [
  faInfo,
  faBook,
  faMuseum,
  faIdBadge,
  faClapperboard,
];

export const navLinks: string[] = [
  "/main",
  "/main/literature",
  "/main/museums",
  "/main/literature/in-development",
  "/main/literature/in-development",
];
