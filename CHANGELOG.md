# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Setter for attribute `red`
- Setter for attribute `green`
- Setter for attribute `blue`
- Setter for attribute `alpha`
- Private static method `#hslToRgb`
- Setter for attribute `hue`
- Setter for attribute `saturation`
- Setter for attribute `lightness`

### Changed
- Private static method `#parseHsl` now uses new private static method `#hslToRgb`

## [1.1.0] - 2022-06-23
### Added
- Added this changelog
- Added README
- Post install script to automatically transpile typescript code
- `luminance` attribute, showing the relative lumincance as a float (0..1)
- `calculateLuminance` method, calculating the relative luminance according to diffrent lumincane algorithms
- `LuminanceAlgorithm` enum
  - `LINEAR_RGB = 0` [Standard algorithm to calculate relative luminance for linear rgb](https://en.wikipedia.org/wiki/Relative_luminance#Relative_luminance_and_%22gamma_encoded%22_colorspaces)
  - `W3C_AERT = 1` [Algorithm to calculate ralative luminance according to W3Cs Working Draft for AERT](https://www.w3.org/TR/AERT/#color-contrast)
  - `HSP = 2` [Algorithm to calculate brightness in HSP color space](https://alienryderflex.com/hsp.html)

### Changed
- Added dist/ directory to `.gitignore`

## [1.0.0] - 2022-06-22
### Added
- `red` attribute, showing the rgb red value as a float (1..255)
- `green` attribute, showing the rgb green value as a float (1..255)
- `blue` attribute, showing the rgb blue value as a float (1..255)
- `hue` attribute, showing the hsl hue value as a float in degrees
- `saturation` attribute, showing the hsl saturation value as a float (0..1)
- `lightness` attribute, showing the hsl lightness value as a float (0..1)
- `rgb` attribute, representing a rgb string
- `rgba` attribute, representing a rgba string
- `hex` attribute, representing a hex string
- `hexa` attribute, representing a hex string with alpha value
- `hsl` attribute, representing a hsl string
- `hsla` attribute, representing a hsla string
- `toRgb` method, returning a rgb string
- `toRgba` method, returning a rgba string
- `toHex` method, returning a hex string
- `toHsl` method, returning a hsl string
- `toHsla` method, returning a hsla string
- static `isRgbString` method, checking whether the input string is a valid rgb(a) string
- static `isHexString` method, checking whether the input string is a valid hex(a) string
- static `isHslString` method, checking whether the input string is a valid hsl(a) string
- static `isCssColorName` method, checking whether the input string is a valid css color name
- `[Symbol.toPrimitive]` method, returning…
  - the integer value of the hex color string when hint is `'number'`
  - the hsl string when hint is `'string'`
  - boolean whether lightness is greater than 0.5 when hint is `'default'`
- `[Symbol.toStringTag]` method, returning `'ColorConvert'`

