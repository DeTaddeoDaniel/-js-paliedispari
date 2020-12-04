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

/* Programma*/
function app(){

    /*inserisci numero*/
    var numero = numeroInserito();
    
    /* Tipologia di numero */
    if( numero % 2 == 0){
        console.log(" Il numero è pari");
    } else {
        console.log("Il numero è dispari");
    }

}

app();