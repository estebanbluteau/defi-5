let nombre = 0
let etatpasse = 0
let etatactuel = 0
basic.forever(function () {
    etatactuel = pins.digitalReadPin(DigitalPin.P16)
    if (etatactuel != etatpasse && etatactuel == 1) {
        nombre += 1
        basic.showString("1")
    } else if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
    }
})
