import type { DicewareKey } from "./types"
import { words } from "./words"

/**
 * Generates a random diceware key based on Math.random.
 * @returns Diceware Key ("11111"-"66666")
 */
const generateKey = (): DicewareKey => {
    let key = ""
    for (let i = 0; i < 5; i++) {
        key += Math.floor(Math.random() * 6 + 1)
    }
    return key as DicewareKey
}

/**
 * Converts a Diceware Key into a word list index.
 * @param key Diceware Key ("11111"-"66666")
 * @returns Word index (number from 0 to 7775)
 */
const keyToIndex = (key: DicewareKey): number => {
    let index = 0
    for (let i = 0; i < 5; i++) {
        const digit = parseInt(key.charAt(i), 10) - 1
        index = index * 6 + digit
    }
    return index
}

/**
 * Get the corresponding word of the Diceware Key.
 * @param key Diceware Key ("11111" - "66666")
 * @returns Corresponding word
 */
const getWord = (key: DicewareKey): string => {
    const index = keyToIndex(key)
    return words[index]!
}

/**
 * Generates a random passphrase.
 * @param wordsQuantity
 * @returns String following the format: "word1 word2 word3"
 */
const generatePhrase = (wordsQuantity: number): string => {
    let phrase = ""

    if (!wordsQuantity) return phrase

    for (let i = 0; i < wordsQuantity; i++) {
        if (i != 0) phrase += " "
        phrase += words[keyToIndex(generateKey())]
    }

    return phrase
}

export type { DicewareKey } from "./types"
export const dicewarePTBR = {
    words,
    generateKey,
    keyToIndex,
    getWord,
    generatePhrase
}
