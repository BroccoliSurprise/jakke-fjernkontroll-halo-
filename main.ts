input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(8)
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
basic.showLeds(`
    # # . # #
    # # # # #
    . # # # .
    # # # # #
    # # . # #
    `)
haloDisplay.showRainbow(200, 360)
basic.forever(function () {
	
})
