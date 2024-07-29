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

refs.right.addEventListener('click', onActiveButton);

refs.img.addEventListener('click', onClickZoom);

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
  refs.img.src = 'images/a/999-2.jpg';
  refs.bmv1.src = 'images/violet1.png';
  refs.bmv2.src = 'images/violet-2.png';
  //   refs.car1.style.backgroundColor = "yellow";
  // onBackroundColor(onActiveBackgroundColor1);
}

function onCar2() {
  // refs.img.src = 'images/car-2.png';
  refs.img.src = 'images/a/999-3.jpg';
  refs.bmv1.src = 'images/green-1.png';
  refs.bmv2.src = 'images/green-2.png';
  // onBackroundColor(onActiveBackgroundColor2);
  // onBackroundColor(onActiveBackgroundColor2);
}
function onCar3() {
  // refs.img.src = 'images/car-3.png';
  refs.img.src = 'images/a/999-4.jpg';
  refs.bmv1.src = 'images/yellow-1.png';
  refs.bmv2.src = 'images/yellow-2.png';

  // refs.btn.style.backgroundColor = "gold";
  // refs.menu.style.boxShadow = "gold";
  // onBackroundColor(onActiveBackgroundColor3);
}

function onCar4() {
  // refs.img.src = 'images/car-4.png';
  refs.img.src = 'images/a/999-5.jpg';
  refs.bmv1.src = 'images/blue-1.png';
  refs.bmv2.src = 'images/blue-2.png';
  // onBackroundColor(onActiveBackgroundColor4);
}

function onCar5() {
  // refs.img.src = 'images/car-5.png';
  refs.img.src = 'images/a/999-6.jpg';
  refs.bmv1.src = 'images/green-1.png';
  refs.bmv2.src = 'images/green-2.png';
  // onBackroundColor(onActiveBackgroundColor5);
}

function onCar6() {
  // refs.img.src = 'images/car-6.png';
  refs.img.src = 'images/a/999-8.jpg';

  refs.bmv1.src = 'images/violet1.png';
  refs.bmv2.src = 'images/violet-2.png';
  onBackroundColor(onActiveBackgroundColor7);
}

function onCar7() {
  // refs.img.src = 'images/car-7.png';
  refs.img.src = 'images/a/999-7.jpg';
  refs.bmv1.src = 'images/red-01.png';
  refs.bmv2.src = 'images/red-02.png';
  // onBackroundColor(onActiveBackgroundColor6);
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

function onActiveButton(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActive = document.querySelector('.active');
  console.log(currentActive);

  if (currentActive) {
    currentActive.classList.remove('active');
  }

  e.target.classList.add('active');
}

// refs.linkAll.addEventListener('mouseover', function () {
//   this.style.color = 'red';
// });

// refs.linkAll.addEventListener('mouseout', function () {
//   this.style.color = 'white';
// });
