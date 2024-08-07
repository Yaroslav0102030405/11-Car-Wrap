const refs = {
  header: document.querySelector('.header'),
  section: document.querySelector('.section'),
  service: document.querySelector('.service'),
  works: document.querySelector('.works'),
  contact: document.querySelector('.contact'),

  img: document.querySelector('.car'),
  right: document.querySelector('.right'),
  car1: document.querySelector('.car-1'),
  car2: document.querySelector('.car-2'),
  car3: document.querySelector('.car-3'),
  car4: document.querySelector('.car-4'),
  car5: document.querySelector('.car-5'),
  car6: document.querySelector('.car-6'),
  car7: document.querySelector('.car-7'),

  bmv1: document.querySelector('.bmv-1'),
  bmv2: document.querySelector('.bmv-2'),

  div: document.querySelector('.div'),

  load: document.querySelector('.load'),
  loading: document.querySelectorAll('.loading'),

  ac1: document.querySelector('.ac1'),
  ac2: document.querySelector('.ac2'),
  ac3: document.querySelector('.ac3'),
  ac4: document.querySelector('.ac4'),
  ac5: document.querySelector('.ac5'),
  ac6: document.querySelector('.ac6'),
  ac7: document.querySelector('.ac7'),
  // prev: document.querySelector('.prev'),
  // next: document.querySelector('.next'),

  // linkAll: [...document.querySelectorAll('.link')].forEach(link =>
  //   console.log(link),
  // ),

  // linkAll: document.querySelector('.link'),

  // btn: document.querySelector('.btn'),
  // menu: document.querySelectorAll(".menu a"),
};

// //Получаем точку
// var point = document.getElementById("pointId");

// //Вешаем обработчик
// //срабатывает при заходе курсора на элемент
// point.addEventListener("mouseover",function() {
//    this.style.backgroundColor = "gray";
// })
// //срабатывает при уходе курсора с элемента
// point.addEventListener("mouseout",function() {
//    this.style.backgroundColor = "white";
// })\
const onActiveBackgroundColor1 =
  'linear-gradient(90deg,rgba(185, 90, 228, 1) 0%,rgba(247, 241, 249, 1) 100%)';

const onActiveBackgroundColor2 =
  'linear-gradient(90deg,rgba(131, 58, 180, 1) 0%,rgba(29, 253, 149, 1) 50%,rgba(252, 176, 69, 1) 100%)';

const onActiveBackgroundColor3 =
  'linear-gradient(90deg, rgba(240,237,12,1) 0%, rgba(237,81,245,1) 100%)';

const onActiveBackgroundColor4 =
  'linear-gradient(90deg,rgba(250, 222, 4, 1) 0%,rgba(10, 54, 245, 1) 100%)';

const onActiveBackgroundColor5 =
  'linear-gradient(90deg,rgba(4, 250, 61, 1) 0%,rgba(245, 10, 169, 1) 100%)';
const onActiveBackgroundColor6 =
  'linear-gradient(90deg, rgba(242,20,77,1) 0%, rgba(238,162,30,1) 100%)';
const onActiveBackgroundColor7 =
  'linear-gradient(90deg,rgba(150, 14, 212, 1) 0%,rgba(181, 245, 10, 1) 100%)';

refs.car1.addEventListener('click', onCar);
refs.car2.addEventListener('click', onCar2);
refs.car3.addEventListener('click', onCar3);
refs.car4.addEventListener('click', onCar4);
refs.car5.addEventListener('click', onCar5);
refs.car6.addEventListener('click', onCar6);
refs.car7.addEventListener('click', onCar7);

// refs.right.addEventListener('click', onActiveButton);

refs.img.addEventListener('click', onClickZoom);

refs.load.addEventListener('click', onLoading);

function onLoading() {
  refs.loading.forEach(loadin => loadin.classList.add('act'));
  // console.log(refs.loading.length - 1);

  if (refs.loading.length) {
    refs.load.style.display = 'none';
  }
}

function onClickZoom() {
  if (!refs.img.classList.contains('active-car')) {
    refs.img.classList.add('active-car');
    // document.body.style.backgroundColor = 'gray';
    // refs.bmv1.style.opacity = "0";
    refs.div.style.display = 'none';
    refs.img.style.cursor = 'zoom-out';
  } else if (refs.img.classList.contains('active-car')) {
    refs.img.classList.remove('active-car');
    // document.body.style.backgroundColor = 'white';
    // refs.bmv1.style.opacity = "1";
    refs.div.style.display = 'flex';
    refs.img.style.cursor = 'zoom-in';
  }
}

