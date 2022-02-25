let n1: number = 100;
let n2: number = 20;
let msg: string = "La respuesta es: ";
const suma = (num1: number, num2: number): void => {
  let resp: number = num1 + num2;
  console.log(msg);
  console.log(`${num1}+${num2}=${resp}`);
  //return resp;
};
suma(n1, n2);
