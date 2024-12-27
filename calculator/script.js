const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";

updateDisplay();

function updateDisplay() {
  display.value = displayValue;
}

keys.addEventListener("click", function (e) {
  const element = e.target;
  if (!element.matches("button")) return;

  if (element.classList.contains("operator")) {
    return;
  }

  if (element.classList.contains("decimal")) {
    inputDecimal();
    updateDisplay();
    return;
  }

  if (element.classList.contains("clear")) {
    clearDisplay();
    updateDisplay();
    return;
  }
  inputNumber(element.value);
  updateDisplay();
});

//!Functions
function inputNumber(value) {
  displayValue = displayValue === "0" ? value : displayValue + value;
}

function inputDecimal() {
  if (displayValue.endsWith(".")) return; //eğer sayı . ile bitiyorsa, . ekleme.
  if (displayValue.includes(".")) return; //eğer sayıda .varsa, . ekleme.
  if (displayValue == 0) return; //eğer sayı 0 ile bitiyorsa, . ekleme.
  displayValue += ".";
}

function clearDisplay() {
  displayValue = 0;
}
