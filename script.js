let display = document.getElementById('display');

function appendValue(value) {
    display.textContent === '0' ? display.textContent = value : display.textContent += value;
}

function clearDisplay() {
    display.textContent = '0';
}

function calculate() {
    try {
        display.textContent = eval(display.textContent.replace('÷', '/').replace('×', '*'));
    } catch {
        display.textContent = 'Error';
    }
}
