// || Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// || Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// || Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// || Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// || Function to prompt user for password options
function getPasswordOptions() {
  var userPrompt = prompt("Enter a number to begin.\nThis will generate the length of your password.");
  // converts the input into a number
  var passLength = parseInt(userPrompt);
  // alert and loop if user does not select a number or password length parameter not met
  while (passLength < 10 || passLength > 64 || isNaN(passLength)) {
    alert("Do or do not, there is no try.\nPlease enter a number between 10 and 64 to generate a password.");
    var passLength = prompt("Enter a number to begin.\nThis will generate the length of your password.");
  }
  // password character confirm
  alert(
    "Please press OK to include a set of characters that will be generated with your password. Otherwise press CANCEL if you do not wish to include that set of characters."
  );
  var wantLower = confirm("Generate with lower case characters?");
  var wantUpper = confirm("Generate with upper case characters?");
  var wantNumber = confirm("Generate with numbers?");
  var wantSpecial = confirm("Generate with special characters?");
  // alert and loop if user does not select at least one type of character
  while (wantLower === false && wantUpper === false && wantNumber === false && wantSpecial === false) {
    alert(
      "You cannot pass! I am a servant of the Secret Fire, wielder of the flame of Anor. The dark fire will not avail you, flame of Udûn.\nGo back to the dark and select at least one character set!\nYOU! SHALL NOT! PASS!"
    );
    var wantLower = confirm("Generate with lower case characters?");
    var wantUpper = confirm("Generate with upper case characters?");
    var wantNumber = confirm("Generate with numbers?");
    var wantSpecial = confirm("Generate with special characters?");
  }
  return [passLength, wantLower, wantUpper, wantNumber, wantSpecial];
}
// Function for getting a random element from an array
function getRandom(arr) {
  // get random index value
  var randomIndex = Math.floor(Math.random() * arr.length);
  // get random character
  var character = arr[randomIndex];
  return character;
}
console.log(getRandom(specialCharacters));

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
