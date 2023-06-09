
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerAlphabet  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet  = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0, 1, 2, 3, 4, 5, 6,7 ,8, 9]

let builtArray =[]


function generatePassword(){

    if(confirm("Do you want your password to contain lowercase letters?"))
    {
        builtArray = [...builtArray, ...lowerAlphabet];

    }
  
    if (confirm("Do you want your password to contain uppercase letters?")){
        builtArray = [...builtArray, ...upperAlphabet]
    }
   

    if(confirm("Do you want your password to contain numbers?")){
        builtArray = [...builtArray, ...numbers]
    }
    
    if(builtArray.length === 0){
        alert("Please enter at least one option")
        generatePassword()
    }
    
    let password = ""

    // password no less than 8 characters and no greater than 128 characters

    let passwordLength = prompt("How long would you like your password to be?")
    if (passwordLength < 8 ) {
        alert("Must be greater than 8")
        return false
    }
    if (passwordLength > 128){
        alert("Must be less than 128")
        return false
    }

    for (let i = 0; i < passwordLength; i++) {

    let generatedLetterIndex = Math.floor(Math.random() * builtArray.length);

        password += builtArray[generatedLetterIndex]

    }
    


    //string based off of randomly selected values from an array


    return password;
}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);