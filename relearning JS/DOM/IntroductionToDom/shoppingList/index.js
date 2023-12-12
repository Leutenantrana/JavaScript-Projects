const ull = document.querySelector("ul");
const Btn = document.querySelector("button");
const inputElement = document.querySelector("input");

Btn.addEventListener("click", addelement);

function addelement() {
    var inputValue = inputElement.value;
    inputElement.value = " ";

    const newLine = document.createElement("li");
    const newText = document.createElement("span");
    const newButton = document.createElement("button");

    newLine.appendChild(newText);
    newLine.appendChild(newButton);
    newText.textContent = inputValue;
    ull.appendChild(newLine);
    newButton.textContent = 'Delete';

    newButton.addEventListener("click", () => {

        ull.removeChild(newLine);
    })
















}