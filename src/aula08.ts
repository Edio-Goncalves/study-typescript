/* Type Object */

//let dados8:object={}
let dados8 = {
  nome: "Edio",
  idade: 25,
  status: "A",
  ola: () => {
    console.log("Olá");
  },
  info: (p: string) => {
    console.log(p);
  },
};

dados8.nome = "Junior";

console.log(typeof dados8);
console.log(dados8.nome);

dados8.ola();
dados8.info("Edio");
dados8.info(dados8.nome);
