// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

// creo un array di animali con nome famiglia e classe
const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: "aquila", famiglia: "accipitridi", classe: "uccelli" },
    { nome: "squalo bianco", famiglia: "lamnidi", classe: "pesci" }
];
// creo un nuovo array di soli animali che hanno la classe mammiferi
const mammalsAnimals = animals.filter((animal) => animal.classe === 'mammiferi');

console.log(mammalsAnimals);