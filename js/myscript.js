
var nome = prompt ("Inserisci il tuo nome")
var cognome = prompt ("Inserirsci il tuo cognome")
var colorePreferito = prompt ("Inserirsci il tuo colore preferito")
var numeroScelto = parseInt( prompt ("Inserisci un numero casuale"))
var numeroCasuale = parseInt (Math.random () * numeroScelto )


var password = nome + cognome + colorePreferito + numeroCasuale

document.getElementById ("password").innerHTML = password