"use strict";
function soma13(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma13());
console.log(soma13(5));
console.log(soma13(5, 3));
function newUser(user, pass, name) {
    console.log(`Usuario: ${user}`);
    console.log(`Senha..: ${pass}`);
    console.log(`Nome...: ${name}`);
}
newUser("Edio", "111");
newUser("Edio", "111", "Junior");
