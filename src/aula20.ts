/* P.O.O. Entendendo HERANÇA */

//
class Conta {
  numero: number;
  titular: string;
  // é executado automaticamente ao instanciar o objeto da class
  constructor(numero: number, titular: string) {
    this.numero = numero;
    this.titular = titular;
  }
}

// Herança
class contaPF extends Conta {} // filho herda tudo que o pai tem
class contaPJ extends Conta {} // filho herda tudo que o pai tem

const cliente1 = new contaPF(123456, "Edio");
console.log(cliente1.titular);

const cliente2 = new contaPJ(757575, "CNPJ Junior");
console.log(cliente2.titular);
