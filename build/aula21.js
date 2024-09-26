"use strict";
class Conta2 {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarConta();
        this.titular = titular;
    }
    gerarConta() {
        return Math.floor(Math.random() * 100000);
    }
}
class contaPF2 extends Conta2 {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class contaPJ2 extends Conta2 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const clie1 = new contaPF2(1504306690, "Edio");
console.log(clie1.cpf, clie1.titular, clie1.numero);
const clie2 = new contaPJ2(15111511215, "EMPRESA do Junior");
console.log(clie2.titular, clie2.numero);
