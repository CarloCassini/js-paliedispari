# traccia

## palindromi

Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

### svolgimento:

preparo le funzioni:

- creo la funzione verificaPalindromia che fa:
  - prende la parola inserita dall'utente
  - la scrive un una variabile di supporto che cambia l'ordine delle lettere mettendole al contrario
  - verifica l'uguaglianza tra la parola fornita e la parola al contratio
  - **se** sono uguali
    - rende a video la scritta "parola palindroma"
  - **altirmenti**
    - rende a video la parola "non sono palindrome

svolgimento

- chiedo all'utente di inserire una parola tramite prompt

- eseguo la funzione verificaPalindromia e attendo risultato

fine

## pari e dispari

L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

### svolgimento:

preparo le funzioni:

- creo la funzione numeroRandom che fa:

  - riceve i parametri di numero minimo e numero massimo
  - calcola un numero random intero entro quei parametri
  - return del valore generato

- creo la funzione pariDispari che fa:
  - prende il valore messo nei parametri e verifica che sia un numero pari
    -return true se pari // false se dispari

svolgimento esercizio

- chiedo all'utente se preferisce pari o dispari
- chiedo all'utente un numero compreso tra 1 e 5
- lancio la funzione numeroRandom
- salvo il valore reso in variabile numeroRandomPc
- sommo il numero dell'utente con il numero del pc

- lancio la funzione pariDispari
- verifico il valore reso da pariDispari:
  - **se** pari **e** utente aveva scelto pari
    - scrivo a video "ha vinto l'utente"
  - **altirmenti**
    - scrivo a video "ha vinto il pc"

fine
