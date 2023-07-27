console.log("function ok");

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
