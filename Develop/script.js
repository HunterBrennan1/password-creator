// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min + (1 - rand) + rand*max)
}

function getRandomItem(list){
  return list[randomInt(0, list.length - 1)]
}

function generatePassword(){

    var userInput = window.prompt("How long is your password?")
    var passwordLength = parseInt(userInput)

    if(isNaN(passwordLength)){
      window.alert("that is not a number")
      return
    } 

    if (passwordLength < 8 || passwordLength > 128){
      window.alert("password length must be between 8 and 128 characters")
      return
    }

    var userNumbers = window.confirm("would you like to include numbers in your password?")
    var userSymbols = window.confirm("would you like to include symbols in your password?")
    var userLowercase = window.confirm("would you like to include Lowercase letters in your password?")
    var userUppercase = window.confirm("would you like to include Uppercase letters in your password?")

    var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var optionsList = []

    for (var i = 0; i < lowercaseList.length; i++){
      uppercaseList[i] = lowercaseList[i].toUpperCase()
    }

    if (userNumbers === true){
      optionsList.push(numberList)
    }

    if (userSymbols === true){
      optionsList.push(symbolList)
    }

    if (userLowercase === true){
      optionsList.push(lowercaseList)
    }

    if (userUppercase === true){
      optionsList.push(uppercaseList)
    }

    if(optionsList.length === 0){
      optionsList.push(lowercaseList)
    }

    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++){
      var randomList = getRandomItem(optionsList)
      var randomChar = getRandomItem(randomList)
      console.log(randomChar)
    }

  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
