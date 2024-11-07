// скрол
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  // console.log(scrollDistance);

  document.querySelectorAll('.scroll').forEach((el, i) => {
    if (
      el.offsetTop - document.querySelector('.nav').clientHeight <=
      scrollDistance
    ) {
      document.querySelectorAll('.nav a').forEach(el => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      document
        .querySelectorAll('.nav li')
        [i].querySelector('a')
        .classList.add('active');
    }
  });
});

// const PROMPT_DELAY = 3000;
// const MAX_PROMPT = 3;
// let counter = 0;

// const i = setInterval(() => {
//   console.log('Привіт!');
//   counter += 1;
//   console.log(counter);
//   openModal();
// }, 2000);

// function openModal() {
//   if (counter === MAX_PROMPT) {
//     console.log('максимальное колчиество 3 таймер остановлен');
//     clearInterval(i);
//   }
// }
// const p = new Promise((resolve, reject) => {
// });

// p.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   },
// );
// console.log(p);

// const promise = new Promise((resolve, reject) => {
//   resolve(3);
//   reject();

//   return promise;
// });

// promise
//   .then(() => {
//     console.log('Успішно');
//   })
//   .catch(() => {
//     console.log('Неуспішно');
//   })
//   .finally(() => {
//     console.log('Виконається в будь-якому випадку');
//   });

// console.log(promise);

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(r => r.json())
  .then(pokemon => {
    console.log(pokemon);
  });
