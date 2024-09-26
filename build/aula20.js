"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class contaPF extends Conta {
}
class contaPJ extends Conta {
}
const cliente1 = new contaPF(123456, "Edio");
console.log(cliente1.titular);
const cliente2 = new contaPJ(757575, "CNPJ Junior");
console.log(cliente2.titular);
