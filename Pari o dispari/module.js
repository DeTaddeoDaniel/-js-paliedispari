/*
    Fizz Buzz test:
    
    Scrivi un programma che stampi i numeri da 1 a
    100, ma per i multipli di 3 stampi “Fizz” al posto del
    numero, per i multipli di 5 stampi “Buzz” e per i
    numeri che sono sia multipli di 3 che di 5 stampi
    “FizzBuzz”.
*/

/* Determina se una parola è palindroma dando vero o falso*/

function app(){

    /*riempi array grande*/
    var numeroMinimo = 1;
    var numeroMassimo = 100;
    
    for (var i = numeroMinimo; i <= numeroMassimo; i++) {

        if (i % 3 == 0 && i % 5 == 0)
            console.log("- numero " + i + " : FizzBuzz");
    
        else if (i % 3 == 0)
            console.log("- numero " + i + " : Fizz");

        else if (i % 5 == 0)
            console.log("- numero " + i + " : Buzz");

        else
            console.log( "- numero " + i);
        }

}

app();