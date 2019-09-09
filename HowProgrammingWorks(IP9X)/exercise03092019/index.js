'use strict';

/*Identifiers*/

const name = 'Vladislav';
const yearOfBorn = 1988;
const welcome = (name) => console.log(`Hello ${name}`);

welcome('Vladyslav');
welcome(name);
welcome(yearOfBorn);

/*Loop*/
for (let i = 15; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i)
      ;
    }
  }
};

range(15, 30);

/*Function*/

const average = (a, b) => (a + b) / 2;
console.log(average(2, 4));

const square = x => x * x;
console.log(square(4));

const cube = x => x * x * x;
console.log(2);

