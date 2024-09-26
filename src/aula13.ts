/* Function com parâmetros padrõe e opcionais  */

// Se negar um tipo de parâmetro ele irá buscar o parametro padrão
function soma13(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}
console.log(soma13());
console.log(soma13(5));
console.log(soma13(5, 3));

// Tornar um valor opcional '?' (parametro opcional torna-se indefinido)
function newUser(user: string, pass: string, name?: string): void {
  console.log(`Usuario: ${user}`);
  console.log(`Senha..: ${pass}`);
  console.log(`Nome...: ${name}`);
}

newUser("Edio", "111");
newUser("Edio", "111", "Junior");
