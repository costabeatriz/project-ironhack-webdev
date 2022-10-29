
//2.O jogador deve adivinhar a palavra dizendo uma letra de cada vez;
//3.Se acertar a letra, mostrar a letra no respetivo lugar;
//4.Se errar, começa a desenhar-se o boneco (primeiro a cabeça, depois o tronco, de seguida pernas e braços e termina-se com olhos, nariz e boca);
//5.O jogador perde se não conseguir identificar a palavra antes do desenho estar completo;

//Keyboard letters
const alphabet = []

//array of categories
let categories = {
    pets:[
       "cat",
       "dog",
       "snake",
       "hamster",
       "fish",
       "bird",
       "rabbits"
    ],
    fruits:[
        "banana",
        "apple",
        "strawberry",
        "orange",
        "pear",
        "blueberry",
        "plum",
        "peach"
    ],
    planets:[
        "earth",
        "mars",
        "venus",
        "mercury",
        "jupiter",
        "uranus",
        "neptune",
        "saturn"
    ],
    country:[
        "brazil",
        "mexico",
        "portugal",
        "italy",
        "france",
        "germany",
        "turkey"
    ]
};

let winCount = 0;
let count = 0;
let chosenWord = "";

const canvas = document.getElementById("canvas");
const word = document.getElementById("word");
const categoriesContainer = document.getElementById("categories-container");
const letterContainer = document.getElementById("letter-container")
const userInputSection = document.getElementById("user-input-section")
const gameButtons = document.getElementById("game-buttons");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const textresult = document.getElementById("text-result");


//Create category buttons
function createButtonCategories(){
    categoriesContainer.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in categories) {
      buttonCon.innerHTML += `<button class="categories" onclick="generateWord('${value}')">${value}</button>`;
    }
    categoriesContainer.appendChild(buttonCon);
  };

//Word Generator
function generateWord(categoriesValue){
    let categoriesButtons = document.querySelectorAll(".categories");
    //If categoriesvalue matches the button innerText then highlight the button
    categoriesButtons.forEach((button) => {
      if (button.innerText.toLowerCase() === optionValue) {
        button.classList.add("active");
      }
      button.disabled = true;
    })
     //initially hide letters, clear previous word
  letterInput.classList.remove("hide");
  userInputSection.innerText = "";

  let categoriesArray = categories[categoriesValue];
  //choose random word
  chosenWord = categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;
}

//Pick a category and ramdobly select word 
function pickWord(){

}
