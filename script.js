function computerPlay() {
  const randomNumber = Math.random() * 10;
  if (randomNumber <= 3) {
    return "Rock";
  } else if (randomNumber > 3 && randomNumber <= 6) {
    return "Paper";
  } else return "Scissors";
}
// console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
  const playerCaseInsensitive = playerSelection.toLowerCase();
  const computerCaseInsensitive = computerSelection.toLowerCase();
  if (playerCaseInsensitive === computerCaseInsensitive) {
    return "We have a Draw, try again!";
  } else if (
    computerCaseInsensitive === "rock" &&
    playerCaseInsensitive === "paper"
  ) {
    return "You Win! Paper beats Rock";
  } else if (
    computerCaseInsensitive === "rock" &&
    playerCaseInsensitive === "scissors"
  ) {
    return "You lose! Rock beats Scissors";
  } else if (
    computerCaseInsensitive === "paper" &&
    playerCaseInsensitive === "rock"
  ) {
    return "You lose! Paper beats Rock";
  } else if (
    computerCaseInsensitive === "paper" &&
    playerCaseInsensitive === "scissors"
  ) {
    return "You win! Scissors beats paper";
  } else if (
    computerCaseInsensitive === "scissors" &&
    playerCaseInsensitive === "rock"
  ) {
    return "You win! Rock beats Scissors";
  } else {
    return "You lose! Scissors beats Paper";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() {
  let userScore = 0;
  let computerScore = 0;
  alert("Let's play Rock Scissors Paper Game!");
  for (let i = 0; i < 5; i++) {
    const playerInput = prompt("Choose Rock, Paper or Scissors!");
    if (!playerInput) {
      return alert("Please instert an option!");
    } else if (
      playerInput.toLowerCase() !== "rock" &&
      playerInput.toLowerCase() !== "paper" &&
      playerInput.toLowerCase() !== "scissors"
    ) {
      return "Please insert a correct option!";
    } else if (
      playRound(playerInput, computerSelection) === "We have a Draw, try again!"
    ) {
      return;
    } else if (
      playRound(playerInput, computerSelection) ===
        "You Win! Paper beats Rock" ||
      playRound(playerInput, computerSelection) ===
        "You win! Scissors beats paper" ||
      playRound(playerInput, computerSelection) ===
        "You win! Rock beats Scissors"
    ) {
      userScore++;
    } else computerScore++;

    alert(`Your Score: ${userScore}\nComputer Score: ${computerScore}`);
  }
}
console.log(game());
