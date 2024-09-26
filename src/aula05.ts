/* Onu types: Tipos diferentes na mesma variavel.*/

//Tipagem
let cursos5: string[] = ["Js", "TS", "Next", "React"];
let valores5 = [10, 20, 30, 40];

cursos5.push("Sass");
valores5.push(90);

console.log(cursos5);
console.log(valores5);

//Onu type
let onuteste5: (string | number)[] = [];
let onutesteTT: any;

onuteste5.push("TEste string");
onuteste5.push(100);

console.log(onuteste5);

onutesteTT = onuteste5;
onutesteTT.push(true);

console.log(onutesteTT);
