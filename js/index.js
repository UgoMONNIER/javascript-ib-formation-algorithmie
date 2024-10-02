// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

let eleve1 = [30, 40, 60];
let eleve2 = [45, 93, 14];
let eleve3 = [30, 45, 78];

// Déclaration des variables

let tab = [
  { note1: 30, note2: 40, note3: 60 },
  { note1: 45, note2: 93, note3: 14 },
  { note1: 79, note2: 79, note3: 79 }
];

// Calcul de la moyenne des scores

function moy(array) {
  if (array === null) return 0;
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return Math.round( sum / array.length);
}

// Attribution du niveau en fonction de la moyenne

function findLevel(moy) {
  if (moy <= 50) {
    return "Débutant";
  } else if (moy > 70) {
    return "Expert";
  } else if (moy > 50 && moy < 70) {
    return "Intermédiaire";
  }
}

let incrementStudent = 0;
tab.forEach(element => {
  let moyenne = 0;
  let increment = 0;
  // ici cette boucle est réalisée sur un objet
  for (const [key, value] of Object.entries(element)) {
    moyenne += value;
    increment++;
  }
  moyenne = moyenne / increment;
  incrementStudent++;
  // Étape 5 : Affichage du résultat
  console.log(
    "etudiant numéro: " +
      incrementStudent +
      " a une moyenne de : " +
      Math.round(moyenne) +
      " donc un niveau " +
      findLevel(parseInt(moyenne))
  );
});

//  --------------------------------------------------------------- Exercice 2 -----------------------------------------------------------------------

// let  mot1 = prompt("choisissez un mot : ").trim().toUpperCase();
// let  mot2 = prompt("choisissez un mot : ").trim().toUpperCase();

// // expression Ternaires :
// mot1 === mot2 ? console.log("Ces deux mots sont identiques") : console.log("Ces deux mots ne sont pas identiques");

// trouver des mots palindromes
function arePalindrome(mot1, mot2) {
  let tab_mot1 = mot1.split('');
  let tab_mot2 = mot2.split('');
  if (tab_mot1.length != tab_mot1.length) 
    {return "Les mots ne sont pas des palindrome";} 
  let i = 0;
  let j = tab_mot1.length - 1;

  while( i < tab_mot1.length ){    
    if(tab_mot1[i] === tab_mot2[j])
    {
      i++;
      j--;
    }else{
      return "Les mots ne sont pas des palindrome";
    }
  }
  return "Les mots sont des palindrome";
}

console.log(arePalindrome("greee", "eeerg"));




