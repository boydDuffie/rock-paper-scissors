let runningScore = 0;

const computerPlay = () => {
    let dice = Math.floor(Math.random() * 3) + 1;
    switch(dice) {
        case 1:
            return "rock";
            break;
        case 2: 
            return "scissors";
            break;
        case 3: 
            return "paper";
            break;
        default:
            console.log("dice broken.");
            return;
    }
};

const playOneRound = (playerChoice, computerChoice) => {
    switch(playerChoice) {
        case "rock": 
            if(computerChoice === "scissors") {
                runningScore++;
                scoreVal.textContent = runningScore;
                return "You win! Rock beats scissors.";
            }
            else if(computerChoice === "paper") return "You lose. Paper beats rock.";
            else return "Tie! Both chose rock.";
            break;
        case "paper": 
            if(computerChoice === "rock") {
                runningScore++;
                scoreVal.textContent = runningScore;
                return "You win! Paper beats rock.";
            }
            else if (computerChoice === "scissors") return "You lose. Scissors beat paper";
            else return "Tie! Both chose paper.";
            break;
        case "scissors": 
            if(computerChoice === "paper") {
                runningScore++;
                scoreVal.textContent = runningScore;
                return "You win! Scissors beat paper.";
            }
            else if(computerChoice === "rock") return "You lose. Rock beats scissors.";
            else return "Tie! Both chose scissors."
            break;
        default: return "Sorry, invalid choice...";
    };
};

const btns = [...document.querySelectorAll('.content button')];
const scoreVal = document.querySelector('#score-value');
const result = document.querySelector('p.result');

btns.map(b => {
    b.addEventListener('click', e => {
        let roundResult = playOneRound(e.target.value, computerPlay());
        result.textContent = roundResult;
    });
});