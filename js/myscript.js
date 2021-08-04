
var nome = prompt ("Inserisci il tuo nome")
var cognome = prompt ("Inserirsci il tuo cognome")
var colorePreferito = prompt ("Inserirsci il tuo colore preferito")
var annoDiNascita = prompt ("Inserisci l'anno di nascita")

var password = nome + cognome + colorePreferito + annoDiNascita

document.getElementById ("password").innerHTML = password