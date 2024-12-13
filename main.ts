let myNumber = randint(1, 100)
let a = 0
let pokus = 1

basic.pause(50)
// Display instructions on start
basic.showString("Guess:")

// Main guessing loop
basic.forever(function () {
    // Button A decreases the guess
    if (input.buttonIsPressed(Button.A)) {
        a -= 1
        if (a < 1) {
            a = 1 // Limit guess to minimum 1
        }
        whaleysans.showNumber(a)
    }

    // Button B increases the guess
    if (input.buttonIsPressed(Button.B)) {
        a += 1
        if (a > 100) {
            a = 100 // Limit guess to maximum 100
        }
        whaleysans.showNumber(a)
    }

    // Logo confirms the guess
    if (input.logoIsPressed()) {
        if (a === myNumber) {
            basic.showString("Correct!")
            basic.showString("Tries:")
            basic.showNumber(pokus)
        } else if (a > myNumber) {
            basic.showString("Too High")
            pokus += 1
        } else {
            basic.showString("Too Low")
            pokus += 1
        }
    }
})
