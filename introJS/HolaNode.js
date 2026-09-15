console.log("---Hola Mundo NODE!---");

let edad1= 20;
let edad2= 7;

console.log("Edad promedio:");
console.log((edad1 + edad2)/2);


console.log("---Medir Proceso---");

console.time("miProceso");
for(i=0;i < 1000000; i++){}
console.timeEnd("miProceso");