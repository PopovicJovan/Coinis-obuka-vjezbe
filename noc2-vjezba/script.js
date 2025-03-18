const studenti = [
    { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] },
    { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] },
    { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] },
    { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] },
    { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] }
];
// 1A
function sum(array){
    let sum = 0;
    for (let n of array) sum += n;
    return sum;
}

function avg(array){
    return sum(array)/array.length;
}



for(let student of studenti){
    let a = avg(student.ocjene)
    a > 8.5 ? console.log(student) : console.log(student.ime)
}

//1B

let maxAvg = 0;
let maxAvgStudent;
for(let student of studenti){
    if (maxAvg < avg(student.ocjene)){
        maxAvg = avg(student.ocjene)
        maxAvgStudent = student;
    }
}
console.log(maxAvgStudent);

// 1c
let sumAvg = 0;
for (let student of studenti){
    sumAvg += avg(student.ocjene);
}
console.log(sumAvg / studenti.length)

// 1d
studenti.sort((a, b) => avg(a.ocjene) - avg(b.ocjene))
console.log(studenti)

// 1e
for(let s of studenti) s.avg = avg(s.ocjene) ;
console.log(studenti)


