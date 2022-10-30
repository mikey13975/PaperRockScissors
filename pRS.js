    
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random()*10 + 1) * .25;
        
        let choice = String;
        if (randomNumber <= 1) {
            choice = "rock";
        } else if (randomNumber <= 2) {
            choice = "paper";
        } else {
            choice = "scissors";
        }
        // console.log(choice);
        return choice
    }
   
    
    
    var playerScore = 0;  
    var computerScore = 0;
    
    
    
    
    function playRound() {
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        let playersChoice = prompt("please enter paper rock or scissors").toLowerCase();
        console.log(playersChoice);
        let results;
                    switch (true) {
                        case playersChoice === "paper" && computerChoice === "paper":
                case playersChoice === "rock" && computerChoice === "rock":
                case playersChoice === "scissors" && computerChoice === "scissors":
                    results = "round is a tie, ";
                    computerScore++;
                    playerScore++;
                    break;

                case playersChoice === "paper" && computerChoice === "rock":
                case playersChoice === "rock" && computerChoice === "scissors":
                case playersChoice === "scissors" && computerChoice === "paper":
                    results = "player wins!";
                    playerScore++;
                    break;

                case playersChoice === "paper" && computerChoice === "scissors":
                case playersChoice === "rock" && computerChoice === "paper":
                case playersChoice === "scissors" && computerChoice === "rock":
                    computerScore++;
                    results = "player loses!";
                    break;
                    }
                console.log(results); 
                alert(results +"the score is: player- " +playerScore +"computer-" +computerScore);
        }
        function playGame() {
            
      for (let i = 0; i < 5; i++) {
        playRound();
      }  
      if (playerScore > computerScore) {
        alert("You win!");
      } else if (playerScore < computerScore) {
        alert("you lose, try again");
      } else {
        alert("how the hell did you tie");
      }
    } 

      playGame();  
    




    