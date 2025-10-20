# diceware-ptbr
[![npm](https://img.shields.io/npm/v/diceware-ptbr)](https://www.npmjs.com/package/diceware-ptbr)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/diceware-ptbr)](https://bundlephobia.com/package/diceware-ptbr)

<img alt="demo" src="https://raw.githubusercontent.com/cicero-mello/diceware-ptbr/refs/heads/main/demo.gif" style="max-height: 240px;"/>

Brazilian portuguese diceware list with useful functions.
*Free, typed and easy to use.*

---
---

### General Usage Example:
```typescript
import { dicewarePTBR } from "diceware-ptbr"

console.log(
    dicewarePTBR.generatePhrase(4)
)
```

### Properties from ``dicewarePTBR`` object:

| Property          | Description                                           | Example                                           |
|-------------------|-------------------------------------------------------|---------------------------------------------------|
| `words`           | Array with all 7776 words from the diceware list      | ``dicewarePTBR.words``                            |
| `generatePhrase`  | Generates a random passphrase based on words quantity | ``dicewarePTBR.generatePhrase(8)``                |
| `generateKey`     | Generates a random Diceware Key                       | ``dicewarePTBR.generateKey()``                    |
| `keyToIndex`      | Converts a Diceware Key into a word list index        | ``dicewarePTBR.keyToIndex("11111")``             |
| `getWord`         | Get the corresponding word based on a Diceware Key    | ``dicewarePTBR.getWord("11111")``                 |

### Types:

| Name              | Description                                           | Example                                           |
|-------------------|-------------------------------------------------------|---------------------------------------------------|
| `DicewareKey`     | String with 5 number characters from "1" to "6".      | ``"11111"``, ``"66666"``, ``"12346"``...          |


---
---

## Notes
- All words have between 4 and 7 letters.
- Problematic words have been avoided.
- Excessive variations of the same word (such as verb conjugation) have been avoided.
- Extremely little-known words have been avoided.
- You can manually check all current used words [here](https://github.com/cicero-mello/diceware-ptbr/blob/main/src/words.ts).

## Tips
- Brazilian Portuguese has accentuation, so do not use this diceware in projects with fonts without such support.
- Warn your user that sentences with negative interpretations may arise due to the randomness of words (even with a set of words avoiding huge offenses, the random combination of words can generate a sentence that can be interpreted in a pejorative way about something)

## Speaks portuguese? Fell free to improve the list! 😊
You can find more information about how to do that [here](https://gist.github.com/cicero-mello/1ad2669a5edf7584b3d8057b3108bd45).
