/* P.O.O. Metodos */

//
class Carros2 {
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

  // só são executadas quando chamadas
  info(): void {
    console.log(`Nome..:${this.nome}`);
    console.log(`RAM...:${this.ram}`);
    console.log(`C.P.U.:${this.cpu}`);
    console.log(`Ligado:${this.ligado ? "Sim" : "Não"}`);
    console.log(`-------------------------------------`);
  }

  ligar(): void {
    this.ligado = true;
  }
  desligar(): void {
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
