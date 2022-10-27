# Credit Card Validator

#### By Ruben Giosa

#### It is a program that checks if a credit card number is valid. 

## Technologies Used

* JavaScript
* HTML
* CSS
* Bootstrap
* Markdown
* TDD

## Description

This program uses three steps to check the digits of a number in order to validate it. The three steps are: 1) using Luhn's Algorithm, which is widely used today in creating and validating credit card, account, and ID numbers 2) Validate the First Digits of the Credit Card Number (e.g. Amex cards always begin with the numbers 34 or 37.) and 3) Validate the Length of the Credit Card Number (e.g. Amex 15 digits vs Visa/MC/Discovery 16 digits).

## Setup/Installation Requirements

* Go to https://github.com/rgiosa10/credit-card-validator.git to find the specific repository for this website.
* Then open your terminal. I recommend going to your Desktop directory (command: $ cd Desktop).
* Then clone the project by inputting: $ git clone https://github.com/rgiosa10/credit-card-validator.git
* Go to the new directory (command: $ cd credit-card-validator) or open the directory folder on your desktop.
* Finally, locate the index.html file and double-click to open. That will open the app on your web browser.
* Here is a link to the site on Git Hub Pages: https://rgiosa10.github.io/credit-card-validator

## Tests

```
Describe: convertToArrayAndNumbers()

Test: "It coverts string to Array"
Code: 
const text: "0998445533334452";
convertToArray(text);
Expected Output: ["0","9","9","8","4", etc]

Test: "It coverts elements in array into numbers from strings"
Code: convertToArrayAndCheck("0998445533334452");
Expected Output: [0,9,9,8,4, etc]

Test: "It multiplies every other element in the array by 2"
Code: convertToArrayAndCheck("0998445533334452");
Expected Output: [0,18,9,16,4, etc]

Test: "It adds the two digits of element where they were multiplied by two and it is now two digits"
Code: convertToArrayAndCheck("0998445533334452");
Expected Output: [0,9,9,7,4, etc]

Describe: addArrayElements();

Test: "It adds all of the values of textArray together for a total"
Code: addArrayElements(textArray);
let textArray: [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2, 0]
Expected Output: 52

Describe: companyCheck();

Test: "It checks if this CC was issued by accredited company. Visa cards begin with the number 4. 
Code: companyCheck(text);
const text: "4102080860435620"
Expected Output: "Visa"

Test: "It checks if this CC was issued by accredited company. MC cards begin with the number 5. 
Code: companyCheck(text);
const text: "5102080860435620"
Expected Output: "MC"

Test: "It checks if this CC was issued by accredited company. Discover cards begin with the number 6. 
Code: companyCheck(text);
const text: "6102080860435620"
Expected Output: "Discover"

Test: "It checks if this CC was issued by accredited company. American Express cards always begin with the numbers 34 or 37. 
Code: companyCheck(text);
const text: "3402080860435620"
Expected Output: "Amex"

Test: "It checks if the length of elments for the CC number is valid length as part of beginning number check" 
Code: companyCheck(text);
const text: "3402080860435620"
Expected Output: "a Non-accredited Company"

```

## Known Bugs

* Need to integrate incorrect input catcher to prevent issues with letters and characters being inputted. 

## License

MIT License

Copyright (c) 2022 Ruben Giosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.