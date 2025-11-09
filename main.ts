/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Michael Batiuk
* Created on: Nov 2025
* This program turns on and off an LED
*/


basic.clearScreen()
basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.A, function () {
    //Turns on LED
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})


input.onButtonPressed(Button.B, function () {
    //Turns off LED
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
