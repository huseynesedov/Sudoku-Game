let emptyCells = document.querySelectorAll('td:not(.given-number)');
const candidateSwitch = document.querySelector("#candidate-switch");
const numberControls = document.querySelectorAll(".number-control");
let selectedCell;

emptyCells.forEach(cell => {
    cell.addEventListener("click", (e) => {
        emptyCells.forEach(td => td.classList.remove("selected"))
        e.target.classList.add("selected");
        selectedCell = e.target;
    })
})

numberControls.forEach(num => {
    num.addEventListener("click", (e) => {
        if (selectedCell) {
            if (candidateSwitch.checked) {
                let txt = selectedCell.firstElementChild.innerText;
                if (!txt.includes(e.target.innerText)) {

                    selectedCell.firstElementChild.innerText += e.target.innerText;
                } else {
                    selectedCell.firstElementChild.innerText = txt.replace(e.target.innerText, "");
                }

            } else {
                selectedCell.lastElementChild.innerText = e.target.innerText;
            }
        }

    })
})