// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

// creo un array di oggetti che rappresentano delle persone
const people = [
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 30
    },
    {
        nome: "Luca",
        cognome: "Bianchi",
        eta: 15
    },
    {
        nome: "Giulia",
        cognome: "Verdi",
        eta: 28
    },
    {
        nome: "Anna",
        cognome: "Neri",
        eta: 17
    }
];
// per ogni persona creo un nuovo array dove inserisco: nome cognome e se puo guidare o meno
const adults = people.map((person) => {
    const canDrive = person.eta >= 18 ? "può guidare" : "non può guidare";
    return `${person.nome} ${person.cognome} ${canDrive}.`;
});

// stampo in console il nuovo array
console.log(adults);