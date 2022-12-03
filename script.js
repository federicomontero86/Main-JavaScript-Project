function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber <= 3) {
    return "Rock";
  } else if (randomNumber > 3 && randomNumber <= 6) {
    return "Paper";
  } else return "Scissors";
}
// console.log(computerPlay());

function userPlay() {
  const playerInput = prompt("Choose Rock, Paper or Scissors!");
  if (!playerInput) {
    return "No value";
  } else if (
    playerInput.toLowerCase() !== "rock" &&
    playerInput.toLowerCase() !== "paper" &&
    playerInput.toLowerCase() !== "scissors"
  ) {
    return "Invalid option";
  } else return playerInput;
}
// console.log(userPlay());

function playRound(playerSelection, computerSelection) {
  const playerCaseInsensitive = playerSelection.toLowerCase();
  const computerCaseInsensitive = computerSelection.toLowerCase();
  if (playerCaseInsensitive === "no value") {
    return "Please type an option!";
  } else if (playerCaseInsensitive === "invalid option") {
    return "Please select a valid option!";
  } else if (playerCaseInsensitive === computerCaseInsensitive) {
    return "We have a draw ⚖️";
  } else if (
    computerCaseInsensitive === "rock" &&
    playerCaseInsensitive === "paper"
  ) {
    return "You Win! Paper beats Rock 🥳🥳🥳";
  } else if (
    computerCaseInsensitive === "rock" &&
    playerCaseInsensitive === "scissors"
  ) {
    return "You lose! Rock beats Scissors 😭";
  } else if (
    computerCaseInsensitive === "paper" &&
    playerCaseInsensitive === "rock"
  ) {
    return "You lose! Paper beats Rock 😭";
  } else if (
    computerCaseInsensitive === "paper" &&
    playerCaseInsensitive === "scissors"
  ) {
    return "You win! Scissors beats paper 🥳🥳🥳";
  } else if (
    computerCaseInsensitive === "scissors" &&
    playerCaseInsensitive === "rock"
  ) {
    return "You win! Rock beats Scissors 🥳🥳🥳";
  } else {
    return "You lose! Scissors beats Paper 😭";
  }
}

const computerSelection = computerPlay();
const playerSelection = "rock";

function game() {
  let userScore = 0;
  let computerScore = 0;
  alert("Let's play Rock Scissors Paper Game against the Computer!");
  for (let i = 0; i < 5; i++) {
    // console.log(playRound(playerSelection(), computerPlay()));
    const roundResult = playRound(userPlay(), computerPlay());
    if (roundResult.includes("win!")) {
      userScore++;
    } else if (roundResult.includes("lose!")) {
      computerScore++;
    } else if (roundResult.includes("draw")) {
      userScore++;
      computerScore++;
    }
    console.log(
      `ROUND ${
        i + 1
      }\n${roundResult}\nYour Score: ${userScore}\nComputer Score: ${computerScore}`
    );
    alert(
      `ROUND ${
        i + 1
      }\n${roundResult}\nYour Score: ${userScore}\nComputer Score: ${computerScore}`
    );
  }
  if (userScore > computerScore) {
    console.log(
      `Congratulations 🥳🥳\nYou have defeated the Computer!!\nFinal Result: ${userScore}-${computerScore}`
    );
    alert(
      `Congratulations 🥳🥳\nYou have defeated the Computer!!\nFinal Result: ${userScore}-${computerScore}`
    );
  } else if (userScore < computerScore) {
    console.log(
      `Computer wins 🖥️\nMybe the next time ;)\nFinal Result: ${userScore}-${computerScore}`
    );
    alert(
      `Computer wins 🖥️\nMybe the next time ;)\nFinal Result: ${userScore}-${computerScore}`
    );
  } else {
    console.log(
      `We have a draw!! Let's try again!!\nFinal Result: ${userScore}-${computerScore}`
    );
    alert(
      `We have a draw!! Let's try again!!\nFinal Result: ${userScore}-${computerScore}`
    );
  }
}
game();
