input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    if (state == "x1") {
        X1 = counter
        counter = 0
        basic.showIcon(IconNames.Yes)
        basic.showNumber(counter)
        state = "y1"
    } else if (state == "y1") {
        y1 = counter
        counter = 0
        basic.showIcon(IconNames.Yes)
        basic.showNumber(counter)
        state = "x2"
    } else if (state == "x2") {
        X2 = counter
        counter = 0
        basic.showIcon(IconNames.Yes)
        basic.showNumber(counter)
        state = "y2"
    } else if (state == "y2") {
        y2 = counter
        counter = 0
        basic.showIcon(IconNames.Yes)
    } else {
        let M = 0
        b = (y1 - X1) / (y2 - X2)
        basic.showString("Y=" + M + X1 + "+" + b)
    }
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    basic.showNumber(counter)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(X1)
    basic.pause(500)
    basic.showNumber(counter)
})
let b = 0
let y2 = 0
let X2 = 0
let y1 = 0
let X1 = 0
let state = ""
let counter = 0
basic.showString("X1")
counter = 0
state = "x1"
