const friends = ['Mango', 'Kiwi', 'Poly'];
const numbers = [1, 2, 3, 4, 5, 6, 7];
let total = 0;

// for (let i = 0; i <= friends.length - 1; i += 1) {
//   console.log(friends[i]);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

// let total = 0;
// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }
// console.log(total);
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }
// console.log(total);
const logins = ['Aaa', 'Bbb', 'Ccc'];
const loginToFind = 'Bbb';
// let message = '';

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Нашли ${loginToFind}`;
//     break;
//   }
//   message = `Не нашли ${loginToFind}`;
// }
const message = logins.includes(loginToFind)
  ? `Нашли ${loginToFind}`
  : (message = `Не нашли ${loginToFind}`);
console.log(message);

let smallNumbers = numbers[0];

for (const number of numbers) {
  if (number > smallNumbers) {
    smallNumbers = number;
  }
}
console.log(smallNumbers);

let str = '';
// for (const friend of friends) {
//   str += friend + ',';
// }
// str = str.slice(0, str.length - 1);
str = friends.join(',');

console.log(str);

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
  //   if (letter === letter.toLowerCase()) {
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     invertedString += letter.toLowerCase();
  //   }

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log(invertedString);

const title = 'Top 10 React framework';
const normalizedTitle = title.toLowerCase().split(' ').join('-');
console.log(normalizedTitle);

const array1 = [1, 2, 3, 4, 9];
const array2 = [5, 6, 7];
let total1 = 0;

const allArrays = [...array1, ...array2];
for (const allArray of allArrays) {
  total1 += allArray;
}
console.log(total1);

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

const cardRemove = 'Карточка-3';

// const index = cards.indexOf(cardRemove);
// cards.splice(index, 1);
// console.log(index);
// console.log(cards);

cards.splice(4, 1, 333);
console.log(cards);

// методы
// slice() - копія массиву
// join() - об'єднує всі елементи масиву в строку через указаний розділитель
// splite() - розбриває строку на елементи масиву
// indexOf() - повертає індекс перший найденний елемент
// splice() - змінює вміст масиву шляхом видалення або заміни існуючих елементів та/або додавання нових елементів

// Функція - функція програма призначена для виконання конкретного завдання та перевикористання коду і оптимізація
// називати функцію треба - що вона робить ?

// function expression - функція записана в зміну - звичайне оголошення змінної, значення якої буде функція
// const getRectArea = function (width, height) {
//     return width * height;
//   };

//   console.log(getRectArea(3, 4));

// function declaration -
// function calcRectArea(width, height) {
//     return width * height;
//   }

//   console.log(calcRectArea(5, 6));
// Що потрбіно знати про функцію
// 1 - Об'явити функцію
// 2 - передати аргументи (це значення для параметрів під час її виклику)
// 3 - аргументи запишуться в параметри (локальні зміни)
// 4 поставити return щоб вернути результат якогось виразу во зовнішній код
// 5 визвати функцію
// const addNumber = function (a, b) {
//   return a + b;
// };
// console.log(addNumber(5, 5));
const cart2 = [1, 2, 3, 4, 5, 6];

const add = function (items) {
  let total = 0;

  for (const item of items) {
    total += item;
  }
  return total;
};
console.log(add(cart2));

const names = ['Mango', 'Kiwi'];

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(names);
// ...rest - залишок
// rest бере несколько аргументов і збирає їх в массив
const fn = function (...args) {
  //   console.log(args);

  let total = 0;

  for (const arg of args) {
    total += arg;
  }
  return total;
};

console.log(fn(1, 2, 3));
console.log(fn(4, 5));
