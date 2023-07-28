export const tableData: tableDataProps = {
  topNumber: 4,
  easy: [
    "Ознайомтесь з будь-якою літературою",
    "Ознайомтесь з Павлом Тичиною",
    "Ознайомтесь з будь-яким музеєм",
    "Перегляньте 10 фотографій будь-яких музеїв",
  ],
  completedEasy: [],
  medium: [
    "Пройдіть будь-який тест по авторам",
    "Передивіться весь відеоматеріал",
    "Пройдіть 3 тести по будь-якій літературі",
  ],
  completedMedium: [],
  hard: [
    "Пройдіть всі тести по авторам",
    "Пройдіть всі тести по літературі",
    "Напишіть свою рецензію на будь-яку літературу",
  ],
  completedHard: [2],
};

interface tableDataProps {
  topNumber: number;
  easy: string[];
  completedEasy: number[];
  medium: string[];
  completedMedium: number[];
  hard: string[];
  completedHard: number[];
}
