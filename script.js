const object1 = document.querySelector('.object1');
const object2 = document.querySelector('.object2');

let posX1 = 0;
let posX2 = 0;

function moveObjects() {
  posX1 += 5;
  posX2 += 3;

  object1.style.transform = `translateX(${posX1}px)`;
  object2.style.transform = `translateX(${posX2}px)`;

  // Loop the animation
  if (posX1 > window.innerWidth) {
    posX1 = -50;
  }

  if (posX2 > window.innerWidth) {
    posX2 = -50;
  }

  requestAnimationFrame(moveObjects);
}

moveObjects();
moveObjects();
