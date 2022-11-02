
//2.O jogador deve adivinhar a palavra dizendo uma letra de cada vez;
//3.Se acertar a letra, mostrar a letra no respetivo lugar;
//4.Se errar, começa a desenhar-se o boneco (primeiro a cabeça, depois o tronco, de seguida pernas e braços e termina-se com olhos, nariz e boca);
//5.O jogador perde se não conseguir identificar a palavra antes do desenho estar completo;

const word = document.getElementById("word");
const categoriesContainer = document.getElementById("categories-container");
let userInputSection = document.getElementById("letter-input")
const gameButtons = document.getElementById("game-buttons");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const textresult = document.getElementById("text-result");

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
  let letters = null;
  let input = userInputSection.value;

function startGame(){ 
 displayWord()
 userInputSection.removeAttribute('hidden');
 resetButton.removeAttribute('hidden');
}

function pickRandomWord(){
  chosenWord = pets[Math.floor(Math.random() * pets.length)];
  chosenWord = chosenWord.toUpperCase();
  
}

function displayWord(){
  pickRandomWord();
  console.log(chosenWord)
  for(let i = 0; i < chosenWord.length;i++){
  let letters = chosenWord.replace(/./g, '<span class="dashes"> _ </span>');
  word.innerHTML = letters
  }
}

//Replace span for letter
function replaceAsLetter(){
  let letter = ''
  for( let i = 0; i < chosenWord.length; i++){
    if(chosenWord[i] == input){
      letters.children[i].textContent = letter
    }
  }
}

function verifyLetter(){
let foundLetter = chosenWord.indexOf(input)
if(foundLetter >=0){
  chosenWord = chosenWord.replaceAll(input, "")
  replaceAsLetter()
  if(!chosenWord.length){
    endGame(count)
  }
}
else {
    count++;
    hangman()
    if (count > 6) {
        endGame(count)
    }
}
userInputSection.value = "";
}

function endGame(m){
let message = !m ? "Congratulations, you won the game": "You failed! Try again?"
alert(message)
}
function hangman(){
  switch (count) {
    case 1:
      document.getElementById('quadro').removeAttribute('hidden');
    case 2:
      document.getElementById('quadro').setAttribute('hidden', true);
      document.getElementById('head').removeAttribute('hidden');
      break;
    case 3:
      document.getElementById('head').setAttribute('hidden', true);
      document.getElementById('body').removeAttribute('hidden');
      break;
    case 4:
      document.getElementById('body').setAttribute('hidden', true);
      document.getElementById('arm1').removeAttribute('hidden');
      break;
    case 5:
      document.getElementById('arm1').setAttribute('hidden', true);
      document.getElementById('arm2').removeAttribute('hidden');
      break;
    case 6:
      document.getElementById('arm2').setAttribute('hidden', true);
      document.getElementById('leg1').removeAttribute('hidden');
      break;
    case 7:
      document.getElementById('leg1').setAttribute('hidden', true);
      document.getElementById('leg2').removeAttribute('hidden');
      break;
    default:
      break;
  }
}
function resetGame(){
count = 0;
userInputSection = '';
chosenWord = '';
}

startButton.onclick = startGame
userInputSection.onkeyup = verifyLetter
resetButton.onclick = resetGame

