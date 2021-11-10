/**
 * Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

const numbers = [
    numberOne = genRandomNumber(), 
    numberTwo =  genRandomNumber(), 
    numberThree =  genRandomNumber(),
    numberFour =  genRandomNumber(),
    numberFive =  genRandomNumber()
]
    

        

console.log(numbers);

const numbersContainer = document.querySelector('.container');

function genPost(numbers, numbersContainer){
    numbersContainer.innerHTML = '';

    for(let i = 0; i < numbers.length; i++){
    
        numbersContainer.innerHTML = `
        <div class="number">
        <h1>${numberOne}</h1>
        </div>
        <div class="number">
            <h1>${numberTwo}</h1>
        </div>
        <div class="number">
            <h1>${numberThree}</h1>
        </div>
        <div class="number">
            <h1>${numberFour}</h1>
        </div>
        <div class="number">
            <h1>${numberFive}</h1>
        </div>`
    }
}

genPost(numbers, numbersContainer);


//Function


function genRandomNumber(){
    let userNumber = Math.floor(Math.random()*100);
    return userNumber
}

