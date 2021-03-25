let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let randomNumber = Math.floor(Math.random()*10);
  return randomNumber;
}

const getAbsoluteDistance = (numberGuess, secretTarget) => {
  let numberGuessDifference = numberGuess - secretTarget;

   if(numberGuessDifference < 0){
     numberGuessDifference *= -1;
   }

   return numberGuessDifference;
}

const compareGuesses = (userGuess, computerGuess, secretTarget ) => {
  let userGuessDifference = getAbsoluteDistance(userGuess, secretTarget)
  let computerGuessDifference = getAbsoluteDistance(computerGuess, secretTarget)
   if(userGuessDifference <= computerGuessDifference){
     return true;
   } else if(userGuessDifference > computerGuessDifference){
     return false;
   }
}

const updateScore = (winner) => {
  if(winner === 'human'){
    humanScore++;
  }

  if(winner === 'computer'){
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}
