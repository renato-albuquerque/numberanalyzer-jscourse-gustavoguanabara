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
    values.push(Number(number.value))
    let item = document.createElement("option")
    item.text = `Value ${number.value} added.`
    list.appendChild(item)
    result.innerHTML = ""   /* Quando add um número, o texto inferior (id result) é apagado. */
    } else {
        alert("Invalid value or value already added in the list.")
    }

    number.value = ""
    number.focus()
}

function finalize() {
    if(values.length == 0) {
        alert("Please, add values in the list.")
    } else {
        let total = values.length
        let highestValue = values[0]
        let lowestValue = values [0]
        let sum = 0
        let average = 0

        for(let pos in values) {    
            sum += values[pos]
            if(values[pos] > highestValue)  /* Para checar maior e menor valor. */
                highestValue = values[pos]
            if(values[pos] < lowestValue)
                lowestValue = values[pos]
        }
        average = sum / total

        result.innerHTML = ""
        result.style.fontWeight = "bolder"
        result.innerHTML += `<p>- In total, there are ${total} registered number(s).</p>`
        result.innerHTML += `<p>- The highest value is ${highestValue}.</p>`
        result.innerHTML += `<p>- The lowest value is ${lowestValue}.</p>`
        result.innerHTML += `<p>- The sum of values is ${sum}.</p>`
        result.innerHTML += `<p>- The average of values is ${average}.</p>`
    }
}