
function display(value) {
    document.getElementById("textArea").value += value;
}
function calculate() {
    let value = document.getElementById("textArea").value;
    let answer = eval(value);
    document.getElementById("textArea").value = answer;
}
function clr() {
    document.getElementById("textArea").value = '';
}