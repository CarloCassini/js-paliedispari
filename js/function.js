console.log("function ok");

function verificaPalindromo(wordInput) {
  // trascrivo in minuscolo
  wordInput = wordInput.toLowerCase();
  let wordReverse = "";
  let result = false;

  for (let i = wordInput.length - 1; i >= 0; i--) {
    console.log(wordInput[i]);

    wordReverse = wordReverse + wordInput[i];
  }
  console.log(wordReverse);

  if (wordInput == wordReverse) {
    console.log("si palindromo");

    result = true;
  } else {
    console.log("non palindromo");

    result = false;
  }

  return result;
}

function numeroRandom(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

function pariDispari(number) {
  let result;

  const check = number % 2;
  if (check == 0) {
    result = "p";
  } else {
    result = "d";
  }

  return result;
}
