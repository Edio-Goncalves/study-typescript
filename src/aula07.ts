/* TUPLAS */

// É como o template grid do CSS, fixa-se o index de cada valor
let coisas7: [string, number, boolean] = ["corda", 10, true];

// Boa prática para evitar erros é adicionar Readonly
let coisasTT: readonly [string, number, boolean] = ["corda", 10, true];
// desta forma o index fica travado em posição e valores
