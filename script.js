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
    if(l.indexOf(Number(n)) != -1) { /* Result -1: Value isn't in array. */
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumber(number.value) && !inList(number.value, values)) { /* It's a number and isn't in list? So: add. */
    values.push(Number(number.value))
    let item = document.createElement("option")
    item.text = `Value ${number.value} added.`
    list.appendChild(item)
    result.innerHTML = ""   /* When add a number, the bottom text (id result) is erased. */
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
            if(values[pos] > highestValue)  /* To check highest and lowest value. */
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
        result.innerHTML += `<p>- The average of values is ${average.toFixed(2).replace(".", ",")}.</p>`
    }
}