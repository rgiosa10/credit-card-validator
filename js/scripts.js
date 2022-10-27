// Business Logic



function companyCheck(text) {
  cleanString = text.trim()

  let accCompany = "";
  if ((cleanString.charAt(0) === "4") && (cleanString.length === 16)) {
    accCompany = "Visa";
    console.log(accCompany);
  } else if ((cleanString.charAt(0) === "5") && (cleanString.length === 16)) {
    accCompany = "MC";
    console.log(accCompany);
  } else if ((cleanString.charAt(0) === "6") && (cleanString.length === 16)) {
    accCompany = "Discover";
    console.log(accCompany);
  } else if (((cleanString.charAt(0) === "3") && (cleanString.charAt(1) === "4") && (cleanString.length === 15)) || ((cleanString.charAt(0) === "3") && (cleanString.charAt(1) === "7") && (cleanString.length === 15))) {
    accCompany = "Amex";
  } else {
    accCompany = "a Non-accredited Company";
    console.log(accCompany);
  }
  return accCompany;
}


function convertToArrayAndNumbers(text) {
  let textArray = text.trim().split("");
  for (let i = 0; i < textArray.length; i += 1) {
    textArray[i] = parseInt(textArray[i]);
  };
  for (let i = 1; i < textArray.length; i += 2) {
    textArray[i] = textArray[i] * 2;
  };
  for (let i = 0; i < textArray.length; i += 1) {
    if (textArray[i] > 9) {
      let numberToString = textArray[i].toString();
      textArray[i] = parseInt(numberToString.charAt(0)) + parseInt(numberToString.charAt(1));
    };
  };
  console.log(textArray)
  return textArray;
};

function addArrayElements(textArray) {
  let sumOfArray = 0;
  textArray.forEach(function(element) {
    sumOfArray += element;
  });
  return sumOfArray;
};

// UI Logic

window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = document.getElementById("text-input1").value;
    let div = document.querySelector("div");
    let textArray = convertToArrayAndNumbers(text);
    let results = addArrayElements(textArray);
    let accCompanyOutput = companyCheck(text);

    let resultMessage = results;
    if ((parseInt(results.toString().charAt(1)) === 0) || (accCompanyOutput === "a Non-accredited Company")) {
      resultMessage = "This card number is NOT valid.";
    } else {
      resultMessage = "This card number is valid.";
    };
    
    div.append(resultMessage);
    div.append(" This credit card number is from " + accCompanyOutput)
  });
});