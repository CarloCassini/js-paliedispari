console.log("main ok");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 1
let myButton1 = document.getElementById("esercizio-1");

myButton1.addEventListener("click", function () {
  console.log("esercizio 1");

  let palindormo = false;

  let userWord = prompt("inserisci la parola da verificare");
  palindormo = verificaPalindromo(userWord);
  if (palindormo == true) {
    alert("la parola è PALINDROMA");
  } else {
    alert("la parola NON è PALINDROMA manco per nulla");
  }
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 2
let myButton2 = document.getElementById("esercizio-2");

myButton2.addEventListener("click", function () {
  console.log("esercizio 2");

  let numeroRandomPc = 0;
  let numeroUtente;
  let numeroVerifica;
  let sceltaUtente;

  let minimo = 1;
  let massimo = 5;

  numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
  if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
    alert("SCRIVI SOLO NUMERI DA 1 A 5");
  } else {
    // riduco sempre il testo al minuscolo
    // in un prompt la cosa dopo la virgola c'è il valore che viene suggerito
    sceltaUtente = prompt("digita pari (p) o dispari (d)", "p").toLowerCase();

    if (sceltaUtente != "p" && sceltaUtente != "d") {
      alert("la scelta pari e dispari accetta solo valori p e d");
    } else {
      // superate le verifiche lavoro sulle richieste
      numeroRandomPc = numeroRandom(minimo, massimo);

      // sommo i valori dati
      numeroVerifica = numeroRandomPc + numeroUtente;
      //  lancio la verifica del pari o dispari sul valore dei giocatori
      risultatoPariDispari = pariDispari(numeroVerifica);
      // determino il vincitore confrontanto ciò che ha reso la funzione Paridispari con la scelta dell'utente
      if (risultatoPariDispari == sceltaUtente) {
        console.log("HA VINTO L'UTENTE");
      } else {
        console.log("HA VINTO il computer");
      }
    }
  }
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 3 - Crea un array vuoto e chiedi all'utente un numero di dati casuali da inserire nell'array.
let myButton3 = document.getElementById("esercizio-snack-1");

// Crea un array vuoto e chiedi all'utente un numero di dati casuali da inserire nell'array.
myButton3.addEventListener("click", function () {
  console.log("esercizio 3");

  let array = [];
  let quanti = parseInt(prompt("quanti numeri inserire?"));
  let min = parseInt(prompt("da che numero", 1));
  let max = parseInt(prompt("a che numero", 100));

  while (quanti > 0) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min));
    quanti = quanti - 1;
  }
  console.table(array);
});
