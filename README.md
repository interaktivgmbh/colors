# Color Convert

[![code style: ts-standard](https://img.shields.io/badge/code%20style-ts--standard-blue)](https://standardjs.com/)
![Version: 1.0.0](https://img.shields.io/badge/version-1.0.0-242424)

Simple color converter for JavaScript.


## Installation

```shell
# using yarn
yarn add git+ssh://git@code.interaktiv.de:mkuehnapfel/color-converter.git

# using npm
npm i -S git+ssh://git@code.interaktiv.de:mkuehnapfel/color-converter.git
```


## Usage

```typescript
import ColorConvert as Color from 'color-convert'

// Create new instance of ColorConvert with hex code #ff6f61
const color = new Color('#ff6f61');

// set text color of all elements with calss "coral" to "hsl(5.32deg 100% 69.02%)"
[...document.querySelectorAll('.coral')]
    .forEach(element => element.style.color = color.hsl)

// function that checks whether the input color (string) is light
const isColorLight = (color: string): boolean => (new Color(color)).luminance > 0.5
```