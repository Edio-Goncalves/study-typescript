/* P.O.O. Entendendo HERANÇA */

//
class Conta2 {
  numero: number;
  titular: string;
  // é executado automaticamente ao instanciar o objeto da class
  constructor(titular: string) {
    this.numero = this.gerarConta();
    this.titular = titular;
  }

  gerarConta(): number {
    return Math.floor(Math.random() * 100000);
  }
}

// Herança
class contaPF2 extends Conta2 {
  cpf: number;
  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
  }
}
class contaPJ2 extends Conta2 {
  cnpj: number;
  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
  }
}

const clie1 = new contaPF2(1504306690, "Edio");
console.log(clie1.cpf, clie1.titular, clie1.numero);

const clie2 = new contaPJ2(15111511215, "EMPRESA do Junior");
console.log(clie2.titular, clie2.numero);
