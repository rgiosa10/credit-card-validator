function convertToArrayAndNumbers(text) {
  textArray = text.split("");
  for (let i = 0; i < textArray.length; i += 1) {
    textArray[i] = parseInt(textArray[i]);
    for (let i = 1; i < textArray.length; i += 2) {
    textArray[i] = textArray[i] * 2;
    }
  }
  return textArray;
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = document.getElementById("text-input1").value;

    console.log(convertToArrayAndNumbers(text))
  });
});