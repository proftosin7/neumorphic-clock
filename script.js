let today = new Date()

let a = ((today.getSeconds()) * 6) + 'deg'
let b = ((today.getMinutes()) * 6) + "deg"
let c = ((today.getHours()) * 30) + "deg"


let secondss = "rotate(" + a + ")"
document.querySelector(".seconds-hand").style.transform = String(secondss)

let minss = "rotate(" + b + ")"
document.querySelector(".minutes-hand").style.transform = String(minss)




let hrss = "rotate(" + c + ")"
document.querySelector(".hours-hand").style.transform = String(hrss)

function m_mark() {
    let ul = document.getElementsByClassName("minute-marks")

    for (i = 0; i < 1; i++) {
        let li = document.createElement("li")

        //if (i < 10) {
        //  i = "0" + i
        //}
        //li.innerText = `${i}`

        ul[0].appendChild(li)
    }
}
m_mark()

function secs() {
    let ul = document.getElementsByClassName("digit-seconds")

    for (i = today.getSeconds(); i < 61; i++) {
        let li = document.createElement("li")

        if (i < 10) {
            i = "0" + i
        }
        li.innerText = `${i}`

        ul[0].appendChild(li)
    }
}
secs()

function mins() {
    let ul = document.getElementsByClassName("digit-minutes")

    for (i = today.getMinutes(); i < 61; i++) {
        let li = document.createElement("li")

        if (i < 10) {
            i = "0" + i
        }
        li.innerText = `${i}`

        ul[0].appendChild(li)
    }
}
mins()

function hrs() {
    let ul = document.getElementsByClassName("digit-hours")

    for (i = today.getHours(); i < 25; i++) {
        let li = document.createElement("li")

        if (i < 10) {
            i = "0" + i
        }
        li.innerText = `${i}`

        ul[0].appendChild(li)
    }
}


hrs()



function digits() {
    let ul = document.getElementsByClassName("digits")

    for (i = 1; i < 13; i++) {
        let li = document.createElement("li")


        li.innerText = `${i}`

        ul[0].appendChild(li)
    }
}
digits()