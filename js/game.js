
//Options values for buttons
let options = {
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
     countries:[
         "brazil",
         "mexico",
         "portugal",
         "italy",
         "france",
         "germany",
         "turkey"
     ]
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

// References from HTML
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("categories-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const resultText = document.getElementById("result-text");

//Display option buttons
function displayOptions() {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
function blockButton() {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

//Pick random word
function generateWord (optionValue){
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');  

  //Display each element as span
  userInputSection.innerHTML = displayItem;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let letterArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (letterArray.includes(button.innerText)) {
        letterArray.forEach((letter, index) => {
          //if character in array is same as clicked button
          if (letter === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = letter;
            //increment counter
            winCount += 1;
            //if winCount equals word lenfth
            if (winCount == letterArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              //block all buttons
              blockButton();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        hangman(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blockButton();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  document.getElementById('hanger').removeAttribute('hidden'); 
  document.getElementById('span1').removeAttribute('hidden');
  eraseHangman();
};

function eraseHangman(){
    document.getElementById('span7').setAttribute('hidden', true);
    document.getElementById('leg2').setAttribute('hidden', true);
    document.getElementById('head').setAttribute('hidden',true);
    document.getElementById('body').setAttribute('hidden', true);
    document.getElementById('arm1').setAttribute('hidden', true);
    document.getElementById('arm2').setAttribute('hidden', true);
    document.getElementById('leg1').setAttribute('hidden', true);
    document.getElementById('span2').setAttribute('hidden', true);
    document.getElementById('span3').setAttribute('hidden', true);
    document.getElementById('span4').setAttribute('hidden', true);
    document.getElementById('span5').setAttribute('hidden', true);
    document.getElementById('span6').setAttribute('hidden', true);
}
//draw the man
function hangman(count) {
    switch (count) {
        case 1:
          document.getElementById('hanger').setAttribute('hidden', true);
          document.getElementById('head').removeAttribute('hidden');
          document.getElementById('span1').setAttribute('hidden', true);
          document.getElementById('span2').removeAttribute('hidden');
          break;
        case 2:
          document.getElementById('head').setAttribute('hidden',true);
          document.getElementById('body').removeAttribute('hidden');
          document.getElementById('span2').setAttribute('hidden', true);
          document.getElementById('span3').removeAttribute('hidden');
          break;
        case 3:
          document.getElementById('body').setAttribute('hidden', true);
          document.getElementById('arm1').removeAttribute('hidden');
          document.getElementById('span3').setAttribute('hidden', true);
          document.getElementById('span4').removeAttribute('hidden');
          break;
        case 4:
          document.getElementById('arm1').setAttribute('hidden', true);
          document.getElementById('arm2').removeAttribute('hidden');
          document.getElementById('span4').setAttribute('hidden', true);
          document.getElementById('span5').removeAttribute('hidden');
          break;
        case 5:
          document.getElementById('arm2').setAttribute('hidden', true);
          document.getElementById('leg1').removeAttribute('hidden');
          document.getElementById('span5').setAttribute('hidden', true);
          document.getElementById('span6').removeAttribute('hidden');
          break;
        case 6:
          document.getElementById('leg1').setAttribute('hidden', true);
          document.getElementById('leg2').removeAttribute('hidden');
          document.getElementById('span6').setAttribute('hidden', true);
          document.getElementById('span7').removeAttribute('hidden');
          break;
        default:
          break;
      }
    }

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;