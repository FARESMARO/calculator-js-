const inputText = document.querySelector("#calcul-box");
const iputButton = document.querySelectorAll("button");
function buttonPressed(val) {
  inputText.value += val;
}
function deletee() {
  inputText.value = "";
}
function calcul() {
  inputText.value = eval(inputText.value);
}
