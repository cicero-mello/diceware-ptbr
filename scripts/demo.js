import { dicewarePTBR } from "../dist/index.js"

let lines = 0

process.stdout.write('\x1B[?25l')

setInterval(() => {
    lines++
    if (lines === 1) console.clear()

    if (lines < 6) {
        console.log(dicewarePTBR.generatePhrase(4))
    }
    if (lines > 9) {
        lines = 0
    }
}, 480)
