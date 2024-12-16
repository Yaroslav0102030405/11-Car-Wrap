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

// Рекурсія - коли функція викликає саму себе в середині

// ❗️ прототипне успадкування __proto__ - це силка на головне сховище всіх властивостей та методів
// це робиться автоматично при створені об'екту масиву та функції
// також ми можемо це робити вручну (прив'язувати один протоип до іншого)
// набор об'ектів які зв'язані ципочкой силками друг на друга
// цепочка прототіпів (в свойстві прото лежить силка на інший об'ект)
// цепочка створюється з кінця
const objC = {
  z: 5,
};

const objB = Object.create(objC);
objB.y = 2;

const objA1 = Object.create(objB);
objA1.x = 1;
console.log(objA1.y);
console.log(objC.z);
// перевірити щи власне свойство
// прототип js - це механізм, який дозволяє об'єктам (завдяки свойству __proto__)
// успадковувати властивості та методи від інших об'єктів
// властивість прото - це силка на головне сховище всіх властивостей та методів
// що таке силка на іншій об'ект і чк воно все з'єднується

// Основи ООО (об'єктно орієнтоване програмування): класс, екземпляр (об'ект), інтерфейс
// класс -це креслення на базі якого будуть створюватися інші машини
// екземплят - це одна машина яка була зроблена по кресленю (шаблону) і у низх однаковий набор характеристик но значення можуть бути інакші
// машина идинакова але різні можуть бути по кольору
// інтерейс - це набір доступних властивостей і методів для роботи з цимя властивостями
// оператором new ми свторюємо новий екземпляр
// якщо ми викликаємо функцію через new то в пам'яті створюєтся пустий об'ект

// Siema - https://pawelgrzybek.github.io/siema/
// це функція
class Car1 {}
// об'ект в якому в властивості прототайп лежить силка на клас
const carInstance = new Car1();

// клас - це многофункційний шаблон для створення об'ектів
// він дозволяє один раз задати правила по яким будуть працюватися всі обьекти які були
// створені за допомогою цього класу
// класу допомогають структиріровати код і реалізовувати гібкіе связи в коді
// синтаксис класу
// - клас - це шаблон для створення об'ектів
class Student {
  // обов'язково указути метод конструктор (он інцілізует об'ект)
  // тут ми добавляємо свойства які будуть на об'екті (ен динамічні)
  planet = 'Наша';
  constructor(name, age) {
    // тут і тілі ми записуємо передані значення в властивості об'екту
    // thsi силається на контектс виполнения екземпляра конкретного об'екта
    this.name = name;
    this.age = age;
  }
}

// створення об'екту по шаблону класа потнібно написати оператор new
// це екземпляри класу Student
// тут ми додаємо дани які приходять в момент створення об'екту
const firstStudent = new Student('Вася', 18);
const secondStudent = new Student('Петя', 20);
console.log(firstStudent);
console.log(secondStudent);

// Методи масиву
const numbers1 = [1, 2, 3, 4, 5];

// forEach = по елементно перебирає масив нічого не повертає і заміняє класичний for
numbers1.forEach(function (element) {
  return element;
});

console.log(numbers1);

// map - перебирає массив повертає новий масив такій же довжини
// використовується для оновлення масив де будє новій масив з оновленими даними або одним оноволеним даним
// повернути новий масив з одним пользователем оновленим
// витігнути із колекції в масив однакові значення наприклад всіх імен картинок хобі
// як працює фільтр потрібно указати по якому условію потрібно фільтровати цей масив
// якщо нічого не підійшло по условію то фільтр поверне пустий масив
const doubleNumbers = numbers1.map(number => {
  return number * 2;
});
console.log(doubleNumbers);

const playerIdToUpdate = 3;

const players = [
  { id: 1, name: 'Mango', timePlayed: 100, online: true },
  { id: 2, name: 'Poly', timePlayed: 350, online: false },
  { id: 3, name: 'Ajax', timePlayed: 200, online: true },
  { id: 4, name: 'Kiwiw', timePlayed: 400, online: false },
];

const playerNames = players.map(player => {
  return player.name;
});
console.log(playerNames);

const playerId = players.map(player => player.id);
console.log(playerId);

const playerTimePlayed = players.map(player => player.timePlayed);
console.log(playerTimePlayed);

