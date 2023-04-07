# Password-generator
## User Story

AS A developer
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides security

## Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

I ran into a few challenges with this but was able to complete this by 
- adding arrays in order to create the letter and numbers.
- creating the function confirm to ask in the generator if the user wanted to use uppercase leters, lowercase letter, and numbers.
- creating a for loop to tie the password length together.
- creating a password length that will alert user if it is less than 8 characters or over 128
