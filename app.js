// animation
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});

let clr = document.querySelector(".clr");
let dis = document.querySelector(".dis");
let ans = document.querySelector(".ans");

let currentInput = "";

const appendNumber = (number) => {
    currentInput += number;
    dis.textContent = currentInput;
};

const appendOperator = (operator) => {
    if (currentInput.length > 0 && !['+', '-', '*', '/'].includes(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        dis.textContent = currentInput;
    }
};

const clearDisplay = () => {
    currentInput = "";
    dis.textContent = currentInput;
    ans.textContent = currentInput;
};

const calculateResult = () => {
    try {
        console.log("Calculating: ", currentInput);

        let res = eval(currentInput); 
        console.log("Result: ", res);

        ans.textContent = res;
        currentInput = res.toString(); 
    } catch (e) {

        console.error("Error in calculation: ", e);

        ans.textContent = "Error";
    }
};