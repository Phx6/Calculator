const calculator = document.querySelector(".container")
const key = document.querySelector(".buttons")
const display = document.querySelector(".display")
let previousAction = ""
let result = 0
let firstNumber = 0
let SecondNumber = 0
let operatorPressed = false;
if (display.innerHTML === "") {
    display.innerHTML = 0
}

key.addEventListener('click', e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action
        const content = key.innerHTML;
        const displayed = display.innerHTML
        if (!action) {
            if (displayed === "0" || operatorPressed == true) {
                display.innerHTML = content
                operatorPressed = false;
            }
            else {
                display.innerHTML = displayed + content
            }

        }

        if (action == "decimal" && !display.innerHTML.includes(".")) {
            display.innerHTML = displayed + "."
        }
        if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ) {
            if (firstNumber === 0) {
                firstNumber = parseFloat(display.innerHTML)
                previousAction = action
            }
            else if (previousAction != "") {
                secondNumber = parseFloat(display.innerHTML)
                calculate(firstNumber, previousAction, secondNumber)
                previousAction = action
                firstNumber = result
            }

            operatorPressed = true;

        }
        if (action === "calculate") {

            calculate(firstNumber, previousAction, parseFloat(display.innerHTML))
        }
        if (action === "clear") {
            firstNumber = 0;
            secondNumber = 0;
            display.innerHTML = 0;
        }



    }
})

const calculate = (f, op, s) => {
    console.log(f, op, s)
    if (op === "add") {
        result = f + s
    }
    if (op === "subtract") {
        result = f - s
    }
    if (op === "divide") {
        result = f / s
    }
    if (op === "multiply") {
        result = f * s
    }

    previousAction = ""
    updateDisplay(result)
    firstNumber = 0

}
const updateDisplay = (results) => {
    display.innerHTML = results
}

//actions: calculate, divide, clear, multiply, subtract, add, decimal, 

