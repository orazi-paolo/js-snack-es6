// lista degli invitati
const guestNames = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo',
    'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney',
    'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];

// nome del tavolo
const tableName = 'Tavolo Vip';

// creo una funzione per generare la lista degli ospiti
const generateGuestList = (names, table) => {
    return names.map((name, index) => ({
        tableName: table,
        guestName: name,
        place: index + 1
    }));
};

// genero la lista degli ospiti
const guests = generateGuestList(guestNames, tableName);

// la stampo in console
console.log(guests);
