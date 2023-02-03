# Interaktiv Colors

[![code style: ts-standard](https://img.shields.io/badge/code%20style-ts--standard-blue)](https://standardjs.com/)
![Version: 1.2.2](https://img.shields.io/badge/version-1.2.2-242424)

Color converter for JavaScript/TypeScript.

## Installation
```shell
# using yarn
$ yarn add @interaktiv.de/colors

# using npm
$ npm i -S @interaktiv.de/colors
```

## Usage
```ts
import Color from '@interaktiv/colors'

// Create new instance of Colors with hex code #ff6f61
const color = new Color('#ff6f61');

// set text color of all elements with class "coral" to hsl-string of color
[...document.querySelectorAll('.coral')]
  .forEach(element => element.style.color = color.hsl)

// function that checks whether the input color is light
const isColorLight = (color: Color|string): boolean => {
  if (color instanceof Color) return color.luminance > 0.5
  
  return (new Color(color).lumincance) > 0.5
}
```