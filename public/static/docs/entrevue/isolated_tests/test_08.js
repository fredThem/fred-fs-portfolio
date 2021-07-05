const Basket = []; // define the basket (before bingo starts)
const Game = []; // define the resulting game
//
for (let ballNumber = 1; ballNumber <= 75; ballNumber++) {
  //
  if (ballNumber <= 15) {
    Basket.push(`B${ballNumber}`);
  } else if (ballNumber <= 30) {
    Basket.push(`I${ballNumber}`);
  } else if (ballNumber <= 45) {
    Basket.push(`N${ballNumber}`);
  } else if (ballNumber <= 60) {
    Basket.push(`G${ballNumber}`);
  } else if (ballNumber <= 75) {
    Basket.push(`O${ballNumber}`);
  }
}
// shuffle the basket
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
