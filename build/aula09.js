"use strict";
var dias9;
(function (dias9) {
    dias9[dias9["domingo"] = 10] = "domingo";
    dias9[dias9["segunda"] = 20] = "segunda";
    dias9[dias9["terca"] = 30] = "terca";
    dias9[dias9["quarta"] = 40] = "quarta";
    dias9[dias9["quinta"] = 50] = "quinta";
    dias9[dias9["sexta"] = 60] = "sexta";
    dias9[dias9["sabado"] = 70] = "sabado";
})(dias9 || (dias9 = {}));
console.log(dias9.domingo);
console.log(dias9[10]);
var usuarios9;
(function (usuarios9) {
    usuarios9[usuarios9["user"] = 0] = "user";
    usuarios9[usuarios9["admin"] = 1] = "admin";
    usuarios9[usuarios9["dev"] = 2] = "dev";
})(usuarios9 || (usuarios9 = {}));
console.log(usuarios9.admin);
console.log(usuarios9[2]);
var cores9;
(function (cores9) {
    cores9["branco"] = "fff";
    cores9["preto"] = "000";
    cores9["verde"] = "0f0";
    cores9["vermelho"] = "f00";
    cores9["azul"] = "00f";
})(cores9 || (cores9 = {}));
console.log(cores9.branco);
console.log(cores9["preto"]);
var tipoUsuarios9;
(function (tipoUsuarios9) {
    tipoUsuarios9[tipoUsuarios9["USER"] = 11] = "USER";
    tipoUsuarios9[tipoUsuarios9["ADMIN"] = 111] = "ADMIN";
    tipoUsuarios9[tipoUsuarios9["DEV"] = 1111] = "DEV";
})(tipoUsuarios9 || (tipoUsuarios9 = {}));
console.log(tipoUsuarios9.DEV);
const tp = tipoUsuarios9.USER;
const tp2 = 1111;
console.log(tp);
console.log(tp2);
