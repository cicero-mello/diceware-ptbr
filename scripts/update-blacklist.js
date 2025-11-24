import fs from "fs/promises"

const updateWords = async () => {
    console.log(`\x1b[32m|\x1b[0m Updating "BLACKLIST" const...`)

    try {
        const text = await fs.readFile("blacklist.txt", "utf8")

        const words = text
            .split(/\r?\n/)
            .map(w => w.trim())
            .filter(Boolean)

        const sortedWords = words.sort((a, b) =>
            a.localeCompare(b, "pt-BR", { sensitivity: "base" })
        )

        const newContent = sortedWords.join("\n") + "\n"
        await fs.writeFile("blacklist.txt", newContent, "utf-8")

        await fs.writeFile(
            "./tests/blacklist.ts",
            `export const BLACKLIST = ${JSON.stringify(sortedWords, null, 4)}\n`
        )

        console.log(`\x1b[32m|\x1b[0m "BLACKLIST" const updated!`)

    } catch (error) {
        console.error(`Error on "BLACKLIST" update: \n${error}`)
    }
}

updateWords()
