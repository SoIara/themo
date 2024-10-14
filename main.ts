input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    while (true) {
        music.stopMelody(MelodyStopOptions.All)
        if (input.buttonIsPressed(Button.A)) {
            break;
        }
    }
})
basic.forever(function () {
    if (input.temperature() > 0) {
        music.play(music.tonePlayable(277, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
