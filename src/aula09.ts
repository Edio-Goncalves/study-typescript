/* Enumeradores ENUM */

// ENUM numério; Pelo atributo da apra puxar o valor ou o indice quando na otem valor atribuido, ou pelo valor puxamos o atributo.
enum dias9 {
  domingo = 10,
  segunda = 20,
  terca = 30,
  quarta = 40,
  quinta = 50,
  sexta = 60,
  sabado = 70,
}
console.log(dias9.domingo);
console.log(dias9[10]);

enum usuarios9 {
  user,
  admin,
  dev,
}
console.log(usuarios9.admin);
console.log(usuarios9[2]);

//ENUM textual; Não dá para chegar no atributo pelo valor
enum cores9 {
  branco = "fff",
  preto = "000",
  verde = "0f0",
  vermelho = "f00",
  azul = "00f",
}
console.log(cores9.branco);
console.log(cores9["preto"]);

//ENUM type; Para travar valores baseado na especificação

enum tipoUsuarios9 {
  USER = 11,
  ADMIN = 111,
  DEV = 1111,
}
console.log(tipoUsuarios9.DEV);

const tp: tipoUsuarios9 = tipoUsuarios9.USER;
const tp2: tipoUsuarios9 = 1111;
console.log(tp);
console.log(tp2);
