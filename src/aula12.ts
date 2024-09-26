/* Function */

// Quando uma function nao retorna nada o tipo é void
function teste(): void {
  console.log("teste");
}
console.log("teste");

// Adicionando parametros
function logar(user: string, pass: string): void {
  console.log(`User.:${user}`);
  console.log(`Senha:${pass}`);
}
logar("Edio", "000");

// Recebendo parametro e retornando valor
function soma(n1: number, n2: number): number {
  let r = n1 + n2;
  return r;
}
let n_res: number = soma(10, 20);
let s_res: string = soma(2, 8).toString();
console.log(n_res);
console.log(s_res);
