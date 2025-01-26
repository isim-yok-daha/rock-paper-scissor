let playerScore = 0;
let computerScore = 0;

const choices = ['tas', 'kagit', 'makas'];
const resultDiv = document.getElementById('result');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    
    // Seçimleri Türkçe metne çevir
    const playerChoiceText = translateChoice(playerChoice);
    const computerChoiceText = translateChoice(computerChoice);
    
    if (playerChoice === computerChoice) {
        resultDiv.textContent = `Berabere! İkiniz de ${playerChoiceText} seçtiniz.`;
    } else if (
        (playerChoice === 'tas' && computerChoice === 'makas') ||
        (playerChoice === 'kagit' && computerChoice === 'tas') ||
        (playerChoice === 'makas' && computerChoice === 'kagit')
    ) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        resultDiv.textContent = `Kazandınız! ${playerChoiceText} ${computerChoiceText}'ı yener.`;
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        resultDiv.textContent = `Kaybettiniz! ${computerChoiceText} ${playerChoiceText}'ı yener.`;
    }
}

function translateChoice(choice) {
    switch(choice) {
        case 'tas':
            return 'Taş';
        case 'kagit':
            return 'Kağıt';
        case 'makas':
            return 'Makas';
        default:
            return choice;
    }
} 