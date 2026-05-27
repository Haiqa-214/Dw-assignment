// Inputs
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("customTip");
const peopleInput = document.getElementById("people");

// Output
const totalTipText = document.getElementById("totalTip");
const grandTotalText = document.getElementById("grandTotal");
const perPersonText = document.getElementById("perPerson");

// Errors
const billError = document.getElementById("billError");
const peopleError = document.getElementById("peopleError");

// Tip Buttons
const tipButtons = document.querySelectorAll(".tip-btn");

let selectedTip = 0;

// Tip Button Click
tipButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectedTip = Number(button.innerText.replace("%", ""));

    tipInput.value = "";

    calculateBill();
  });
});

// Custom Tip Input
tipInput.addEventListener("input", function () {
  selectedTip = Number(tipInput.value);

  calculateBill();
});

// Bill Input
billInput.addEventListener("input", calculateBill);

// People Input
peopleInput.addEventListener("input", calculateBill);

// Main Function
function calculateBill() {
  let bill = Number(billInput.value);

  let people = Number(peopleInput.value);

  // Clear Errors
  billError.innerText = "";

  peopleError.innerText = "";

  // Validation
  if (bill <= 0) {
    billError.innerText = "Enter valid bill amount";

    return;
  }

  if (people <= 0) {
    peopleError.innerText = "People must be at least 1";

    return;
  }

  // Calculations
  let totalTip = (bill * selectedTip) / 100;

  let grandTotal = bill + totalTip;

  let perPerson = grandTotal / people;

  // Show Results
  totalTipText.innerText = totalTip.toFixed(2);

  grandTotalText.innerText = grandTotal.toFixed(2);

  perPersonText.innerText = perPerson.toFixed(2);
}

// Reset Button
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  billInput.value = "";

  tipInput.value = "";

  peopleInput.value = "";

  totalTipText.innerText = "0";

  grandTotalText.innerText = "0";

  perPersonText.innerText = "0";

  billError.innerText = "";

  peopleError.innerText = "";

  selectedTip = 0;
});
