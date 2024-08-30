// creiamo un array di biciclette che come oggetti abbiano il nome e il peso
const bikes = [
    { name: 'Bianchi Oltre XR4', weight: 7.2 },
    { name: 'Pinarello Dogma F12', weight: 6.8 },
    { name: 'Cannondale SuperSix Evo', weight: 6.9 },
    { name: 'Trek Emonda SLR 9', weight: 6.7 }
];
// definisco una variabile di base 
let lightBike = bikes[0];
// giro nell array e confronto il peso se fosse minore sostituisco la bici piu leggera
for (const bike of bikes) {
    if (bike.weight < lightBike.weight) lightBike = bike;
}
// faccio il destructuring ella bici leggera
const { name, weight } = lightBike;

// stampo in console
console.log(`La bici più leggera è ${name}, il suo peso è di ${weight}`);

// BONUS 
// prendo gli elementi dal dom
const result = document.querySelector('p');
// stampo in pagina
result.innerText = `La bici più leggera è ${name}, il suo peso è di ${weight}`;