```
 **Consegna:**
 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 **Prima di partire a scrivere codice poniamoci qualche domanda:**
 Come faccio a sapere se un numero è divisibile senza resto per un altro?
 Abbiamo visto qualcosa di particolare che possiamo usare?
 **BONUS 1:**
 Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
 **BONUS 2:**
 Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
```

# SOLUZIONE

### RACCOLTA DATI

>Non abbiamo bisogno di  raccogliere dati dell'utente

### ESECUZIONE LOGICA

- [X] Creare ciclo 'for' per stampare i numeri da 1 a 100
- [X] Fare nel 'for' un 'if statement' per verificare se i nuumeri sono divisibili

```
Se (num % 3 === 0 && num % 5 === 0){
    stampare fizzbuzz
    num++
}Se altrimenti(num % 3 === 0){
    stampare fizz
}Se altrimenti(num % 5 === 0){
    stampare buzz
}Altrimenti{
    stampare numero del ciclo
}
```

### OUTPUT

- [X] Stampare tutto nella console

> 1 > 2 > Fizz > 4 > Buzz > Fizz ... > 14 > FizzBuzz ...

### BONUS 1

- [] Creare nel 'for' variabile per estrarre elemento contenitore in HTML
- [] Creare variabile che stampa il risultato 

### BONUS 2

- [] Estrarre classe oggetto html e cambiarlo con classe corretta in base al contenuto delle box
