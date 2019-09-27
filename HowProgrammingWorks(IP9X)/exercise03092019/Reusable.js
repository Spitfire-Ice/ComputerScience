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
// console.log(average(2, 4));
const square = x => x * x;
// console.log(square(4));
const cube = x => x * x * x;
// console.log(2);
for (let i = 2; i < 3; i++) {
  const firstNum = square(i);
  const secondNum = cube(i);

  console.log(average(firstNum, secondNum));
}

/*Object*/

const object1 = {
  name: '',
};
const object2 = {
  name: '',
};

object1.name = 'John';
object2.name = 'Nora';

// console.log(object1);
// console.log(object2);

const createUser = (name, city) => ({ name, city });

console.log(createUser('Marcus Aurelius', 'Roma'));

/*Array*/

const phoneBook = [{ name: 'Marcus Aurelius', phone: '+380445554433' }];

const findPhoneByName = name => {
  const result = phoneBook.find((elem) => elem.name === name);
  return result.phone;
};

console.log(findPhoneByName('Marcus Aurelius'));

/*Hash*/

const hash = {
  name: 4549590303953,
};

const findPhoneByName2 = (name) => hash[name];

console.log(findPhoneByName2('name'));

