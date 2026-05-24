const BillInput = document.getElementById("billInput");
const CustomTipInput = document.getElementById("CustomTipInput");
const PersonInput = document.getElementById("personInput");
const buttonContainer = document.getElementById("buttonContainer");

const ResetButton = document.getElementById("resetButton");

const TipAmount = document.getElementById("TipAmount");
const Total = document.getElementById("Total");

let tipPercent = 0;

function calTip() {
    //confirm values
    if (BillInput.value === '') return
    if (PersonInput.value === '') PersonInput.value = 1
    //get value from the input and be sure they're number
    const billValue = Number(BillInput.value);
    const people = Number(PersonInput.value);
    //calculate the tip and total and put them inside the p
    const Tip = (billValue * (tipPercent / 100)) / people;
    const total = (Tip * people + billValue) / people;
    //used toFixed to ensure they seem like $0,00
    TipAmount.innerHTML = `$${Tip.toFixed(2)}`;
    Total.innerHTML = `$${total.toFixed(2)}`;
    updateResetButton();
}

buttonContainer.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        buttonContainer.querySelectorAll("button").forEach((btn) => {
            btn.classList.remove("bg-Green-400", "text-Green-900");
            btn.classList.add("bg-Green-900", "text-white");
        });
        e.target.classList.add("bg-Green-400", "text-Green-900");
        e.target.classList.remove("bg-Green-900", "text-white");

        let clickedButton = e.target.innerText;
        //this is used to delete % from the value
        tipPercent = Number(clickedButton.slice(0, -1));
        calTip();
    })
});

BillInput.addEventListener("input", calTip);

PersonInput.addEventListener("input", calTip);

CustomTipInput.addEventListener("input", () => {
    tipPercent = Number(CustomTipInput.value);
    calTip();
});

//upddate reset button style
function updateResetButton() {
    if (TipAmount.innerHTML !== "$0.00" || Total.innerHTML !== "$0.00") {
        ResetButton.classList.remove("bg-Green-800", "cursor-not-allowed");
        ResetButton.classList.add("bg-Green-400", "cursor-pointer", "hover:bg-Grey-200");

    } else {
        ResetButton.classList.remove("bg-Green-400", "cursor-pointer", "hover:bg-Grey-200");
        ResetButton.classList.add("bg-Green-800", "cursor-not-allowed");
    }
}

ResetButton.addEventListener("click", () => {
    TipAmount.innerHTML = "$0.00";
    Total.innerHTML = "$0.00";
    BillInput.value = "";
    PersonInput.value = "";
    CustomTipInput.value = "";
    tipPercent = 0;
    updateResetButton();
})