const updatePlayers = players.map(player => {
  return { ...player, timePlayed: player.timePlayed * 2 };
});
console.log(updatePlayers);

const updatePlayersId = players.map(player => {
  if (playerIdToUpdate === player.id) {
    return { ...player, timePlayed: player.timePlayed + 100 };
  }
  return player;
});
console.log(updatePlayersId);

// filter - перебирає масив повертає новий масив
// доавляє в повертайщий масив елементи які відповідають вимозі колбек функції
// використовується для пошуку під коллекції в колекції
const filteredNumbers = numbers.filter(number => {
  return number > 5;
});
console.log(filteredNumbers);

const filteredPlayers = players.filter(player => player.name === 'Mango');
console.log(filteredPlayers);

const filteredOffline = players.filter(player => !player.online);
console.log(filteredOffline);

const timePlayedFiltered = players.filter(player => player.timePlayed > 200);
console.log(timePlayedFiltered);

// метод find - по єлементно перебирає масив і повертає первий найдений елемент який задовольніє условію или андефайн
// шукає унікальний елемент
const findNumbers = numbers.find(number => number > 5);
console.log(findNumbers);

const player3 = 3;

const playerIdToFind = players.find(player => player.id === player3);
console.log(playerIdToFind);

const findPlayerById = (allPlayer, playerId) => {
  return allPlayer.find(player => player.id === playerId);
};

console.log(findPlayerById(players, 4));

// метод every - по елементно перебирають масив повертає true якщо всі елементи задовольняють условію
const isAllOnline = players.every(player => player.online);
console.log(isAllOnline);

// метод some - по елементно перебирає масив та повертає true коли хоча би один елемент задоволняє условію
const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline', isAnyOnline);

// метод reduce - по елементно перебирає масив повертає все що завгодно
// це шверцарский нож для роботи з колекією

// задача підрахувати загальну суму всіх чисел
const num = [10, 20, 30, 40, 50];

const totals = num.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log(totals);

// задача
const salary2 = {
  mango: 2,
  poly: 3,
  ajax: 4,
};

const totalSalary = Object.values(salary2).reduce((total, value) => {
  return total + value;
}, 0);
console.log(totalSalary);

// робота с масивом
const totalTimePlayers = players.reduce((total, player) => {
  return total + player.timePlayed;
}, 0);
console.log(totalTimePlayers);

// рахуємо загальну суму товарів в корзині
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmout = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
console.log(totalAmout);

// Збираємо всі теги
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 5, tags: ['html', 'js'] },
  { id: '002', likes: 5, tags: ['js', 'css'] },
  { id: '003', likes: 5, tags: ['css', 'nodejs'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// Статистика тегів
const tagsStatus = allTags.reduce((acc, tag) => {
  return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
}, {});
console.log(tagsStatus);

// метод sort - сортирує та змінює оригінальний масив
// по умолчанию сортирує по возрастанію
// приводить елементи к строке
const numbers3 = [11, 12, 13, 14, 15];
const descSortedNumbers3 = [...numbers3].sort((a, b) => b - a);
console.log(descSortedNumbers3);
const ascSortedNumbers3 = [...numbers3].sort((a, b) => a - b);
console.log(ascSortedNumbers3);

// Кастомна сортировка сложних типів
const sortedByBestPlayers = [...players].sort(
  (a, b) => b.timePlayed - a.timePlayed,
);
console.log(sortedByBestPlayers);

// сортирувати по першій букві
const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }
  return -1;
});
console.log(byName);

// цупочка викликів
const numbers4 = [1, 2, 3, 4, 5];

const sorted = numbers4
  .filter(number => number > 2)
  .map(number => number * 3)
  .sort((a, b) => a - b);
console.log(sorted);

// максимум буде 2-3 методи в ципочці
const players2 = [
  { id: '1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: '1', tag: 'Poly', isOnline: true, rank: 200 },
  { id: '1', tag: 'Kiwi', isOnline: true, rank: 400 },
  { id: '1', tag: 'Ajax', isOnline: true, rank: 600 },
];

const onlineAndSorted = players2
  .filter(player => player.isOnline)
  .sort((a, b) => a.rank - b.rank);
console.log(onlineAndSorted);
