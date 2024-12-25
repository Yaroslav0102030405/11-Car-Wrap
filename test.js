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

// Мі используем обьект чтобы групировать характеристики одной сущности
const playlist = {
  name: 'Мой плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

// доступ до свойства
console.log(playlist.name);
console.log(playlist.rating);
console.log(playlist.tracks);
console.log(playlist.trackCount);

// Добавить свойство или перезаписать
// якщо є таке свойство то перезапиешться значення
// якщо не має такого свойства то створиться нове
console.log((playlist.add = 10));

const propertyName = 'tracks';
console.log(playlist[propertyName]);
console.log(playlist);

// коротка запись свойств
const userName = 'Mango';
const email = 'mango@gmail.com';

const signupData = {
  userName,
  email,
};

console.log(signupData);

// вычесляэмые свойства
const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};
console.log(colorPickerData);

// Методи об'єкту та this при обращение до свойства в методах
const playlist2 = {
  name: 'Мой плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  changeName(newName) {
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

playlist2.changeName('Новое имя');
playlist2.addTrack('трек-4');
playlist2.updateRating(4);

console.log(playlist2);

// перебор обьектов через Object.keys/values.intries
const feedback = {
  good: 5,
  neutral: 7,
  bad: 3,
};

const keys = Object.keys(feedback);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);
}

const values = Object.values(feedback);
let total2 = 0;

for (const value of values) {
  console.log(value);
  total += value;
}

console.log(total2);

// Массив обьектов
const friends2 = [
  { name: 'Mango', online: true },
  { name: 'Kiwi', online: false },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: true },
];

console.log(friends2);

const findFriendByName = function (allFriends, name) {
  for (const allFriend of allFriends) {
    if (allFriend.name === name) {
      return 'Нашли';
    }
  }
  return 'Не нашли';
};

console.log(findFriendByName(friends2, 'Poly'));

const getAllNames = function (allFriends) {
  const names = [];
  for (const allFriend of allFriends) {
    names.push(allFriend.name);
  }
  return names;
};

console.log(getAllNames(friends2));

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) onlineFriends.push(friend);
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends2));

const getFriendsByOnlineStatus = function (allFriends) {
  const friendsbyStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsbyStatus.online.push(friend);
    } else {
      friendsbyStatus.offline.push(friend);
    }
  }

  return friendsbyStatus;
};

console.log(getFriendsByOnlineStatus(friends2));

const a = {
  b: 1,
  с: 2,
  g: 3,
};

console.log(Object.keys(a).length);

// оператор rest
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeektemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeektemps];
console.log(allTemps);

// распыление обьектов
const a1 = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
const c = {
  name: 'Mango',
  ...a1,
  ...b,
};

console.log(c);

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  heideSidebar: false,
};

const usertSettings = {
  showNotifications: false,
  heideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...usertSettings,
};

console.log(finalSettings);

