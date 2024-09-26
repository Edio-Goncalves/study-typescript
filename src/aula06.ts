/* ReadonlyArray */

// Array typado onde posso usar metodos de alteração de valores
let number6: number[] = [20, 30, 40];
number6.push(10); //adiciona valor no fim
number6.unshift(10); //adiciona valor no inicio
number6.pop(); //retira valor do fim
number6.shift(); //retira valor do inicio
console.log(number6);

//ReadonlyArray: arrey apenas de leitura. Todos metodos de input e delete ficam desabilitados
let number6Read: ReadonlyArray<number> = [100, 200, 300];