function onCar() {
  // refs.img.src = 'images/car-1.png';
  // refs.img.src = 'images/a/999-2.jpg';
  refs.bmv1.src = 'images/violet1.png';
  refs.bmv2.src = 'images/violet-2.png';
  // refs.ac1.classList.add('active-car');
  //   refs.car1.style.backgroundColor = "yellow";
  // onBackroundColor(onActiveBackgroundColor1);
  refs.ac1.classList.add('active-car');
  refs.ac2.classList.remove('active-car');
  refs.ac3.classList.remove('active-car');
  refs.ac4.classList.remove('active-car');
  refs.ac5.classList.remove('active-car');
  refs.ac6.classList.remove('active-car');
  refs.ac7.classList.remove('active-car');

  // if (!refs.ac1.classList.contains('active-car')) {
  //   refs.ac1.classList.add('active-car');
  //   refs.ac2.classList.remove('active-car');
  // }
}

function onCar2() {
  // refs.img.src = 'images/car-2.png';
  // refs.img.src = 'images/a/999-3.jpg';
  refs.bmv1.src = 'images/green-1.png';
  refs.bmv2.src = 'images/green-2.png';
  // refs.ac2.classList.add('active-car');
  // onBackroundColor(onActiveBackgroundColor2);
  // onBackroundColor(onActiveBackgroundColor2);
  refs.ac2.classList.add('active-car');
  refs.ac3.classList.remove('active-car');
  refs.ac4.classList.remove('active-car');
  refs.ac5.classList.remove('active-car');
  refs.ac6.classList.remove('active-car');
  refs.ac7.classList.remove('active-car');
}
function onCar3() {
  // refs.img.src = 'images/car-3.png';
  // refs.img.src = 'images/a/999-0.jpg';
  refs.bmv1.src = 'images/yellow-1.png';
  refs.bmv2.src = 'images/yellow-2.png';

  refs.ac3.classList.add('active-car');
  refs.ac4.classList.remove('active-car');
  refs.ac5.classList.remove('active-car');
  refs.ac6.classList.remove('active-car');
  refs.ac7.classList.remove('active-car');
  // refs.ac3.classList.remove('active-car');

  // refs.btn.style.backgroundColor = "gold";
  // refs.menu.style.boxShadow = "gold";
  // onBackroundColor(onActiveBackgroundColor3);
}

function onCar4() {
  // refs.img.src = 'images/car-4.png';
  // refs.img.src = 'images/a/999-4.jpg';
  refs.bmv1.src = 'images/blue-1.png';
  refs.bmv2.src = 'images/blue-2.png';
  // onBackroundColor(onActiveBackgroundColor4);

  refs.ac4.classList.add('active-car');
  refs.ac5.classList.remove('active-car');
  refs.ac6.classList.remove('active-car');
  refs.ac7.classList.remove('active-car');
  // refs.ac2.classList.remove('active-car');
  // refs.ac3.classList.remove('active-car');
  // refs.ac4.classList.remove('active-car');
}

function onCar5() {
  // refs.img.src = 'images/car-5.png';
  // refs.img.src = 'images/a/999-5.jpg';
  refs.bmv1.src = 'images/green-1.png';
  refs.bmv2.src = 'images/green-2.png';
  // onBackroundColor(onActiveBackgroundColor5);
  refs.ac5.classList.add('active-car');
  refs.ac6.classList.remove('active-car');
  refs.ac7.classList.remove('active-car');
}

function onCar6() {
  // refs.img.src = 'images/car-6.png';
  // refs.img.src = 'images/a/999-10.jpg';

  refs.bmv1.src = 'images/violet1.png';
  refs.bmv2.src = 'images/violet-2.png';
  // onBackroundColor(onActiveBackgroundColor7);
  refs.ac6.classList.add('active-car');
  refs.ac7.classList.remove('active-car');
}

function onCar7() {
  // refs.img.src = 'images/car-7.png';
  // refs.img.src = 'images/a/999-11.jpg';
  refs.bmv1.src = 'images/red-01.png';
  refs.bmv2.src = 'images/red-02.png';
  // onBackroundColor(onActiveBackgroundColor6);
  refs.ac7.classList.add('active-car');
  // refs.ac6.classList.remove('active-car');
}

function onBackroundColor(background) {
  refs.header.style.background = `${background}`;
  refs.section.style.background = `${background}`;
  refs.service.style.background = `${background}`;
  refs.contact.style.background = `${background}`;
  refs.works.style.background = `${background}`;
}

// function onBackroundColor(number) {
//   refs.header.classList.add(`active-header-${number}`);
//   refs.section.classList.add(`active-section-${number}`);
//   refs.service.classList.add(`active-service-${number}`);
//   // refs.works.classList.add(`active-work-${number}`);
//   refs.contact.classList.add(`active-contact-${number}`);
// }

// function onActiveButton(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActive = document.querySelector('.active');
//   console.log(currentActive);

//   if (currentActive) {
//     currentActive.classList.remove('active');
//   }

//   e.target.classList.add('active');
// }

// refs.linkAll.addEventListener('mouseover', function () {
//   this.style.color = 'red';
// });

// refs.linkAll.addEventListener('mouseout', function () {
//   this.style.color = 'white';
// });
