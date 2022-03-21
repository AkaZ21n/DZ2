// задание 1
let anyNumbers = [42, 65, 49, 68, 35, 58, 63, 70];
//console.log(8) //второй вариант
function maxElement (list){
    let max;
    let min = list[0]
    for(let i = 0; i < list.length; i++){
        if((list[i]) < min){
            min = list[i];
        } else {
            max = list[i];
        }
    }
    return max;
}
console.log(maxElement(list));

// задание 2
const developers = [
  {
    name: "Mars",
    level: "senior",
    salary: 55000,
  },
  {
    name: "Andrei",
    level: "middle",
    salary: 35000,
  },
  {
    name: "Alina",
    level: "junior",
    salary: 25000,
  },
];

//задание 3
for (let i = 1; i <= 100; i++) {
  // i % 3 == 0 Coca
  // i % 5 == 0 Cola
  // i % 5 == 0 && i % 3 == 0 CocaCola
}

const developers = [
      {
        name: "Alina",
        level: "junior",
        salary: 25000,
      },
    ];
let Alina = 25000
    bonus = 5000
    salary= Alina + bonus
console.log(salary);



for (let i = 1; i <= 100; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log('CocaCola')
    }
    else if ( i % 5 === 0 ) {
        console.log('Cola')
    }
    else if ( i % 3 === 0 ) {
        console.log('Coca')
    } else {
        console.log(i)
    }
}