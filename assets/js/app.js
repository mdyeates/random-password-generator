// || Global Variables
var wantLower;
var wantUpper;
var wantNumber;
var wantSpecial;

// || Function to prompt user for password options
function getPasswordOptions() {
  var userPrompt = prompt("Enter a number to begin.\nThis will generate the length of your password.");
  // converts the input into a number
  passLength = parseInt(userPrompt);
  // alert and loop if user does not select a number or password length parameter not met
  while (passLength < 10 || passLength > 64 || isNaN(passLength)) {
    alert("Do or do not, there is no try.\nPlease enter a number between 10 and 64 to generate a password.");
    passLength = prompt("Enter a number to begin.\nThis will generate the length of your password.");
  }
  // password character confirm
  alert(
    "Please press OK to include a set of characters that will be generated with your password. Otherwise press CANCEL if you do not wish to include that set of characters."
  );
  wantLower = confirm("Generate with lower case characters?");
  wantUpper = confirm("Generate with upper case characters?");
  wantNumber = confirm("Generate with numbers?");
  wantSpecial = confirm("Generate with special characters?");
  // alert and loop if user does not select at least one type of character
  while (wantLower === false && wantUpper === false && wantNumber === false && wantSpecial === false) {
    alert(
      "You cannot pass! I am a servant of the Secret Fire, wielder of the flame of Anor. The dark fire will not avail you, flame of Udûn.\nGo back to the dark and select at least one character set!\nYOU! SHALL NOT! PASS!"
    );
    wantLower = confirm("Generate with lower case characters?");
    wantUpper = confirm("Generate with upper case characters?");
    wantNumber = confirm("Generate with numbers?");
    wantSpecial = confirm("Generate with special characters?");
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
