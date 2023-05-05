const buttonsList = document.querySelectorAll(".grid-container button");
const outputContainer = document.getElementById("input");
const clearButton = document.getElementById("clear");

for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].addEventListener("click", onButtonClick)
}


function onClear() {
    outputContainer.value = "";
}

clearButton.addEventListener("click", onClear);


function onButtonClick(event) {
    let target = event.target;
    let currentValue = target.innerText;
    let enteredValue = outputContainer.value;
    const operators = ["+", "-", "*", "/"];
    let lastKey = enteredValue[enteredValue.length - 1];

    if (operators.includes(lastKey) && operators.includes(currentValue)) {
        let newExp = enterdValue.slice(0, enteredValue.length - 1) + currentValue;
        outputContainer.value = newExp;

    }
    else if (currentValue === "=") {
        const result = eval(enteredValue);
        outputContainer.value = result;

    }
    else {
        outputContainer.value = outputContainer.value + currentValue
    }
}

