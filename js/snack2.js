// lista degli studenti
const students = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 }
];

// creo una nuova lista con i nomi tutti in maiuscolo
const namesInUpperCase = students.map(student => student.name.toUpperCase());
console.log("Lista dei nomi di tutti gli studenti in maiuscolo");
console.log(namesInUpperCase);

// creo una nuova lista con solo i studenti con la media dei voti sopra il 70
const studentsAbove70 = students.filter(student => student.grades > 70);
console.log("Lista di studenti con voti superiori al 70:");
console.log(studentsAbove70);

// creo una nuova lista di studenti che abbiamo sia una media voto sopra il 70 sia un id superiore a 120
const studentsUp70AndIdUp120 = students.filter(student => student.grades > 70 && student.id > 120);
console.log("Lista di studenti con voti sia superiore al 70 sia con un id superiore al 120:");
console.log(studentsUp70AndIdUp120);