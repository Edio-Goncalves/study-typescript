"use strict";
class Carros2 {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = true;
    constructor(n, ram, cpu) {
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome..:${this.nome}`);
        console.log(`RAM...:${this.ram}`);
        console.log(`C.P.U.:${this.cpu}`);
        console.log(`Ligado:${this.ligado ? "Sim" : "Não"}`);
        console.log(`-------------------------------------`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const car1 = new Carros2("Bom", 8, 3);
const car2 = new Carros2("Ruim", 4, 2.1);
const car3 = new Carros2("Otimo", 16, 4.58);
car2.ligar();
car1.info();
car2.info();
car3.info();
