# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.1] - 2025-11-23

### Changed

- Word list update


## [3.0.0] - 2025-11-23

### Changed

- **Breaking changes:** `words` is now a readonly array and cannot be mutated

- Architecture changes, now using TXT files and scripts to facilitate contributions


## [2.0.3] - 2025-11-20

### Fixed

- README grammar errors


## [2.0.2] - 2025-10-31

### Changed

- Word list update


## [2.0.1] - 2025-10-31

### Changed

- Word list update


## [2.0.0] - 2025-10-19

### Added

- Random generator `getRandomInt()` based on `crypto.getRandomValues()`
- This CHANGELOG file

### Changed

- **Breaking changes:** Replaced `Math.random()` with `crypto.getRandomValues()` for cryptographically secure random generation. Now requires Crypto API support.

### Fixed

- JSDoc visibility on `dicewarePTBR` properties


## [1.x.x]

### Added

- All base features
- Diceware 7776 word list
- Diceware key generator (using `Math.random()`)
- Function to convert Diceware key to word list index
- Function to get word based on `DicewareKey`
- Diceware phrase generator
- Type `DicewareKey` (`"11111"` to `"66666"`)
