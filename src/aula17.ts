/* P.O.O. Constructor */

//
class Carros {
  nome: string = "";
  ram: number = 0;
  cpu: number = 0;
  ligado: boolean = true;

  // é executado automaticamente ao instanciar o objeto da class
  constructor(n: string, ram: number, cpu: number) {
    this.nome = n;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
  }
}

const carro1 = new Carros("Bom", 8, 3.5);
const carro2 = new Carros("Ruim", 4, 2.1);
const carro3 = new Carros("Otimo", 16, 4.5);

console.log(carro2.nome, carro2.cpu, carro2.ram);
console.log(carro3.nome, carro3.cpu, carro3.ram);
console.log(carro1.nome, carro1.cpu, carro1.ram);
