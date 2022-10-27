# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Tests

```
Describe: convertToArrayAndNumbers();

Test: "It coverts string to Array"
Code: convertToArray("CATS CATERED THE EVENT");
text: "0998445533334452"
Expected Output: ["0","9","9","8","4", etc]

Test: "It coverts elements in array into numbers from strings"
Code: convertToArrayAndCheck("CATS CATERED THE EVENT");
textArray: ["0","9","9","8","4", etc]
Expected Output: [0,9,9,8,4, etc]

Test: "It multiplies every other element in the array by 2"
Code: convertToArrayAndCheck("CATS CATERED THE EVENT");
textArray: [0,9,9,8,4, etc]
Expected Output: [0,18,9,16,4, etc]

Test: "It adds the two digits of element where they were multiplied by two and it is now two digits"
Code: convertToArrayAndCheck("CATS CATERED THE EVENT");
textArray: [0,18,9,16,4, etc]
Expected Output: [0,9,9,7,4, etc]

Describe: addArrayElements(textArray);

Test: "It adds all of the values of textArray together for a total"
Code: validCheck(textArray);
textArray: [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2, 0]
Expected Output: 52

```

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_
