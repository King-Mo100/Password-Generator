//
//options of password characters to choose from

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
//this function would return the password length as well as choices of charracters
// the user will be asked to enter a number betweet 10-64 if the user fails to do so they will be prompted again and so on
// the user will also be given options of what they would like to include in their passwords.
//the choiceArr would hold the choices of characters that the password would be generated from.
// the user would need to confirm atleast one of these options otherwhise it would be undefined
//if the user confirms any of the choices then that would be added to the choiceArr

function getPasswordOptions() { 
  var passwordLength = parseInt(prompt ("Choose a password length between 10 - 64 characters"));

  while (isNaN (passwordLength) || passwordLength < 10 || passwordLength > 64) {
    alert("Please enter a number between 10-64");
     passwordLength = parseInt(prompt ("Choose a password length between 10 - 64 characters"));
    }

    var choiceArr= [];
//if user confirms, special characters would be added to the choiceArr

  if (confirm("Would you like special characters? ($@%&*, etc)")){
    choiceArr = choiceArr.concat(specialCharacters);
  }

  if (confirm("Would you like to include numbers?")){
    choiceArr = choiceArr.concat(numericCharacters);
  }
  if (confirm("Would you like lowercase?")){
    choiceArr = choiceArr.concat(lowerCasedCharacters);

  }
  if (confirm("would you like uppercase?")){
    choiceArr = choiceArr.concat(upperCasedCharacters);

  }
  return {passwordLength: passwordLength, choiceArr: choiceArr};

}

// Function for getting a random element from an array
// this function would then generate a random number between 0 and 1
// the number would then be multiplied by the length of the array
// the math.floor would then round the number down to the nearest whole number

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
// based on the user prompts choices of characters and length would determin the length and options to choose from
//

function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var passwordLength = passwordOptions.passwordLength;
  var choiceArr = passwordOptions.choiceArr;
  var password = '';

  for (var i = 0; i < passwordLength; i++){
    password += getRandom(choiceArr);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);