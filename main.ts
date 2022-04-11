input.onButtonPressed(Button.A, function () {
    Rotate = 1
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
})
input.onButtonPressed(Button.B, function () {
    if (Rotate == 1) {
        strip.clear()
        Rotate = 0
    }
    strip.setPixelColor(0, neopixel.rgb(120, 255, 200))
    strip.setPixelColor(1, neopixel.rgb(50, 2, 54))
    strip.setPixelColor(2, neopixel.rgb(3, 16, 200))
    strip.setPixelColor(3, neopixel.rgb(75, 87, 23))
    strip.setPixelColor(4, neopixel.rgb(29, 90, 1))
    strip.setPixelColor(5, neopixel.rgb(255, 233, 76))
    strip.setPixelColor(6, neopixel.rgb(36, 153, 168))
    strip.setPixelColor(7, neopixel.rgb(153, 71, 221))
    strip.setPixelColor(8, neopixel.rgb(23, 176, 93))
    strip.setPixelColor(9, neopixel.rgb(253, 133, 53))
    strip.setPixelColor(10, neopixel.rgb(12, 175, 132))
    strip.setPixelColor(11, neopixel.rgb(35, 12, 175))
    strip.setPixelColor(12, neopixel.rgb(164, 23, 174))
    strip.setPixelColor(13, neopixel.rgb(2, 64, 4))
    strip.setPixelColor(14, neopixel.rgb(56, 12, 231))
})
let strip: neopixel.Strip = null
let Rotate = 0
Rotate = 0
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.forever(function () {
    strip.show()
    if (Rotate == 1) {
        basic.pause(200)
        strip.rotate(1)
    }
})
