function convertToArrayAndNumbers(text) {
  textArray = text.split("");
  for (let i = 0; i < textArray.length; i += 1) {
    textArray[i] = parseInt(textArray[i]);
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