
//2.O jogador deve adivinhar a palavra dizendo uma letra de cada vez;
//3.Se acertar a letra, mostrar a letra no respetivo lugar;
//4.Se errar, começa a desenhar-se o boneco (primeiro a cabeça, depois o tronco, de seguida pernas e braços e termina-se com olhos, nariz e boca);
//5.O jogador perde se não conseguir identificar a palavra antes do desenho estar completo;

let pets = [
"cat",
"dog",
"snake",
"hamster",
"fish",
"bird",
"rabbits"
]
let count = 0;
let chosenWord = '';
let modifiedWord = '';
let letters = null;

const word = document.getElementById("word");
const categoriesContainer = document.getElementById("categories-container");
const userInputSection = document.getElementById("letter-input")
const gameButtons = document.getElementById("game-buttons");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const textresult = document.getElementById("text-result");

function startGame(){ 
  pickRandomWord()
}


function pickRandomWord(){
  chosenWord = modifiedWord = pets[Math.floor(Math.random() * pets.length)];
  chosenWord = modifiedWord = chosenWord.toUpperCase();
}

function displayWord(a){
  a.innerHTML = '';
  pickRandomWord();
  for(let i = 0; i < chosenWord,length;i++){
    let letters = document.createElement('span');
    a.appendChil(letters)
  }
}
//Replace span for letter
function replaceAsLetter(type){
  for( let i = 0; i < chosenWord.length; i++){
    if(chosenWord[i] == type){
      letters.children[i].textContent = type
    }
  }
}
//Verifify if userInput is valid

function verifyLetter(letter){
userInputSection = letter.value;
let foundLetter = modifiedWord.indexOf(userInputSection)
if(foundLetter >=0){
  modifiedWord = modifiedWord.replaceAll(userInputSection, "")
  replaceAsLetter(userInputSection)
  if(!modifiedWord.length){
    endGame(letter, 0)
  }
}
else {
    count++;
    hangman(count)
    if (count > 5) {
        endGame(letter,1)
    }
}
// Reset the input value
letter.value = "";
}

function endGame(letter,m){
let message = !m ? "Congratulations, you won the game": "You failed! Try again?"
alert(message)
userInputSection.addEventListener('click', displayItem)

}
function hangman(){
  switch (count) {
    case 1:
      document.getElementById('quadro').style.visibility='visible'
    case 2:
      document.getElementById('quadro').style.visibility='hidden'
      document.getElementById('head').style.visibility='visible'
      break;
    case 3:
      document.getElementById('head').style.visibility='hidden'
      document.getElementById('body').style.visibility='visible'
      break;
    case 4:
      document.getElementById('body').style.visibility='hidden'
      document.getElementById('arm1').style.visibility='visible'
      break;
    case 5:
      document.getElementById('arm1').style.visibility='hidden'
      document.getElementById('arm2').style.visibility='visible'
      break;
    case 6:
      document.getElementById('arm2').style.visibility='hidden'
      document.getElementById('leg1').style.visibility='visible'
      break;
    case 7:
      document.getElementById('leg1').style.visibility='hidden'
      document.getElementById('leg2').style.visibility='visible'
      break;
    default:
      break;
  }
}
function resetGame(){
count = 0;
userInputSection = '';
chosenWord = '';
modifiedWord = '';
}

startButton.onclick = startGame
userInputSection.addEventListener('click',verifyLetter())

