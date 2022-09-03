import {progressBar} from "./api.js";

let checkbox1 = document.querySelector("#checkbox1")
let checkbox2 = document.querySelector("#checkbox2")

let circularProgress = document.querySelector(".circle")
let progressText = document.querySelector(".progressText")
let myInput = document.getElementById("progress")

let validate = true
let count = 0

let x = progressBar.Normal.progress_value

if ((x > 100) || (x < 0)) {
    progressText.textContent = `Value (0-100)`
    progressText.style.color = 'red'
    validate = false
} else {
    validate = true
    progressText.style.color = 'black'
    progressText.textContent = 'Value'
}

if (validate == true) {
    circularProgress.style.background = `conic-gradient(#005dfe ${x * 3.6}deg, #edf2f5 0deg)`
} else
    circularProgress.style.background = `conic-gradient(#005dfe 0deg, #edf2f5 0deg)`

if (progressBar.Animated.isAnimate == true) {
    let rotate = setInterval(() => {
        count++
        circularProgress.style.transform = `rotate(${count}deg)`
        checkbox1.checked = true
        if (progressBar.Animated.isAnimate == false) {
            clearInterval(rotate)
            circularProgress.style.transform = `rotate(0deg)`
            checkbox1.checked = false
            count = 0
        }
    }, 10)
}

if (progressBar.Hidden.isHide == true) {
    circularProgress.style.opacity = `0`
    checkbox2.checked = true
} else {
    circularProgress.style.opacity = `1`
    checkbox2.checked = false
}

myInput.addEventListener("input", () => {
    let y = document.getElementById("progress").value;
    if ((y > 100) || (y < 0)) {
        progressText.textContent = `Value (0-100)`
        progressText.style.color = 'red'
        validate = false
    } else {
        validate = true
        progressText.style.color = 'black'
        progressText.textContent = 'Value'
    }
})

myInput.addEventListener("blur", (event) => {
    x = event.target.value
    let progressStart = 0,
        progressEnd = x,
        speed = 20
    if (validate) {
        let progress = setInterval(() => {
            if (progressEnd == 0) {
                circularProgress.style.background = `conic-gradient(#005dfe 0deg, #edf2f5 0deg)`
            } else
                progressStart++
            circularProgress.style.background = `conic-gradient(#005dfe ${progressStart * 3.6}deg,#edf2f5 0deg)`
            if (progressStart == progressEnd) {
                clearInterval(progress)
            }
        }, speed)
    }
})

checkbox1.addEventListener("change", () => {
    if (checkbox1.checked == true) {
        let rotate = setInterval(() => {
            count++
            circularProgress.style.transform = `rotate(${count}deg)`
            if (checkbox1.checked == false) {
                clearInterval(rotate)
                circularProgress.style.transform = `rotate(0deg)`
                count = 0
            }
        }, 10)
    }
})

checkbox2.addEventListener("change", () => {
    if (checkbox2.checked == true) {
        circularProgress.style.opacity = `0`

    } else
        circularProgress.style.opacity = `1`
})

