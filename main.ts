let Calculator = 0
let cal2 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(Calculator + cal2)
})
input.onButtonPressed(Button.A, function () {
    Calculator += 1
})
input.onButtonPressed(Button.AB, function () {
    Calculator = 0
})
input.onButtonPressed(Button.B, function () {
    Calculator += -1
})
input.onGesture(Gesture.Shake, function () {
    cal2 = Calculator
})
basic.forever(function () {
	
})
