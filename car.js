const refs = {
  img: document.querySelector(".car"),
  right: document.querySelector(".right"),
  car1: document.querySelector(".car-1"),
  car2: document.querySelector(".car-2"),
  car3: document.querySelector(".car-3"),
  car4: document.querySelector(".car-4"),
  car5: document.querySelector(".car-5"),
  car6: document.querySelector(".car-6"),
  car7: document.querySelector(".car-7"),
};

refs.car1.addEventListener("click", onCar);
refs.car2.addEventListener("click", onCar2);
refs.car3.addEventListener("click", onCar3);
refs.car4.addEventListener("click", onCar4);
refs.car5.addEventListener("click", onCar5);
refs.car6.addEventListener("click", onCar6);
refs.car7.addEventListener("click", onCar7);

refs.right.addEventListener("click", onActiveButton);

function onCar() {
  refs.img.src = "images/car-1.png";
  //   refs.car1.style.backgroundColor = "yellow";
}

function onCar2() {
  refs.img.src = "images/car-2.png";
}
function onCar3() {
  refs.img.src = "images/car-3.png";
}

function onCar4() {
  refs.img.src = "images/car-4.png";
}

function onCar5() {
  refs.img.src = "images/car-5.png";
}

function onCar6() {
  refs.img.src = "images/car-6.png";
}

function onCar7() {
  refs.img.src = "images/car-7.png";
}

function onActiveButton(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const currentActive = document.querySelector(".active");
  console.log(currentActive);

  if (currentActive) {
    currentActive.classList.remove("active");
  }

  e.target.classList.add("active");
}
