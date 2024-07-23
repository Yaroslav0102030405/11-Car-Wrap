const refs = {
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

  linkAll: document.querySelector('.link'),

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
// })

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
    document.body.style.backgroundColor = 'gray';
    // refs.bmv1.style.opacity = "0";
    refs.div.style.display = 'none';
    refs.img.style.cursor = 'zoom-out';
  } else if (refs.img.classList.contains('active-car')) {
    refs.img.classList.remove('active-car');
    document.body.style.backgroundColor = 'white';
    // refs.bmv1.style.opacity = "1";
    refs.div.style.display = 'flex';
    refs.img.style.cursor = 'zoom-in';
  }
}

function onCar() {
  refs.img.src = 'images/car-1.png';
  refs.bmv1.src = 'images/violet1.png';
  refs.bmv2.src = 'images/violet-2.png';
  //   refs.car1.style.backgroundColor = "yellow";
}

function onCar2() {
  refs.img.src = 'images/car-2.png';
  refs.bmv1.src = 'images/green-1.png';
  refs.bmv2.src = 'images/green-2.png';
}
function onCar3() {
  refs.img.src = 'images/car-3.png';
  refs.bmv1.src = 'images/yellow-1.png';
  refs.bmv2.src = 'images/yellow-2.png';

  // refs.btn.style.backgroundColor = "gold";
  // refs.menu.style.boxShadow = "gold";
}

function onCar4() {
  refs.img.src = 'images/car-4.png';
  refs.bmv1.src = 'images/blue-1.png';
  refs.bmv2.src = 'images/blue-2.png';
}

function onCar5() {
  refs.img.src = 'images/car-5.png';
  refs.bmv1.src = 'images/green-1.png';
  refs.bmv2.src = 'images/green-2.png';
}

function onCar6() {
  refs.img.src = 'images/car-6.png';
  refs.bmv1.src = 'images/violet1.png';
  refs.bmv2.src = 'images/violet-2.png';
}

function onCar7() {
  refs.img.src = 'images/car-7.png';
  refs.bmv1.src = 'images/red-01.png';
  refs.bmv2.src = 'images/red-02.png';
}

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

refs.linkAll.addEventListener('mouseover', function () {
  this.style.color = 'red';
});

refs.linkAll.addEventListener('mouseout', function () {
  this.style.color = 'white';
});
