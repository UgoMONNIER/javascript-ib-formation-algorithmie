// // let str = '';

// // for (let i = 0; i < 9; i++) {
// //   str = str + i;
// // }

// let eleve1 = [30, 40, 60];
// let eleve2 = [45, 93, 14];
// let eleve3 = [30, 45, 78];

// // Déclaration des variables

// let tab = [
//   { note1: 30, note2: 40, note3: 60 },
//   { note1: 45, note2: 93, note3: 14 },
//   { note1: 79, note2: 79, note3: 79 }
// ];

// // Calcul de la moyenne des scores

// function moy(array) {
//   if (array === null) return 0;
//   let sum = 0;
//   array.forEach(element => {
//     sum += element;
//   });
//   return Math.round(sum / array.length);
// }

// // Attribution du niveau en fonction de la moyenne

// function findLevel(moy) {
//   if (moy <= 50) {
//     return "Débutant";
//   } else if (moy > 70) {
//     return "Expert";
//   } else if (moy > 50 && moy < 70) {
//     return "Intermédiaire";
//   }
// }

// let incrementStudent = 0;
// tab.forEach(element => {
//   let moyenne = 0;
//   let increment = 0;
//   // ici cette boucle est réalisée sur un objet
//   for (const [key, value] of Object.entries(element)) {
//     moyenne += value;
//     increment++;
//   }
//   moyenne = moyenne / increment;
//   incrementStudent++;
//   // Étape 5 : Affichage du résultat
//   console.log(
//     "etudiant numéro: " +
//       incrementStudent +
//       " a une moyenne de : " +
//       Math.round(moyenne) +
//       " donc un niveau " +
//       findLevel(parseInt(moyenne))
//   );
// });

// //  --------------------------------------------------------------- Exercice 2 -----------------------------------------------------------------------

// // let  mot1 = prompt("choisissez un mot : ").trim().toUpperCase();
// // let  mot2 = prompt("choisissez un mot : ").trim().toUpperCase();
// // let tab_mot1 = mot1.split("");
// // let tab_mot2 = mot2.split("");

// // function trimCopy(mot) {
// //   let tab_mot = mot.split("");
// //   let new_tab = [];
// //   for (let i = 0; i < tab_mot.length; i++) {
// //     if (tab_mot[i] !== " ") {
// //       new_tab.push(tab_mot[i]);
// //     }
// //   }
// //   return new_tab;
// // }

// // function areIdentique(mot1, mot2) {
// //   let tab_mot1 = trimCopy(mot1);
// //   let tab_mot2 = trimCopy(mot2);

// //   if (tab_mot1.length !== tab_mot2.length) {
// //     return "Les mots ne sont pas identique";
// //   }

// //   let i = 0;
// //   while (i < tab_mot1.length) {
// //     if (tab_mot1[i] === tab_mot2[i]) {
// //       i++;
// //     } else {
// //       return "Les mots ne sont pas identiques";
// //     }
// //   }
// //   return "Les mots sont identiques";
// // }

// // console.log(areIdentique(mot1, mot2));

// // // trouver des mots palindromes
// // function arePalindrome(mot1, mot2) {
// //   let tab_mot1 = mot1.split("");
// //   let tab_mot2 = mot2.split("");
// //   if (tab_mot1.length != tab_mot1.length) {
// //     return "Les mots ne sont pas des palindrome";
// //   }
// //   let i = 0;
// //   let j = tab_mot1.length - 1;

// //   while (i < tab_mot1.length) {
// //     if (tab_mot1[i] === tab_mot2[j]) {
// //       i++;
// //       j--;
// //     } else {
// //       return "Les mots ne sont pas des palindrome";
// //     }
// //   }
// //   return "Les mots sont des palindrome";
// // }

// // verification mot de passe

// let mot_de_passe = "FHUHUHUduzuy uohoihufzoif";
// let mot_de_passe1 = "65oif";
// let mot_de_passe2 = "656duzhufzoif";

// function verification(mot) {
//   let tab_mot = mot.split("");
//   let nb_uppercase = 0;
//   let nb_number = 0;
//   if (tab_mot.length < 8) return "mot de passe invalide";
//   for (let i = 0; i < tab_mot.length; i++) {
//     if (tab_mot[i] === tab_mot[i].toUpperCase()) {
//       nb_uppercase++;
//     }
//     if (tab_mot[i] !== " ")
//       if (!isNaN(Number(tab_mot[i]))) {
//         nb_number++;
//       }
//   }
//   if (nb_uppercase === 0) {
//     return "mot de passe invalide";
//   } else if (nb_number === 0) {
//     return "mot de passe invalide";
//   } else {
//     return "mot de passe valide";
//   }
// }

