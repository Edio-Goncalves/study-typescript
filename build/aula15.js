"use strict";
function somaRest(...n) {
    let s = 0;
    n.forEach((en) => {
        s += en;
    });
    return s;
}
console.log(somaRest(5, 9, 15, 43));
