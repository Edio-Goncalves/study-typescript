"use strict";
function teste() {
    console.log("teste");
}
console.log("teste");
function logar(user, pass) {
    console.log(`User.:${user}`);
    console.log(`Senha:${pass}`);
}
logar("Edio", "000");
function soma(n1, n2) {
    let r = n1 + n2;
    return r;
}
let n_res = soma(10, 20);
let s_res = soma(2, 8).toString();
console.log(n_res);
console.log(s_res);
