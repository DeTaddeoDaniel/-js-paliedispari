/*
    Fizz Buzz test:
    
    Scrivi un programma che stampi i numeri da 1 a
    100, ma per i multipli di 3 stampi “Fizz” al posto del
    numero, per i multipli di 5 stampi “Buzz” e per i
    numeri che sono sia multipli di 3 che di 5 stampi
    “FizzBuzz”.
*/

/* Determina se una parola è palindroma dando vero o falso*/

function isPalindroma(parola, meta){

    /* inizio check*/
    palindroma = true;

    /* chck pre-while*/
    console.log("Parola da verificare: " + parola);
    console.log("Meta parola posizioni: " + meta);
    var indice = 0;

    /* check palindromi*/
    while (palindroma & indice < meta) {
        
        if(parola[parola.length - indice - 1] == parola[indice]){
            console.log("Lettere posizione " + indice + " sono uguali");
            palindroma = true;
            console.log("primo: "+ parola[indice]);
            console.log("finale: " + parola[parola.length - indice - 1] );
        } else {
            console.log("Lettere posizione " + indice + " non sono uguali");
            palindroma = false;
            console.log("primo: "+  parola[indice]);
            console.log("finale: " + parola[parola.length - indice - 1]);
        }

        indice++;
    
    }

    /* ritorna il risultato*/
    return palindroma;

}

/* input parola*/
function inserisciParola(){
    return prompt("Inserisci una parola per verificare se è palindroma");
}

/* calcola meta parola*/
function metaParola(parola){

    var meta = 0;

    if(parola.length % 2 != 0){
        meta = parola.length - 1;
        console.log("Parola con lettere dispari");
    } else {
        console.log("Parola con lettere pari");
    }
    
    return Math.ceil(parola.length / 2 );
}
/* Mettere in disparte io e dare spazio al noi*/ 
/* Mettersi al gioco 100%*/ 
/** mettere in gioco tutto quello che ho imparato/ */


function app(){

    var parola = inserisciParola();
    var meta = metaParola(parola);

    var palindroma = isPalindroma(parola, meta);
    
    if(palindroma){
        console.log("La parola è palindroma");
    } else{
        console.log("La parola non è palindroma");
    }
}

app();