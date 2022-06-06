music.playMelody("C5 A B D F G E A ", 120)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # # . # #
        . . . . .
        . . . . .
        `)
})
