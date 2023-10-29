//Create an object with the scrambled/correct key pair words
const word = {
    "ATARACTIC": "Antarctica",
    "CLAMBERS": "Scramble",
    "SPURRIES": "Surprise",
    "SATURANTO": "Astronaut",
    "REGIT": "Tiger",
    "CRETICK": "Cricket",
    "NUOPIACORC": "Cornucopia",
    "CAMERIA": "America",
    "PURREO": "Europe",
    "PLEAP": "Apple"
  };
  
  
  //define my variables to use in functions
  let scrambledWord = "";
  let correctWord = "";
  
  //Create a function so that when the user clicks the 'Get Word' button, it will randomly select a key from the word variable. This will be our srcambled word.
  function getScrambledWord(obj){
    document.getElementById("correct-word").textContent = "";
    document.getElementById("answer").value = "";
    let randomWordKey = Object.keys(obj)[Math.floor(Math.random()*Object.keys(obj).length)];
    document.getElementById("scrambled-word").textContent = randomWordKey;
     scrambledWord = document.getElementById("scrambled-word").textContent;
    console.log(`The generated scrambled word is ${scrambledWord}`);
    }
  
  //Function to provide the correct answer for the scrambled word.
  function getCorrectWord(scrambledWord){
      correctWord = word[scrambledWord];
  }
  
  //This function will display whether or not the user got the correct answer when they click 'Submit Answer' button. If correct - it will display the correct answer. If incorrect - it will ask user to try again
  function checkAnswer(){
    getCorrectWord(scrambledWord);
    console.log(`The correct word is ${correctWord}`);
    const answer = document.getElementById("answer").value;
    console.log(`Answer provided by user is ${answer}`);
    if (answer.toLowerCase() === correctWord.toLowerCase()){
  //Tell user that they got the correct answer in green text:
      document.getElementById("correct-word").style.color = "green";
      document.getElementById("correct-word").textContent = `Well done! You got the correct answer: ${correctWord}`;
    } else {
  //Tell user that they got the wrong answer in red text:
      document.getElementById("correct-word").style.color = "red";
      document.getElementById("correct-word").textContent = `Incorrect answer, please try again`;
    }
  }
  
  //Function for the 'Get Answer' button so that it will show the user the correct answer.
  function getCorrectAnswer(){
    getCorrectWord(scrambledWord);
    
    if(correctWord === undefined){
      document.getElementById("correct-word").textContent = `Please click 'Get Word' first`
    } else {  
    document.getElementById("correct-word").textContent = `The answer is ${correctWord}`
    }
  }
  