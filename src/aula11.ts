/* Type Assertion: fazer afirmação de tipos */
let nvalor11: number;
let svalor11: string;
let uvalor11: unknown;

uvalor11 = 10;
nvalor11 = <number>uvalor11; // se nao colocar Type Assertion <> vai dar erro porque o tipo unknown nao vai dexar mudar para number

console.log(typeof uvalor11);
console.log(uvalor11);

console.log(typeof nvalor11);
console.log(nvalor11);

svalor11 = <string>uvalor11; // tem que fazer Type Assertion <> para poder modificar o tipo
console.log(typeof svalor11);
console.log(svalor11);

/* Typecast: converter um tipo para outro */
let nvalor1111: number;
let svalor1111: string;
let uvalor1111: unknown;

svalor1111 = "20";
nvalor1111 = Number.parseFloat(svalor1111); // transforma string em numerico
console.log(nvalor1111);

svalor1111 = nvalor1111.toString(); // transforma number em string
console.log(svalor1111);
