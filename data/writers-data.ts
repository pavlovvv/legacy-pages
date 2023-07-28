import banner1 from "../public/images/literature/sosyura/banner.png";
import work1 from "../public/images/literature/sosyura/work1.png";
import work2 from "../public/images/literature/sosyura/work2.png";
import work3 from "../public/images/literature/sosyura/work3.png";
import banner2 from "../public/images/literature/tychyna/banner.png";
import work21 from "../public/images/literature/tychyna/work1.png";
import work22 from "../public/images/literature/tychyna/work2.png";
import { IWritersData } from "../typescript/interfaces/data";

export const writers: IWritersData[] = [
  {
    name: "Володимир Сосюсра",
    avatar: banner1,
    works: [
      {
        name: "Поема «Червона зима»",
        img: work1,
        year: 1922,
        genre: "лірична поема",
        links: {
          docx: "https://www.ukrlib.com.ua/books/getfile.php?tid=303&type=3",
          pdf: "https://www.ukrlib.com.ua/books/getfile.php?tid=303&type=1",
          rtf: "https://www.ukrlib.com.ua/books/getfile.php?tid=303&type=4",
          epub: "https://www.ukrlib.com.ua/books/getfile.php?tid=303&type=2",
          html: "https://www.ukrlib.com.ua/books/getfile.php?tid=303&type=6",
        },
      },

      {
        name: "Вірш «Сад»",
        img: work2,
        year: 1928,
        genre: "філософська лірика",
        links: {
          docx: "https://www.ukrlib.com.ua/books/getfile.php?tid=3687&type=3",
          pdf: "https://www.ukrlib.com.ua/books/getfile.php?tid=3687&type=1",
          rtf: "https://www.ukrlib.com.ua/books/getfile.php?tid=3687&type=4",
          epub: "https://www.ukrlib.com.ua/books/getfile.php?tid=3687&type=2",
          html: "https://www.ukrlib.com.ua/books/getfile.php?tid=3687&type=6",
        },
      },

      {
        name: "Вірш «Васильки»",
        img: work3,
        year: 1939,
        genre: "інтимна лірика",
        links: {
          docx: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=3",
          pdf: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=1",
          rtf: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=4",
          epub: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=2",
          html: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=6",
        },
      },
    ],
  },

  {
    name: "Павло Тичина",
    avatar: banner2,
    works: [
      {
        name: "Збірка «Плуг»",
        img: work21,
        year: 1920,
        genre: "поезія",
        links: {
          docx: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=3",
          pdf: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=1",
          rtf: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=4",
          epub: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=2",
          html: "https://www.ukrlib.com.ua/books/getfile.php?tid=287&type=6",
        },
      },

      {
        name: "Збірка «Сонячні кларнети»",
        img: work22,
        year: 1918,
        genre: "філософська лірика",
        links: {
          docx: "https://www.ukrlib.com.ua/books/getfile.php?tid=427&type=3",
          pdf: "https://www.ukrlib.com.ua/books/getfile.php?tid=427&type=1",
          rtf: "https://www.ukrlib.com.ua/books/getfile.php?tid=427&type=4",
          epub: "https://www.ukrlib.com.ua/books/getfile.php?tid=427&type=2",
          html: "https://www.ukrlib.com.ua/books/getfile.php?tid=427&type=6",
        },
      },
    ],
  },
];
