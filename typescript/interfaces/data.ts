export interface ITableData {
  topNumber: number;
  easy: string[];
  medium: string[];
  hard: string[];
}

import { StaticImageData } from "next/image";

export interface IWritersData {
  name: string;
  avatar: StaticImageData;
  works: IWorkData[];
}

export interface IWorkData {
  name: string;
  img: StaticImageData;
  year: number;
  genre: string;
  links: {
    docx: string;
    pdf: string;
    rtf: string;
    epub: string;
    html: string;
  };
}

export interface IUserState {
  isPending: boolean;
  isLoaded: boolean;
  _id: string;
  email: string;
  userId: number;
  coins: number;
  level: number;
  total: number;
  totalCompleted: number;
  missions: {
    easy: number[];
    medium: number[];
    hard: number[];
  };
  isSnackbarOpened: boolean;
  snackbarMessage: string;
}

export interface IUserGetState {
  user: IUserState;
}
