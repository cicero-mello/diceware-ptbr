import { expect, test } from "vitest"
import { dicewarePTBR } from "../src"
import fs from "fs/promises"

test("List must have 7776 words", () => {
    expect(dicewarePTBR.words.length).toBe(7776)
})

test("List must not contain duplicate words", () => {
    const uniqueWords = new Set<string>()
    const duplicatedWords: string[] = []

    dicewarePTBR.words.forEach((word) => {
        if (uniqueWords.has(word)) duplicatedWords.push(word)
        else uniqueWords.add(word)
    })

    expect(duplicatedWords).toEqual([])
})

test("List must be in alphabetic order", () => {
    const normalizeWord = (word: string): string => (
        word
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
    )

    const sortedWords = [...dicewarePTBR.words].sort((a, b) => {
        const normalizedA = normalizeWord(a)
        const normalizedB = normalizeWord(b)
        return normalizedA.localeCompare(normalizedB)
    })

    expect(dicewarePTBR.words).toEqual(sortedWords)
})

test("Words must have at least 4 letters", () => {
    const wordWithLessThan4Letters = dicewarePTBR.words.find(
        word => word.length < 4
    )

    expect(wordWithLessThan4Letters).toBe(undefined)
})

test("Words must have max of 7 letters", () => {
    const wordWithMoreThan7Letters = dicewarePTBR.words.find(
        word => word.length > 7
    )

    expect(wordWithMoreThan7Letters).toBe(undefined)
})

test("Words must use PTBR Alphabet without hyphens", () => {
    const regex = /^[a-záàâãéêíóôõúçA-ZÁÀÂÃÉÊÍÓÔÕÚÇ]+$/

    const notPTBRWord = dicewarePTBR.words.find(
        word => !regex.test(word)
    )

    expect(notPTBRWord).toBe(undefined)
})

test(`Words in "words.txt" must coincide with words in "words.ts"`, async () => {
    const textFromTxt = await fs.readFile("words.txt", "utf8")

    const wordsFromTxt = textFromTxt
        .split(/\r?\n/)
        .map(w => w.trim())
        .filter(Boolean)

    wordsFromTxt.forEach((_, i) => {
        expect(wordsFromTxt[i]).toEqual(dicewarePTBR.words[i])
    })
})
