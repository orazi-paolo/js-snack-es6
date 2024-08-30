// creo un array di squadre di calcio con solo i nomi punti e falli a 0
const soccerTeams = [
    { name: 'Juventus', points: 0, fouls: 0 },
    { name: 'Inter', points: 0, fouls: 0 },
    { name: 'Milan', points: 0, fouls: 0 },
    { name: 'Roma', points: 0, fouls: 0 },
    { name: 'Napoli', points: 0, fouls: 0 },
    { name: 'Lazio', points: 0, fouls: 0 },
    { name: 'Atalanta', points: 0, fouls: 0 },
    { name: 'Fiorentina', points: 0, fouls: 0 }
];
console.log('Array con i punti e i falli settati a 0');
console.log(soccerTeams);

// (BONUS)
// stampo in pagina l'array originale
// prendo l'ul dal dom
const originalArray = document.getElementById('original-array');
// giro nell array interessato e per ognuna compongo una stringa con nome punti e falli
soccerTeams.forEach(team => {
    const li = document.createElement('li');
    li.innerText = `Nome: ${team.name}, punti fatti: ${team.points}, falli subiti ${team.fouls}`;
    originalArray.appendChild(li);
});


// per ogni squadra devo assegnare un numero casuale di punti e di falli
soccerTeams.forEach((team) => {
    team.points = Math.floor(Math.random() * 100);
    team.fouls = Math.floor(Math.random() * 50);
});
console.log('Array con i punti e i falli casuali');
console.log(soccerTeams);

// creo un nuovo array con solo i nomi e i falli
const teamsNamesFouls = soccerTeams.map(({ name, fouls }) => ({ name, fouls }));
console.log('Array con solo i nomi delle squadre e i falli fatti');
console.log(teamsNamesFouls);

// BONUS
// stampo in pagina l'array con i falli e i punti casuali
// prendo l'ul dal dom
const foulsPoints = document.getElementById('fouls-points');
// giro nell array interessato e per ognuna compongo una stringa con nome punti e falli
soccerTeams.forEach(team => {
    const li = document.createElement('li');
    li.innerText = `Nome: ${team.name}, punti fatti: ${team.points}, falli subiti ${team.fouls}`;
    foulsPoints.appendChild(li);
});

// stampo in pagina l'array con solo i nomi e i falli
// prendo l'ul dal dom
const nameFouls = document.getElementById('name-fouls');
// giro nell array interessato e per ognuna compongo una stringa con nome e falli
teamsNamesFouls.forEach(team => {
    const li = document.createElement('li');
    li.innerText = `Nome: ${team.name}, falli subiti ${team.fouls}`;
    nameFouls.appendChild(li);
});