// console.log(verification(mot_de_passe));
// console.log(verification(mot_de_passe1));
// console.log(verification(mot_de_passe2));

// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found);

//------------------------------------------------ Projet JS - Outil Comptable pour une Agence de Comptabilité -----------------------------------------------------------------

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function clear(event) {
  if (event.target.innerHTML === "C") {
    document.getElementById("ecran").innerHTML = "0";
  }
}

function getTable(str) {
  let array_operator = ["-", "+", "/", "*", "."];
  table_brut = str.split("");
  table_temp = [];
  table = [];
  let j = 0;
  while (j < table_brut.length) {
    if (!isNumeric(table_brut[j])) {
      table.push(table_brut[j]);
      j++;
    }
    for (let i = j; isNumeric(table_brut[i]); i++) {
      if (isNumeric(table_brut[i])) {
        table_temp.push(table_brut[i]);
      }
      j++;
    }
    let concatNumber = "";
    for (let i = 0; i < table_temp.length; i++) {
      concatNumber += table_temp[i];
    }
    table_temp = [];
    table.push(concatNumber);
  }

  return table;
}

class Calculatrice {
  constructor(nombreGauche, nombreDroite, arrayNumberForAverage) {
    this.nombreGauche = nombreGauche;
    this.nombreDroite = nombreDroite;
    this.arrayNumberForAverage = arrayNumberForAverage;
  }

  calculSomme() {
    return this.nombreGauche + this.nombreDroite;
  }

  calculSoustraction() {
    return this.nombreGauche - this.nombreDroite;
  }

  calculMultiplication() {
    return this.nombreGauche * this.nombreDroite;
  }

  calculPourcentage() {
    return this.nombreGauche / 100;
  }
  calculDivision() {
    return this.nombreGauche / this.nombreDroite;
  }

  calculMoyenne() {
    if (this.arrayNumberForAverage.length == 0) {
      return 0;
    }
    let moyenne = 0;
    for (let i = 0; i < this.arrayNumberForAverage.length; i++) {
      moyenne += this.arrayNumberForAverage[i];
    }
    moyenne = moyenne / this.arrayNumberForAverage.length;
    return moyenne;
  }
}

const elements = document.querySelectorAll(".btn");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", myFunction);

}

function myFunction(event) {
  const array_operator = ["-", "+", "/", "*", "."];
  let screen_value = document.getElementById("ecran").innerHTML;

  let nombreGauche = screen_value === "0" ? "" : screen_value;
  document.getElementById("ecran").innerHTML = nombreGauche + event.target.innerHTML;
  
  let expression = nombreGauche + event.target.innerHTML;

  if (event.target.innerHTML === "=") {
    let table_arranged = getTable(expression);

    let tempResult = [];
    for (let i = 0; i < table_arranged.length; i++) {
      if (array_operator.includes(table_arranged[i])) {
        let operateur = table_arranged[i];
// priorité multi division
        if (operateur === "*" || operateur === "/") {
          let nombreG = parseFloat(tempResult.pop());
          let nombreD = parseFloat(table_arranged[i + 1]);

          let calculatrice = new Calculatrice(nombreG, nombreD, []);
          let resultat;

          if (operateur === "*") {
            resultat = calculatrice.calculMultiplication();
          } else {
            resultat = calculatrice.calculDivision();
          }

          // ajout résultat a temp
          tempResult.push(resultat);
          i++; 
        } else {
          tempResult.push(table_arranged[i]);
        }
      } else {
        tempResult.push(table_arranged[i]);
      }
    }

    //  addi et soustraction
    let finalResult = parseFloat(tempResult[0]);
    for (let i = 1; i < tempResult.length; i++) {
      let operateur = tempResult[i];

      if (operateur === "+") {
        finalResult += parseFloat(tempResult[i + 1]);
        i++;
      } else if (operateur === "-") {
        finalResult -= parseFloat(tempResult[i + 1]);
        i++; 
      }
    }

    document.getElementById("ecran").innerHTML = finalResult;
  }

  clear(event);
}

