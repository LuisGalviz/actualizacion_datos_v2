const paisP = $("#paisP");
const paisT = $("#paisT");
const departamentoP = $("#departamentoP");
const departamentoT = $("#departamentoT");
const ciudadP = $("#ciudadP");
const ciudadT = $("#ciudadT");

//fecha

let ultimaFecha='01-01-0001';
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");
const anio = fechaActual.getFullYear();
const fechaEnFormatoDma = dia + "-" + mes + "-" + anio;

const fechaArreglo = fechaEnFormatoDma.split("-");
const nuevaFechaArreglo = [fechaArreglo[1], fechaArreglo[0], fechaArreglo[2]];

// Unir los elementos del arreglo en la nueva fecha
const nuevaFecha = nuevaFechaArreglo.join("-");

console.log(nuevaFecha + '  fecha actual'); // "03-12-2022"

const fechaObj1 = new Date(nuevaFecha.replace(/-/g, "/"));
