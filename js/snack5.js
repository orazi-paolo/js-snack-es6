// ES6 Snack 5
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const mainArr = ['pippo', 'PLUTO', 'Paperino'];

// creo un nuovo array dove tutte le stringhe hanno la prima lettera maiuscola e le restanti minuscole 
const newArr = mainArr.map(string => string[0].toUpperCase() + string.substring(1).toLowerCase());
// stampo in console
console.log(newArr);

// BONUS (fare l inverso ovvero prima lettera minuscola e le restanti maiuscole)
const inverseNewArr = mainArr.map(string => string[0].toLowerCase() + string.substring(1).toUpperCase());
// stampo in console
console.log(inverseNewArr);