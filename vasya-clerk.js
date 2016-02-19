// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
// Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

"use strict";

function tickets(peopleInLine){

  let canSell = 'YES';
  let twentyfives = 0;
  let fifties = 0;

  peopleInLine.forEach((note) => {
    switch (note) {
      case 25:
        twentyfives++;
        break;
      case 50:
        fifties++;
        twentyfives--;
        break;
      case 100:
        if (fifties > 0) {
          fifties--;
          twentyfives--;
        } else {
          twentyfives = twentyfives - 3;
        }
        break;
    }
    if (twentyfives < 0 || fifties < 0) {
      return canSell = 'NO';
    }
  });

  return canSell;
  
}

console.log(tickets([25, 25, 50, 50]), "YES");
console.log(tickets([25, 100]), "NO");

