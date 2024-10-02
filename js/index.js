// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

let eleve1 = [30, 40, 60];
let eleve2 = [45, 93, 14];
let eleve3 = [30, 45, 78];

function moy(array) {
  if (array === null) return 0;
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum / array.length;
}

function findLevel(moy) {
  if (moy <= 50) {
    return "Débutant";
  } else if (moy > 70) {
    return "Expert";
  } else if (moy > 50 && moy < 70) {
    return "Intermédiaire";
  }
}

let tab = [
  { note1: 30, note2: 40, note3: 60 },
  { note1: 45, note2: 93, note3: 14 },
  { note1: 79, note2: 79, note3: 79 }
];

let incrementStudent = 0;

tab.forEach(element => {
  let moyenne = 0;
  let increment = 0;
  for (const [key, value] of Object.entries(element)) {
    moyenne += value;
    increment++;
  }
  moyenne = moyenne / increment;
  incrementStudent++;
  console.log(
    "etudiant numéro: " +
      incrementStudent +
      " a une moyenne de : " +
      Math.round(moyenne) +
      " donc un niveau " +
      findLevel(parseInt(Math.round(moyenne)))
  );
});
