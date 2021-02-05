const data = { frontend: "LS", backend: "Enrique", design: "Partida" };
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = { frontend: "LS", backend: "Enrique", design: "Partida" };
const values = Object.values(data);
console.log(values);

const stringHello = "Hello";
console.log(stringHello.padStart(7, "HI"));
console.log(stringHello.padEnd(12, "--------"));
