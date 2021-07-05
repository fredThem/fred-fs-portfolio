---
title: Absolunet Test
---

# Test Front End [#](https://docs.google.com/document/d/1mURG0b29iJtbO4kfVlAEnshyOFawCPOZqvI9ODrwPwU/)

Entrevue v2.0.2

## 8. Écrire un script qui retourne au hasard une après l’autre toutes les billes d’un jeu de bingo (B1 à B15, I16 à I30, N31 à N45, G46 à G60, O61 à O75)
[Langage: Javascript ECMAScript 6+]


```javascript
const Basket = []; // define the basket (before bingo starts)
const Game = []; // define the resulting game

for (let ballNumber = 1; ballNumber <= 75; ballNumber++) {
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
for (let i = 1; i <= Basket.length; i++) {
  Game.push(Basket[i]);
}
console.log(`Game: ${Game}, do we have a bingo ?`);
// console.log(`Game length: ${Game.length} balls`); // 75

```
