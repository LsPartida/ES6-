//Antes
function newFunction(name, age, country) {
  var name = name || "Ls";
  var age = age || 28;
  var country = country || "México";
  console.log(name, age, country);
}
// Es6
function newFunction2(name = "Ls", age = 28, country = "México") {
  console.log(name, age, country);
}
newFunction();
newFunction2();
//Antes
let hello = "Hello";
let world = "World";
let phrase = hello + " " + world;
console.log(phrase);
//es6
let phrase2 = `${hello} ${world}`;
console.log(phrase2);
//Antes
let multiLineText = "Frase\ncon\nsalto\nde\nlinea";
//es6
let multiLineText2 = `Frase
con
salto
de
linea`;
//Antes
let person = { name: "Ls", age: 28, country: "MX" };
console.log(person.name, person.age);
//es6
let { name, age } = person;
console.log(name, age);

//es6
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];
let education = ["David", ...team1, ...team2];

let name = "Ls";
let age = 28;
//Antes
obj = { name: name, age: age };
//es6
obj2 = { name, age };
//Antes
const names = [
  { name: "Ls", age: 28 },
  { name: "Diego", age: 27 },
];
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//es6
let listOfNames2 = names.map((item) => {
  console.log(item.name);
});
const helloPromisse = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey");
    } else {
      reject("Valio vg no está viendo?");
    }
  });
};
helloPromisse()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2, 8));

import hello from "./hello";
hello();

function* helloWorld() {
  if (true) {
    yield "Hello";
  }
  if (true) {
    yield "World";
  }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);