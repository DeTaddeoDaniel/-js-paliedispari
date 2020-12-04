/*

    Determina se un numero è pari o dispari

*/

/* richiesta numero*/
function numeroInserito(){

    var numeroInserito = -1;
    var inputvalido = false;
    
    /* richiesta numero all'utente*/
    do {

        /* Inserisci numero */
        numeroInserito = parseInt(prompt("Inserisci un numero"));

        /* check numero valido */
        if(numeroInserito == false ) {
            inputvalido = false;
            console.log("Inserito numero non valido");
        } else {
            inputvalido = true;
            console.log("Inserito numero valido : " + numeroInserito);
        }

    } while ( !inputvalido);

   return numeroInserito;
    
}

/* numero casuale */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
/* Programma*/
function app(){

    /* input corretto */
    varinputCorretto = false;
    var numero = -1;

    do{
        /*inserisci numero*/
        numero = numeroInserito();

        /* input check valori*/
        if (numero > 0 && numero < 6){
            console.log("Numero inserito valido: " + numero);
            varinputCorretto = true;
        } else {
            console.log("numero inserito non valido o non complesso tra 1 e 5");
            varinputCorretto = false;
        }

    } while (!varinputCorretto);

    /* genra numero casuale*/
    var numeroComputer = getRandomInt(1,5);
    console.log("Numero computer: "+ numeroComputer);

    /* Somma numeri*/
    var somma = numero + numeroComputer;
    console.log("Somma numero: " + somma);
    
    /* Domanda finale*/
    var risposta = prompt("Il numero finale è pari o dispari, inserisci: \np per pari \nd per dispari");
    var checkRisposta = false;
    var soluzione = "";

    do{

        risposta = prompt("Il numero finale è pari o dispari, inserisci: \np per pari \nd per dispari");
        
        if(risposta.toLowerCase() == "p" || risposta == "d"){
            console.log("Risposta valida");
            checkRisposta = true;
        } else {
            console.log("Risposta non valida");
            checkRisposta = false;
        }

    } while( !checkRisposta);
   

    /* Tipologia di numero */
    if( somma % 2 == 0){
        console.log(" Il numero è pari");
        soluzione = "p";
    } else {
        console.log("Il numero è dispari");
        soluzione = "d";
    }

    /* Risposta finale*/
    if (soluzione == risposta){
        console.log("Complimenti, hai indovinato");
    } else {
        console.log("Mi spiace, non hai indovinato");
    }
    

}

app();