import fs from "fs/promises"

const updateWords = async () => {
    console.log(`\x1b[32m|\x1b[0m Updating "words" const...`)

    try {
        const text = await fs.readFile("words.txt", "utf8")

        const words = text
            .split(/\r?\n/)
            .map(w => w.trim())
            .filter(Boolean)

        const sortedWords = words.sort((a, b) =>
            a.localeCompare(b, "pt-BR", { sensitivity: "base" })
        )

        const newContent = sortedWords.join("\n") + "\n"
        await fs.writeFile("words.txt", newContent, "utf-8")

        await fs.writeFile(
            "./src/words.ts",
            `export const words = ${JSON.stringify(sortedWords, null, 4)} as const\n`
        )

        console.log(`\x1b[32m|\x1b[0m "words" const updated!`)

    } catch (error) {
        console.error(`Error on "words" update: \n${error}`)
    }
}

updateWords()
