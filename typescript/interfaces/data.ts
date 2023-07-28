export interface ITableData {
  topNumber: number;
  easy: string[];
  completedEasy: number[];
  medium: string[];
  completedMedium: number[];
  hard: string[];
  completedHard: number[];
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
