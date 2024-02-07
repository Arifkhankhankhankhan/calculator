document.addEventListener('DOMContentLoaded', function () {
    let display = document.querySelector('input[type="text"]');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.classList.contains('operator')) {
                handleOperator(button.innerText);
            } else if (button.classList.contains('equalBtn')) {
                calculate();
            } else {
                addToDisplay(button.innerText);
            }
        });
    });

    function addToDisplay(value) {
        display.value += value;
    }

    function handleOperator(operator) {
        if (operator === 'Ac') {
            clearDisplay();
        } else if (operator === 'Del') {
            deleteLastChar();
        } else {
            addToDisplay(operator);
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastChar() {
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
});