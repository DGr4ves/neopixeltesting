input.onButtonPressed(Button.A, function () {
    strip.setBrightness(255)
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
    strip.setBrightness(250)
    strip.setPixelColor(0, neopixel.rgb(120, 255, 200))
    strip.setBrightness(240)
    strip.setPixelColor(1, neopixel.rgb(50, 2, 54))
    strip.setBrightness(230)
    strip.setPixelColor(2, neopixel.rgb(3, 16, 200))
    strip.setBrightness(220)
    strip.setPixelColor(3, neopixel.rgb(75, 87, 23))
    strip.setBrightness(210)
    strip.setPixelColor(4, neopixel.rgb(29, 90, 1))
    strip.setBrightness(200)
    strip.setPixelColor(5, neopixel.rgb(255, 233, 76))
    strip.setBrightness(190)
    strip.setPixelColor(6, neopixel.rgb(36, 153, 168))
    strip.setBrightness(180)
    strip.setPixelColor(7, neopixel.rgb(153, 71, 221))
    strip.setBrightness(170)
    strip.setPixelColor(8, neopixel.rgb(23, 176, 93))
    strip.setBrightness(160)
    strip.setPixelColor(9, neopixel.rgb(253, 133, 53))
    strip.setBrightness(150)
    strip.setPixelColor(10, neopixel.rgb(12, 175, 132))
    strip.setBrightness(140)
    strip.setPixelColor(11, neopixel.rgb(35, 12, 175))
    strip.setBrightness(130)
    strip.setPixelColor(12, neopixel.rgb(164, 23, 174))
    strip.setBrightness(120)
    strip.setPixelColor(13, neopixel.rgb(2, 64, 4))
    strip.setBrightness(110)
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
