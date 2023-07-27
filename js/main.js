console.log("main ok");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 1
let myButton1 = document.getElementById("esercizio-1");

myButton1.addEventListener("click", function () {
  console.log("esercizio 1");
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 2
let myButton2 = document.getElementById("esercizio-2");

myButton2.addEventListener("click", function () {
  console.log("esercizio 2");

  let numeroRandomPc = 0;
  let numeroUtente;
  let sceltaUtente;

  let minimo = 1;
  let massimo = 5;

  numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
  if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
    alert("SCRIVI SOLO NUMERI DA 1 A 5");
  } else {
    // riduco sempre il testo al minuscolo
    sceltaUtente = prompt("digita pari (p) o dispari (d)").toLowerCase();
    if (sceltaUtente != "p" && sceltaUtente != "d") {
      alert("la scelta pari e dispari accetta solo valori p e d");
    } else {
      numeroRandomPc = numeroRandom(minimo, massimo);

      console.log("dopo " + numeroRandomPc);
    }
  }
});
