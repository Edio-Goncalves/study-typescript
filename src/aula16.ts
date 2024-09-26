/* P.O.O. */

// A classe é um recipiente, um universo. Vamos sempre manipular os objetos.
class Boxes {} // classe

const box1 = new Boxes(); //objeto instanciado 01
const box2 = new Boxes(); //objeto instanciado 02
const box3 = new Boxes(); //objeto instanciado 03

//
class Computador {
  nome: string = ""; // parametro é uma variavel dentro da classe
  ram: number = 0;
  cpu: number = 0;
  ligado: boolean = true;
}

const comp1 = new Computador(); // instancia, criar o objeto
const comp2 = new Computador(); // instancia
const comp3 = new Computador(); // instancia

comp1.nome = "Bom";
comp2.nome = "Ruim";
comp3.nome = "Otimo";

console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
