"use strict";
const teste14 = (txt = "JS") => {
    console.log(txt);
};
teste14();
teste14("TS");
teste14("React");
const teste1414 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
console.log(teste1414([10, 20, 30, 40]));
