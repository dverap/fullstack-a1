"use strict";
let n1 = 100;
let n2 = 20;
let msg = "La respuesta es: ";
const suma = (num1, num2) => {
    let resp = num1 + num2;
    console.log(msg);
    console.log(`${num1}+${num2}=${resp}`);
    //return resp;
};
suma(n1, n2);