// операция деструктуризация обьекта
// создает лоальные переменные
const playlist3 = {
  name: 'Мой плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

const { name, rating, tracks, trackCount } = playlist3;

// this - знаходиться внутрі функції
// де  і як була обьявлена функція не важливо
// контекст определяеться в момент визова функції
// значення в this записується під час виклику функції

// функція як метод об'екту
const user1 = {
  tag: 'Mango',
  showTag() {
    // значення цього this ніхто не знає...
    console.log(this);
  },
};

// значення писваюється при виклику
// виклик в контексте об'єкту
// якщо з ліва від функції аббо методи стоїть об'єкт який її викликає то this будет силка на йей об'єкт
// якщо об'ект викликає функцію то силка на юзера записується в this
// this силається на об'ект який викликає цю функцію
user1.showTag();

// виклик ункції без об'єкта
//  - в строгому режимі = undefined
// - не встрогому режимі = window
const foo = function () {
  console.log(this);
};

foo();

// приклда 2
// об'явили функцію
const showTag = function () {
  console.log(this);
  console.log(this.tag);
};

// об'явили об'ект
const user = {
  tag: 'Mango',
};

// записали в об'ект функцію
user.showUserTag = showTag;

// записали занчення в this
user.showUserTag();

// call and apply
// метод call визиває функцію принудітельно в контектсе якогось об'єкту
const showThis = function (...args) {
  console.log(this);
};

const objA = {
  a: 5,
  b: 7,
};

// вкликає функцію що this силался на об'єкт objA і це тільки на один визов (не прив'язка контексту)
// передаєте аргументи як незалежний набір
showThis.call(objA, 1, 2, 3);
// передаєте як масив
showThis.apply(objA, [1, 2, 3]);

// приклад
const changeColor = function (color) {
  console.log(this);
  this.color = color;
};

const hat = {
  color: 'black',
};

changeColor.call(hat, 'orange');
console.log(hat);

// приклад
const sweater = {
  color: 'green',
};

changeColor.call(sweater, 'blue');
console.log(sweater);

// метод bind створює копію функції назавжди з прив'язаним контекстом
// bind не викликає цю функцію зараз як це робить call apply яку можна викликати потім
const changeHatColor = changeColor.bind(hat);
changeHatColor('red');
console.log(hat);

const changeSweaterColor = changeColor.bind(sweater);
changeSweaterColor('yellow');
console.log(sweater);

// стрілочні функції
// зручно використовувати як колек функції
// ✔️ стрілочна функція це завжди функціональний вираз
// ✔️ у стрілки не має свого this і не має arguments
const add2 = (a, b) => {
  return a + b;
};

console.log(add2(5, 5));

// неявний возврат
const add3 = (a, b) => a - b;
console.log(add3(10, 4));

//  this определяється в момент об'явленія там де об'явив такій контекст вона запомніла на завжди
const showThis2 = () => {
  console.log(this);
};

showThis2(); // window

const user2 = { name: 'Mango' };
user2.showContext = showThis2;

user2.showContext(); // window

// ⚠️ стрілки не можуть бути методами об'екту

// Конструкція try...catch
// використовується при асинхроному коді запиту щоб не впав скрипт (програма сайт) і обробити помилкі
// використовуэться в випадка коли ви парсите джейсон і коли ви читаєте з локалсторідж
const validJSON = '{ "name": "Mango", "age": 20 }';
const invalidJSON = '{ бекенд повернув таке чудо}';

try {
  console.log(JSON.parse(validJSON));
} catch (error) {
  console.log('Помилка');
}

try {
  console.log(JSON.parse(invalidJSON));
} catch {
  console.log('Помилка');
}

// асинхроні функції async/await
// async/await це синтаксичний сахар надростайка яка робить розробку удобною
// async/await це синтаксичний сахар для роботи з промісами (з асинхроним кодом)
// класи це синтаксичний сахар для фукнціями констуктори
// Promis.resolve() - мнговено виполняється проміс,
// Promis.reject() - проміс якій не виполняеться,
// Promis.all() - запроси йдуть паралельно (підходить коли треба зробити несколько http запитів на сервер)
// async - це робить функцію асинхроною (це значить що ця функція повертає проміс)
// асинхрона функція завжди повертає проміс
// async/await - позволяє писати код який буде виконуватися асинхрноно но буде виглядити сінхроно
// і не потрібно використовувати then/error
// що стоъть с права от awwait повертає проміс

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝',
    apple: '🍎',
  };
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500),
  );
}

async function makeSmoothie() {
  try {
    // const apple = await getFruit('apple');
    // // console.log(apple);
    // const kiwi = await getFruit('kiwi');
    // console.log(kiwi);
    // console.time('makeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const strawberry = getFruit('strawberry');

    // зробити запроси паралельними
    const fruits = await Promise.all([apple, kiwi, strawberry]);
    console.log(fruits);
    // console.timeEnd('makeSmoothie');

    return fruits;
  } catch (error) {
    console.log('Помилка', error);
  }
}

makeSmoothie().then(fruits => console.log(fruits));

// практика
const BASE_URL = 'http://localhost:3000';

// const newBook = {
//   title: 'Sass',
//   views: 100,
// };

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const responce = await fetch(`${BASE_URL}/books`, options);
  const newBook = await responce.json();

  return newBook;
}

async function addBookUpdateUI() {
  try {
    const book = await addBook({});
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

addBookUpdateUI();

// якщо хочете визвати async/awit функцію то до нею обов'язково добавляете this catch
// async/awit нельзя використовувати вне функції
// addBook().then().catch();

const BASE_URL2 = 'http://localhost:3000/books';

async function fetchBooks() {
  const responce = await fetch(`${BASE_URL2}`);
  const newBook = await responce.json();

  return newBook;
}

async function addRenderBook() {
  try {
    const book = await fetchBooks({});
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}
// fetchBooks()
//   .then(responce => console.log(responce))
//   .catch(error => console.log(error));

async function fetchBooksId(id) {
  const responce = await fetch(`${BASE_URL}/${id}`);
  const bookId = await responce.json();

  return bookId;
}

async function renderBookId() {
  try {
    const bookId = await fetchBooksId(2);
  } catch (error) {
    console.log(error);
  }
}

// fetchBooksId(2)
//   .then(responce => console.log(responce))
//   .catch(error => console.log(error));
// fetchBooksId(3)
//   .then(responce => console.log(responce))
//   .catch(error => console.log(error));
