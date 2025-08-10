let currentDisplay = '';

// add (
function ClickOpenBracket() {
    let last = currentDisplay.slice(-1);
    if ((last >= '0' && last <= '9') || last == ')') {
        currentDisplay = currentDisplay + '*(';
    } else {
        currentDisplay = currentDisplay + '(';
    }
    document.querySelector('#display').value = currentDisplay;
}

// remove last char
function cut() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
}

// all clear
function allClear() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}

// add .
function ClickDecimal() {
    if (currentDisplay == "") {
        currentDisplay = "0."; // start with 0.
    } else {
        let intParts = currentDisplay.split(/[\+\-\*\/]/);
        let lastNumber = intParts[intParts.length - 1];
        if (!lastNumber.includes('.')) {
            if (lastNumber == "") {
                currentDisplay = currentDisplay + '0.'; // after +-* just add 0.
            } else {
                currentDisplay = currentDisplay + '.'; // normal add .
            }
        }
    }
    document.querySelector('#display').value = currentDisplay;
}

// add + - * /
function ClickSymbole(sym) {
    let lastChar = currentDisplay.slice(-1);
    if ("+*/".includes(lastChar) && sym == "-") {
        currentDisplay = currentDisplay + sym; // allow *- /-
    }
    else if ("+-*/".includes(lastChar)) {
        currentDisplay = currentDisplay.slice(0, -1) + sym; // replace last sym
    } else {
        currentDisplay = currentDisplay + sym; // add sym
    }
    document.querySelector('#display').value = currentDisplay;
}

// evaluate expression and show result or syntax error then reset to 0
function evaluate() {
    try {
        let result = eval(currentDisplay);

        if (
            result === undefined ||
            result === Infinity ||
            result === -Infinity ||
            Number.isNaN(result)
        ) {
            throw new Error("Invalid expression");
        }

        currentDisplay = result.toString();
        document.querySelector('#display').value = currentDisplay;
    } catch (e) {
        currentDisplay = "Syntax Error";
        document.querySelector('#display').value = currentDisplay;

        setTimeout(() => {
            currentDisplay = "0";
            document.querySelector('#display').value = currentDisplay;
        }, 100);
    }
}

window.addEventListener('load', () => {
    const alertBox = document.getElementById('alert-message');
    alertBox.style.display = 'block';

    // Fade in
    setTimeout(() => {
        alertBox.style.opacity = '1';
    }, 100);

    // Fade out after 3 seconds
    setTimeout(() => {
        alertBox.style.opacity = '1';
    }, 3100);

    // Hide completely after fade out
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3600);
});
