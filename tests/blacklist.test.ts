import { expect, test } from "vitest"
import { dicewarePTBR } from "../src"
import { BLACKLIST } from "./blacklist"
import fs from "fs/promises"

test("List should not contain words that depending on the context may be problematic", () => {

    const problematicWords: string[] = []

    dicewarePTBR.words.forEach((word) => {
        if (BLACKLIST.includes(word.toLowerCase())) {
            problematicWords.push(word)
        }
    })

    expect(problematicWords).toEqual([])
})

test(`Words in "blacklist.txt" must coincide with words in "blacklist.ts"`, async () => {
    const textFromTxt = await fs.readFile("blacklist.txt", "utf8")

    const wordsFromTxt = textFromTxt
        .split(/\r?\n/)
        .map(w => w.trim())
        .filter(Boolean)

    wordsFromTxt.forEach((_, i) => {
        expect(wordsFromTxt[i]).toEqual(BLACKLIST[i])
    })
})
