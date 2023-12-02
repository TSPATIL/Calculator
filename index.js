document.getElementById('one').addEventListener('click', () => {
    document.getElementById('result').value += '1'
})
document.getElementById('two').addEventListener('click', () => {
    document.getElementById('result').value += '2'
})
document.getElementById('three').addEventListener('click', () => {
    document.getElementById('result').value += '3'
})
document.getElementById('four').addEventListener('click', () => {
    document.getElementById('result').value += '4'
})
document.getElementById('five').addEventListener('click', () => {
    document.getElementById('result').value += '5'
})
document.getElementById('six').addEventListener('click', () => {
    document.getElementById('result').value += '6'
})
document.getElementById('seven').addEventListener('click', () => {
    document.getElementById('result').value += '7'
})
document.getElementById('eight').addEventListener('click', () => {
    document.getElementById('result').value += '8'
})
document.getElementById('nine').addEventListener('click', () => {
    document.getElementById('result').value += '9'
})
document.getElementById('zero').addEventListener('click', () => {
    document.getElementById('result').value += '0'
})
document.getElementById('openB').addEventListener('click', () => {
    document.getElementById('result').value += '('
})
document.getElementById('closeB').addEventListener('click', () => {
    document.getElementById('result').value += ')'
})
document.getElementById('plus').addEventListener('click', () => {
    document.getElementById('result').value += '+'
})
document.getElementById('minus').addEventListener('click', () => {
    document.getElementById('result').value += '-'
})
document.getElementById('multiply').addEventListener('click', () => {
    document.getElementById('result').value += '*'
})
document.getElementById('delete').addEventListener('click', () => {
        document.getElementById('result').value = document.getElementById('result').value.slice(0, document.getElementById('result').value.length - 1);
})
document.getElementById('quotient').addEventListener('click', () => {
    document.getElementById('result').value += '/'
})
document.getElementById('dot').addEventListener('click', () => {
    document.getElementById('result').value += '.'
})
document.getElementById('power').addEventListener('click', () => {
    document.getElementById('result').value += '^'
})

document.getElementById('equal').addEventListener('click', () => {
    let expression = document.getElementById('result').value;
    if (!expression) {
        alert('Enter Mathematical expression');
    }
    else {
        expression = expression.replace(/\^/g, '**');
        const calculateFunction = new Function('return ' + expression);
        const result = calculateFunction();
        document.getElementById('result').value = result;
    }
})