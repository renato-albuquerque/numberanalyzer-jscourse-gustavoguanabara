let number = document.querySelector("#inputNumber")
let list = document.querySelector("#selectList")
let result = document.querySelector("#result")
let values = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) { /* Resultado -1: Valor não está no array. */
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumber(number.value) && !inList(number.value, values)) { /* É um número e não está na lista? Logo: add. */
    alert("All OK!")
    } else {
        alert("Invalid value or value not found in list.")
    }
}