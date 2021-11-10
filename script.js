/**
 * Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

const numbers = [
    {
        number1: ''  
    },
    {
        number2:``
    },
    {
        number2:``
    },
    {
        number2:``
    },
    {
        number3:``
    },
]

console.log(numbers);

const max = 100;
const min = 1;



//Function


let userNumber = '';

function genRandomNumber(max, min){
    userNumber = Math.floor(Math.random()*max)-min;
    return userNumber
}

