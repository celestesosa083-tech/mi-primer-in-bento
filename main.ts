music.play(music.stringPlayable("C D E F G A B C5 ", 199), music.PlaybackMode.InBackground)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.InBackground)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showIcon(IconNames.Chessboard)
    basic.showString("Hola")
})
