const promptS = require('prompt-sync')();
enum Difficulty {
    Easy = 15,
    Medium = 10,
    Hard = 5
}

export function guessNumberGame(difficulty: Difficulty): undefined {
    const maxAttempts = difficulty;
    const numberToGuess = Math.floor(Math.random() * 100) + 1;
    
    let attempts = 1;
    
    while (attempts <= maxAttempts) {
        let chosedNumber: number = Number(promptS("Introduce tu suposición: "));

        const [lowerBound, upperBound] = [1, 100];
        while (chosedNumber > upperBound || chosedNumber < lowerBound || !Number.isInteger(chosedNumber)) {
            console.log("Debe ingresar un número entero entre 1 y 100.");
            chosedNumber = Number(promptS("Introduce tu suposición: "));
        }

        if (chosedNumber === numberToGuess){
            console.log("Has adivinado el número!");
            return
        } 

        getFeedback(chosedNumber,numberToGuess);
        attempts += 1;
    }
    console.log(`Te has quedado sin intentos. El número correcto era ${numberToGuess}.`);
}

function getFeedback(chosedNumber: number, numberToGuess:number): undefined {
    switch(true){
        case chosedNumber > numberToGuess:
            if (chosedNumber < numberToGuess + 20){
                console.log("Tu suposición es más alta");
            } else {
                console.log("Tu suposición es demasiado alta");
            }
            break;
        default:
            if (chosedNumber > numberToGuess - 20){
                console.log("Tu suposición es más baja");
            } else {
                console.log("Tu suposición es demasiado baja");
            }
    }

}

guessNumberGame(Difficulty.Hard);
