// const num = 10;
// const str = 'close';
// const bol = true;
// const n = null;
// const f = 'Добро пожаловать';

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bol);
// console.log(typeof n);
// console.log(typeof f);

// console.log(Number(num));

// let elementWidth = '20px';
// const result1 = Number.parseInt(elementWidth);
// console.log(result1);

// let elementHeight = '30.12px';
// const result2 = Number.parseFloat(elementHeight);
// console.log(result2);

// const salary = 1300.123456;
// const result3 = Number(salary.toFixed(4));
// console.log(result3);

// console.log(Math.random());

// const message = 'В этой строке 26 символов.';
// console.log(message.length);

// const firstName = 'Yaroslav';
// const lastName = 'Lukovetskyi';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// const quantity = 100;
// const orderMsg = `Вы заказали ${quantity} холодильников`;
// console.log(orderMsg);

// const brand = 'Samsung';
// const normalizedBrand = brand.toUpperCase();
// console.log(normalizedBrand);
// console.log(brand.slice(3).toUpperCase());
// console.log(brand[0]);

// const a = 'мороз';
// const b = 'аладин';
// const string = 'В нашей МОРОЗ есть аладин';
// console.log(string.includes(a.toUpperCase()));
// console.log(string.includes(b));

// console.log(5 && 6 && 'hello');
// console.log(5 || 6 || true);
// console.log(!true);

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   //   console.log(i);
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );

//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   totalSalary += salary;
// }

// console.log('totalSalary:', totalSalary);

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log('четное i', i);
//     continue;
//   }
//   total += i;
// }
// console.log(total);

// const friends = ['Mango', 'Anna', 'Wera'];
// console.log(friend.length - 1);
// console.log(friend[0]);
// console.log((friend[1] = 'ttt'));
// console.log(friend);

// for (const friend of friends) {
//   console.log(friend);
// }

// const cart = [1, 2, 3, 4, 5];
// let total = 0;

// for (const car of cart) {

//   if (car % 2 !== 0) {
//     console.log(car);
//     continue;
//   }
//   total += car;
// }
// console.log(total);

// const logins = ['One', 'Two', 'Free'];
// const loginToFind = 'Two';
// let message = '';

// for (const login of logins) {
//   console.log(login);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   } else {
//     message = `Пользователь ${loginToFind} не найден`;
//   }
// }

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь не найден`;

// console.log(message);

// const numbers = [7, 3, 4, 5, 6, 2, 1];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);

//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log(smallestNumber);

// const friends2 = ['Abc', 'Sce', 'Bcd'];
// const string = friends2.join(',');

// console.log(string);

// const title = 'Top 10 benefits of React framework';

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// const ar1 = [5, 10, 15];
// const ar2 = [20, 25, 30];
// const finishArs = ar1.concat(ar2);
// let total = 0;

// for (const finishAr of finishArs) {
//   total += finishAr;
// }
// console.log(total);

// const add = function (x, y) {
//   return x + y;
// };

// console.log(add(5, 5));

// const price = [1, 2, 3];

// const calculateTotalPrice = function (items) {
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log(calculateTotalPrice(price));
// console.log(calculateTotalPrice([10, 20, 30]));

// const logins = ['Alena', 'Bana', 'Trane'];

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;
// };

// console.log(findLogin(logins, 'Trane'));

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);
// console.log(playlist.name);

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

// const a = [1, 2, 3];

// a.push(4);
// console.log(a);

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   changeName(newName) {
//     console.log((this.name = newName));
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },
// };

// playlist.changeName('Новое имя');
// playlist.addTrack('трек-4');

// console.log(playlist);

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 7,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }
// console.log(totalFeedback);

const friends = [
  {
    name: 'Mango',
    online: false,
  },
  {
    name: 'Ajax',
    online: true,
  },
  {
    name: 'Poly',
    online: true,
  },
  {
    name: 'Kiwi',
    online: false,
  },
];

// friends[0].title = 555;

// console.table(friends);

// const findFriendByName = (allFriends, friendName) => {
//   for (const friend of allFriends) {
//     console.log(friend.name);

//     if (friend.name === friendName) {
//       return 'Нашли';
//     }
//   }

//   return 'Не нашли';
// };

// console.log(findFriendByName(friends, 'Poly'));

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// const getAllNames = function (allFriends) {
//   const friendsbyStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsbyStatus.online.push(friend);
//     } else {
//       friendsbyStatus.offline.push(friend);
//     }
//   }

//   return friendsbyStatus;
// };

// console.log(getAllNames(friends));

const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
console.log(numbers);

const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];

console.log(allTemps);
