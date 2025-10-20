import { expect, test } from "vitest"
import { dicewarePTBR, getRandomInt } from "../src"
import { DicewareKey } from "../src/types"

test("Must generate valid random keys", () => {
    const keys = [
        dicewarePTBR.generateKey(),
        dicewarePTBR.generateKey(),
        dicewarePTBR.generateKey(),
        dicewarePTBR.generateKey(),
        dicewarePTBR.generateKey(),
        dicewarePTBR.generateKey()
    ]

    const uniqueKeys = new Set(keys)
    expect(uniqueKeys.size).greaterThan(3)

    const allKeysHave5Length = !keys.find(
        key => key.length != 5
    )
    expect(allKeysHave5Length).toBe(true)

    const regexDicewareKey = /^[1-6]{5}$/
    const allKeysHaveOnlyValidCharacters = !keys.find(
        key => !regexDicewareKey.test(key)
    )
    expect(allKeysHaveOnlyValidCharacters).toBe(true)
})

test("Must convert equally keys to word list index", () => {
    const allDicewareKeys = ((): DicewareKey[] => {
        const keys: DicewareKey[] = []

        for (let d1 = 1; d1 <= 6; d1++) {
            for (let d2 = 1; d2 <= 6; d2++) {
                for (let d3 = 1; d3 <= 6; d3++) {
                    for (let d4 = 1; d4 <= 6; d4++) {
                        for (let d5 = 1; d5 <= 6; d5++) {
                            keys.push(`${d1}${d2}${d3}${d4}${d5}` as DicewareKey)
                        }
                    }
                }
            }
        }

        return keys
    })()

    expect(dicewarePTBR.keyToIndex("11111")).toBe(0)
    expect(dicewarePTBR.keyToIndex("11112")).toBe(1)
    expect(dicewarePTBR.keyToIndex("11113")).toBe(2)

    expect(dicewarePTBR.keyToIndex("33333")).toBe(3110)
    expect(dicewarePTBR.keyToIndex("33334")).toBe(3111)
    expect(dicewarePTBR.keyToIndex("33335")).toBe(3112)

    expect(dicewarePTBR.keyToIndex("66664")).toBe(7773)
    expect(dicewarePTBR.keyToIndex("66665")).toBe(7774)
    expect(dicewarePTBR.keyToIndex("66666")).toBe(7775)

    expect(allDicewareKeys.length).toBe(7776)

    allDicewareKeys.forEach((value, index) => {
        expect(dicewarePTBR.keyToIndex(value)).toEqual(index)
    })
})

test("Must return words", () => {
    expect(dicewarePTBR.getWord("11111")).toEqual("abacate")
    expect(dicewarePTBR.getWord("11111")).toEqual(dicewarePTBR.words[0])
    expect(dicewarePTBR.getWord("23144")).toBeTypeOf("string")
})

test("Must generate random passphrase", () => {
    expect(dicewarePTBR.generatePhrase(6)).toBeTypeOf("string")
    expect(dicewarePTBR.generatePhrase(4).split(" ").length).toBe(4)
    expect(dicewarePTBR.generatePhrase(8).split(" ").length).toBe(8)
    expect(dicewarePTBR.generatePhrase(1).split(" ").length).toBe(1)

    const uniqueWordsInPassphrase = new Set(
        dicewarePTBR.generatePhrase(6).split(" ")
    )

    expect(uniqueWordsInPassphrase.size).greaterThan(3)
})

test("Must generate valid passphrase", () => {
    const phrase = dicewarePTBR.generatePhrase(999)
    const words = phrase.split("")

    words.forEach(word => {
        expect(word != "undefined").toBeTruthy()
        expect(word != "null").toBeTruthy()
        expect(word).toBeTruthy()
    })
})

test("Must generate valid int values", () => {
    const values = Array.from({ length: 100 }).map(() => (
        getRandomInt(10)
    ))

    expect(new Set(values).size).toBeGreaterThan(2)

    values.forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(0)
        expect(value).toBeLessThanOrEqual(10)
    })
})
