/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi.
*/



// 1- visualizziamo 5 numeri casuali
const secretNumbersElement = document.getElementById("secretNumbers");
const outputTextElement = document.getElementById("outputText");

// input utente
// const number1Element = document.getElementById("number1");
// const number2Element = document.getElementById("number2");
// const number3Element = document.getElementById("number3");
// const number4Element = document.getElementById("number4");
// const number5Element = document.getElementById("number5");

// array di campi di input
const numberElements = [
    document.getElementById("number1"),
    document.getElementById("number2"),
    document.getElementById("number3"),
    document.getElementById("number4"),
    document.getElementById("number5")
];

console.log(numberElements);

const checkButtonElement = document.getElementById("checkButton");


// metto in variabile da poter usare
const randomNumbersArray = createRandomNumbers(5);
// stampo in pagina i numeri casuali
secretNumbersElement.innerText = randomNumbersArray;


//  2- faccio partire un timer di 10 seocndi
//  dopo 10 secondi i numeri scompariranno
setTimeout(function() {
        disappearNumbers(secretNumbersElement);
        document.getElementById("inputElementsContainer").style.display = "block";
    }, 10000);

// 3- alla presisone del pulsante
checkButtonElement.addEventListener("click", function () {
    let rightNumbersArray = checkNumbers(randomNumbersArray, numberElements)
    // 4
    endGame(rightNumbersArray, outputTextElement);
});





// FUNZIONI PER ESERCIZIO
// 1
function createRandomNumbers (quantity) {
    let randomNumbers = [];

    for(let i=0; i < quantity; i++) {
        randomNumbers.push(randomNumberBetween(1, 10));
    }

    return randomNumbers;
}

function randomNumberBetween(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}


// 2
function disappearNumbers (numbersContainer) {
    numbersContainer.innerText = "???";
}

// 3
function checkNumbers (secretNumbers, userNumbers) {

    const rightNumbers = [];

    for(let i=0; i < userNumbers.length; i++) {
        if(secretNumbers[i] == userNumbers[i].value) {
    
            rightNumbers.push(secretNumbers[i]);
            userNumbers[i].style.backgroundColor = "green";
            console.log("trovato");
        }
    }
    return rightNumbers;
}

// 4
function endGame(rightNumbers, outputTextElement) {
    outputTextElement.innerHTML = `Hai indivinato ${rightNumbers.length} numeri.<br>
    I numeri che hai indovinato sono: ${rightNumbers}`;
}