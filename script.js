/**
 * Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

const numbers = [
    {
        number1: genRandomNumber()  
    },
    {
        number2:  genRandomNumber()
    },
    {
        number3:  genRandomNumber()
    },
    {
        number4:  genRandomNumber()
    },
    {
        number5:  genRandomNumber()
    },
]

console.log(numbers);

const numbersContainer = document.querySelector('.container');

function genPost(numbers, numbersContainer){
    numbersContainer.innerHTML = '';

    for(let i = 0; i <= numbers.length; i++){
        const numbersItem = numbers[i];
        console.log(numbersItem);
    
        numbersContainer.innerHTML += `
        <div class="number">
        <h1>${numbersItem.number1}</h1>
        </div>
        <div class="number">
            <h1>${numbersItem.number2}</h1>
        </div>
        <div class="number">
            <h1>${numbersItem.number3}</h1>
        </div>
        <div class="number">
            <h1>${numbersItem.number4}</h1>
        </div>
        <div class="number">
            <h1>${numbersItem.number5}</h1>
        </div>`
    }
}

genPost(numbers, numbersContainer);


//Function


function genRandomNumber(){
    let userNumber = Math.floor(Math.random()*100);
    return userNumber
}

