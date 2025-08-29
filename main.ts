oled.init()
oled.setContrast(255)
basic.forever(function () {
    oled.drawText(
    "Hello",
    0,
    0,
    false,
    false
    )
})
