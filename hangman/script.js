const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll(".figure-part");

// Select a word from the database at random to guess
const words = ["applications", "programming", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord);

//  Two arrays to store correct letters and wrong letters.
const correctLetters = ["w", "i", "z", "a", "r", "d"];
const wrongLetters = [];

//  Show hidden word
function displayWord(){
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ""}
                </span>
            `).join('')
        }
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, "");
    console.log(innerWord)
    if(innerWord === selectedWord) {
        finalMessage.innerTerxt = "Congratulations! You won! 😃";
        popup.style.display = "flex";
    }
}

displayWord();