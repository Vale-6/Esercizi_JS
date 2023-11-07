/*

//se il rrsto è 0
function divis(numb1, numb2) {
  result = numb1 % numb2 == 0 ? numb1 / numb2 : "error";
  return result;
}

//maggiore o uguale
function maggONo(numb1, numb2) {
  result = numb1 >= numb2 ? "MAGGIORE o UGUALE" : "MINORE";
  return result;
}

// pari o no
function pariONo(numb) {
  result = numb % 2 == 0 ? "è pari" : "dispari";
  return result;
}

//CALLBACK
function myFun(condition, callTrue, callFalse) {
  result = condition == true ? callTrue(result) : callFalse(result);
  return result;
}
myFun(
  10 > 100,
  function (res) {
    console.log("vero");
  },
  function (res) {
    console.log("falso");
  }
);

                                                                    //OGGETTI CON ARRAY ED ALTRI OGGETTI
const myBook = {
  title: "harry_potter",
  pages: 300,
  isliked: true,
};

const prova = {
  age: 23,
  hobbies: [{ name: "videogame", from: 10 }],
  myFavoriteBook: myBook,
};
*/

//LEZ 06

/*
let prova = "cciao";
console.log(prova.replace("c", "s")); //se vuoi cambiare un carattere
console.log(prova.replaceAll("c", "s")); // se vuoi cambiare piu caratteri

prova = prova.replace("c", "s"); // se vuoi cambiare in definitiva

console.log(prova.indexOf("o")); //indexof ti restituisce indice del carattere
console.log(prova.indexOf("ia")); // posizione di i = 2

let prova1 = "pippop";
console.log(prova1.lastIndexOf("p")); //lastaIndexOf mi restituisce l'ultimo = 5

console.log(prova1.substr(1, 3)); // prende i primi 3 caratteri (DEPRECATO)
console.log(prova1.substring(1, 3)); //prende il indice 1 e 3
console.log(prova1.substring(1)); //prende il 1 in poi

console.log(prova1.slice(1, 3));
console.log(prova1.slice(1, -3));

//
let stringa = "catania";
let sottos = "ta";
console.log(stringa.includes(sottos));
console.log(stringa.length);
let lung = stringa.length;
let lungs = sottos.length;
console.log(lung - lungs);
*/

/*
                                                                            //PRIMO ESERCZIO
//Dati i due  numeri 9 e 11. Stampare la loro somma.
let num1 = 6;
let num2 = 3;
console.log(num1 + num2);

//SECONDO ESERCIZIO
//Data la stringa "il mio primo esercizio in Javascript" stamparla con tutti i caratteri maiuscoli
let stringa = "il mio primo esercizio in javascript";
console.log(stringa.toUpperCase());

//TERZO
//Data la stringa "Javascript è case-sensitive" stamparne la lunghezza
let stringa1 = "Javascript è case-sensitive";
console.log(stringa1.length);

//QUARTO
//Data la stringa "Italia" stampare il primo e l'ultimo carattere
let stringa2 = "italia";
console.log("PRIMO", stringa2.charAt(0));
console.log("ULTIMO", stringa2.charAt(stringa2.length - 1));


UN ALTRO MODO PER FARLO
let stringa = "italia";

// Primo carattere
let primoCarattere = stringa[0];
startWith
console.log("Il primo carattere è: " + primoCarattere);

// Ultimo carattere
let ultimoCarattere = stringa[stringa.length - 1];
console.log("L'ultimo carattere è: " + ultimoCarattere);
*/

/*
//5
//Date due stringhe "Roma" e "Catania " sommare le loro lunghezze
let stringa3 = "roma";
let stringa4 = "catania";
console.log(
  "LUNGHEZZA DI ENTRAMBE LE STRINGHE",
  stringa3.length + stringa4.length
);
//in questo caso concatena la lunghezza di entrambe
console.log("CONCATENAZIONE", stringa3.length + "" + stringa4.length);

//6
//Data la stringa "Pizza" stampare la SOTTOSTRINGA che va dal secondo carattere fino alla fine della stringa
let stringa55 = "pizza";
console.log(stringa55.substring(1, stringa55.length));
console.log(stringa55.slice(1));
console.log(stringa55.substring(1));
*/

//CICLI
/*
let somma2 = 10;
do {
  somma2 += 1;
  console.log("somma", somma2);
} while (somma2 < 10);

console.log("BREACK");
//BREACK
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

console.log("CONTINUE");
//continue
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
*/

/*
//ESERCIZI CICLI
//1
let num1 = 100;
let i = 0;
for (i = 0; i < 10; i++) {
  num1 -= 3;
}
console.log(num1);

//2
let string1 = "leone";
let string2 = "leotta";
let j = 0;
for (j = 0; j < string1.length && j < string2.length; j++) {
  if (string1[j] == string2[j]) console.log("uguale", string1[j], string2[j]);
  else console.log("non uguale", string1[j], string2[j]);
}

//3
for (let u = 0; u < 15; u++) {
  if (u % 3 == 0) {
    console.log(u);
  }
}

//4
let y = 0;
for (y = 0; y < 20; y++) {
  if (y % 2 == 0) {
    console.log(y, "pari");
  } else {
    console.log(y, "dispari");
  }
}
*/

//esercizio 2
let array1 = [
  "pippo",
  "paolo",
  "arianna",
  "harry",
  "topolino",
  "cosacosacosacosa",
  "harrypottercosafai",
  "djdb",
  "vbjkbj",
];

for (let i = 0; i < array1.length; i++) {
  if (array1[i].length > 10) {
    console.log(array1[i]);
  }
}

//esercizio 3
for (let j = 1; j <= 100; j++) {
  if (j % 3 == 0 && j % 5 == 0) {
    console.log("FIZZBUZZ", j);
  } else {
    if (j % 3 == 0) {
      console.log("FIZZ", j);
    } else {
      if (j % 5 == 0) {
        console.log("BUZZ", j);
      }
    }
  }
}

//esercizio 4
let array2 = [
  (persona1 = { nome: "vale", age: 17, mese: "febbraio" }),
  (persona2 = { nome: "crescenzo", age: 65, mese: "gennaio" }),
  (persona3 = { nome: "rita", age: 24, mese: "dicembre" }),
  (persona4 = { nome: "gina", age: 18, mese: "dicembre" }),
];

for (let u = 0; u < array2.length; u++) {
  if (array2[u].age < 18) {
    console.log("Esci");
  } else if (array2[u].age >= 18) {
    if (array2[u].age > 60) {
      console.log("vecchietto");
    } else console.log("il costo della patente è 500 euro");
    if (array2[u].nome.startsWith("r")) {
      console.log("sconto del 20%");
    }
  }
}
