// console.log("hello");
// console.log("world");

const Basket = [];
const Game = [];
for (let i = 1; i <= 75; i++) {
  if (i <= 15) {
    Basket.push(`B${i}`);
  } else if (i <= 30) {
    Basket.push(`I${i}`);
  } else if (i <= 45) {
    Basket.push(`N${i}`);
  } else if (i <= 60) {
    Basket.push(`G${i}`);
  } else if (i <= 75) {
    Basket.push(`O${i}`);
  }
}

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
console.log(`Basket: ${Basket}`);
shuffle(Basket);
// debugger;

for (let i = 1; i <= Basket.length; i++) {
  // debugger;
  // console.log(Basket[i]);
  Game.push(Basket[i]);
}

console.log(`Game: ${Game}`);
console.log(`Game length: ${Game.length}`);
