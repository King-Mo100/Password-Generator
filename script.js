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
function getPasswordOptions() { 
  var passwordLength = parseInt(prompt ("Choose a password length between 10 - 64 characters"));

  //if these are false then the user would be alerted to enter a number between 10 - 64
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

function getRandom(arr) {
  return arr[Math.floor(math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var passwordLength = passwordOptions.passwordLength

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