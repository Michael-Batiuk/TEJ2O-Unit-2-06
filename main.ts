/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Batiuk
 * Created on: Nov 2025
 * This program turns on and off an LED
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// a button
input.onButtonPressed(Button.A, function () {

    pins.digitalWritePin(DigitalPin.P16, 1)
})

// b button
input.onButtonPressed(Button.B, function () {

    pins.digitalWritePin(DigitalPin.P16, 0)
})