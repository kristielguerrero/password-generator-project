// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var LowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharletters =  [ '^', '?', ':',  ',', ')','(','}','{', ']','[','~', '-', '_', '.'];
var numbersChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function generatePassword() {
  var bigArray = []
  var password = ""; 
  var passwordLength = parseInt(prompt("How long should your password be? (8-128"))
  console.log(typeof passwordLength)
  console.log(typeof 8)
  if(passwordLength < 8){
    alert("Make sure password is between 8-128")
    return
  }
  if(passwordLength>128){
    alert("Make sure your length is less than 128");
    return
  }

  var upperCase = confirm("Do you want uppercase?");
  console.log(upperCase)

  var lowerCase = confirm("Do you want lowercase?");
  console.log(lowerCase)

  var numbers = confirm("Do you want numbers?");
  console.log(numbers)

  var specialChar = confirm("Do you want special characters?")
  console.log(specialChar);
  // if(typeof passwordLength) {

  if(upperCase === true){
    bigArray=bigArray.concat(upperCaseletters);
  }

  if(lowerCase === true){
    bigArray=bigArray.concat(LowerCaseLetters);
  }

  if(specialChar === true){
    bigArray=bigArray.concat(specialCharletters);
  }

  if(numbers === true){
    bigArray=bigArray.concat(numbersChar);
  }
  console.log(bigArray)

  // const passwordText  = (upperCaseletters, LowerCaseLetters, specialChar, numbersChar)
  // const generatePassword = bigArray[Math.floor(Math.random() * passwordLength)];
  // console.log(generatePassword, passwordLength[generatePassword]);

  var index = Math.floor(Math.random() * bigArray)
  console.log(Math.floor(Math.random() * bigArray))

  return password
  
for (i =  8; i < 128; i++){

}

}
generateBtn.addEventListener("click", writePassword);
