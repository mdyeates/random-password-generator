// || Global Variables
var minPassLength = 10;
var maxPassLength = 64;
var userPrompt;
var passLength;
var wantLower;
var wantUpper;
var wantNumber;
var wantSpecial;

// || Function to prompt user for password options or cancel before loop
function getPasswordOptions() {
  userPrompt = prompt("Enter a number between 10 and 64.\nThis will generate the length of your password.");
  if (userPrompt === null) return;
  // converts the input into a number
  passLength = parseInt(userPrompt);
  // alert and loop if user does not select a number or password length parameter not met
  while (passLength < minPassLength || passLength > maxPassLength || isNaN(passLength)) {
    alert("Please enter a number between 10 and 64 to generate a password.");
    passLength = prompt("Enter a valid number to begin.\nThis will generate the length of your password.");
  }
  // password character selection
  wantLower = confirm("Generate a password including lower case characters?");
  wantUpper = confirm("Generate a password including upper case characters?");
  wantNumber = confirm("Generate a password including numbers?");
  wantSpecial = confirm("Generate a password including special characters?");
  // alert and loop if user does not select at least one type of character
  while (wantLower === false && wantUpper === false && wantNumber === false && wantSpecial === false) {
    alert("Please select at least one character type to continue");
    wantLower = confirm("Generate a password including lower case characters?");
    wantUpper = confirm("Generate a password including upper case characters?");
    wantNumber = confirm("Generate a password including numbers?");
    wantSpecial = confirm("Generate a password including special characters?");
  }
  return passLength;
}

// Function for getting a random element from an array
function getRandom(arr) {
  // get random index value
  var randomIndex = Math.floor(Math.random() * arr.length);
  // get random character
  var character = arr[randomIndex];
  return character;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  // determine whether to include character set in generated password and push to options array
  var options = [];
  if (wantLower === true) {
    options.push(lowerCasedCharacters);
  }
  if (wantUpper === true) {
    options.push(upperCasedCharacters);
  }
  if (wantNumber === true) {
    options.push(numericCharacters);
  }
  if (wantSpecial === true) {
    options.push(specialCharacters);
  }
  // loop to add random characters to generated password determined by user password length input
  var generatedPassword = "";
  for (var index = 0; index < passLength; index++) {
    var randomArray = getRandom(options);
    var randomCharacters = getRandom(randomArray);
    generatedPassword += randomCharacters;
  }

  return generatedPassword;
}

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
