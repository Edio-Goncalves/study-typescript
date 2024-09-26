/* Rest Parametros */
function somaRest(...n: number[]): number {
  let s: number = 0;
  n.forEach((en) => {
    s += en;
  });
  return s;
}
console.log(somaRest(5, 9, 15, 43));
