let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let putEl = document.getElementById("put-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function nib() {
    count += 5
    countEl.textContent = count
    putEl.textContent = "PUTOS"
}

