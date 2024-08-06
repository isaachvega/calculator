function appendNumber(number) {
    var display = document.getElementById('display');
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    var display = document.getElementById('display');
    display.value += operator;
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = "";
}

function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
