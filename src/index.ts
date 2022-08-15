type RegExResult = [string, string, string]|[string, string, string, string]
type RgbaValues = [number, number, number, number]
type CssColorNames = 'black'|'silver'|'gray'|'white'|'maroon'|'red'|'purple'|'fuchsia'|'green'|'lime'|'olive'|'yellow'|'navy'|'blue'|'teal'|'aqua'|'orange'|'aliceblue'|'antiquewhite'|'aquamarine'|'azure'|'beige'|'bisque'|'blanchedalmond'|'blueviolet'|'brown'|'burlywood'|'cadetblue'|'chartreuse'|'chocolate'|'coral'|'cornflowerblue'|'cornsilk'|'crimson'|'darkblue'|'darkcyan'|'darkgoldenrod'|'darkgray'|'darkgreen'|'darkgrey'|'darkkhaki'|'darkmagenta'|'darkolivegreen'|'darkorange'|'darkorchid'|'darkred'|'darksalmon'|'darkseagreen'|'darkslateblue'|'darkslategray'|'darkslategrey'|'darkturquoise'|'darkviolet'|'deeppink'|'deepskyblue'|'dimgray'|'dimgrey'|'dodgerblue'|'firebrick'|'floralwhite'|'forestgreen'|'gainsboro'|'ghostwhite'|'gold'|'goldenrod'|'greenyellow'|'grey'|'honeydew'|'hotpink'|'indianred'|'indigo'|'ivory'|'khaki'|'lavender'|'lavenderblush'|'lawngreen'|'lemonchiffon'|'lightblue'|'lightcoral'|'lightcyan'|'lightgoldenrodyellow'|'lightgray'|'lightgreen'|'lightgrey'|'lightpink'|'lightsalmon'|'lightseagreen'|'lightskyblue'|'lightslategray'|'lightslategrey'|'lightsteelblue'|'lightyellow'|'limegreen'|'linen'|'mediumaquamarine'|'mediumblue'|'mediumorchid'|'mediumpurple'|'mediumseagreen'|'mediumslateblue'|'mediumspringgreen'|'mediumturquoise'|'mediumvioletred'|'midnightblue'|'mintcream'|'mistyrose'|'moccasin'|'navajowhite'|'oldlace'|'olivedrab'|'orangered'|'orchid'|'palegoldenrod'|'palegreen'|'paleturquoise'|'palevioletred'|'papayawhip'|'peachpuff'|'peru'|'pink'|'plum'|'powderblue'|'rosybrown'|'royalblue'|'saddlebrown'|'salmon'|'sandybrown'|'seagreen'|'seashell'|'sienna'|'skyblue'|'slateblue'|'slategray'|'slategrey'|'snow'|'springgreen'|'steelblue'|'tan'|'thistle'|'tomato'|'turquoise'|'violet'|'wheat'|'whitesmoke'|'yellowgreen'|'rebeccapurple'

export default class ColorConvert {
  static #RGB_STRING_REGEX = /^rgb\( *(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) +(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) +(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) *(\/ *(?:\d{1,2}|100)%)?\)|rgb\( *(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) *, *(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) *, *(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) *\)|rgba\( *(\d{1,2}|1\d{2}|2[0-4]\d25[0-5]) *, *(\d{1,2}|1\d{2}|2[0-4]\d25[0-5]) *, *(\d{1,2}|1\d{2}|2[0-4]\d25[0-5]) *, *(0?\.\d+|1(?:\.0+)?) *\)$/
  static #HEX_STRING_REGEX = /^#(?:([\da-f])([\da-f])([\da-f])([\da-f])?|([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?)$/
  static #HSL_STRING_REGEX = /^hsl\( *(-?(?:\d+(?:\.\d+)?|0?\.\d+)(?:deg|g?rad|turn)?) *, *(\d{1,2}(?:\.\d+)?|100)% *, *(\d{1,2}(?:\.\d+)?|100)%*\)|hsla\( *(-?(?:\d+(?:\.\d+)?|0?\.\d+)(?:deg|g?rad|turn)?) *, *(\d{1,2}(?:\.\d+)?|100)% *, *(\d{1,2}(?:\.\d+)?|100)% *, *(0?\.\d+|1(?:\.0+)) *\)|hsl\( *(-?(?:\d+(?:\.\d+)?|0?\.\d+)(?:deg|g?rad|turn)?) +(\d{1,2}(?:\.\d+)?|100)% +(\d{1,2}(?:\.\d+)?|100)%(?: *| *\/ *((?:\d{1,2}(?:\.\d+)?|100)%|1(?:\.0+)?|0?\.\d+) *)\)$/
  static #CSS_COLORS: Record<CssColorNames, RgbaValues> = {
    black: [0, 0, 0, 1],
    silver: [192, 192, 192, 1],
    gray: [128, 128, 128, 1],
    white: [255, 255, 255, 1],
    maroon: [128, 0, 0, 1],
    red: [255, 0, 0, 1],
    purple: [128, 0, 128, 1],
    fuchsia: [255, 0, 255, 1],
    green: [0, 128, 0, 1],
    lime: [0, 255, 0, 1],
    olive: [128, 128, 0, 1],
    yellow: [255, 255, 0, 1],
    navy: [0, 0, 128, 1],
    blue: [0, 0, 255, 1],
    teal: [0, 128, 128, 1],
    aqua: [0, 255, 255, 1],
    orange: [255, 165, 0, 1],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    blanchedalmond: [255, 228, 196, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    oldlace: [253, 245, 230, 1],
    olivedrab: [107, 142, 35, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    whitesmoke: [245, 245, 245, 1],
    yellowgreen: [154, 205, 50, 1],
    rebeccapurple: [102, 51, 153, 1]
  }

  #red: number
  #green: number
  #blue: number
  #alpha: number

  #hue: number
  #saturation: number
  #lightness: number

  get red (): number { return this.#red }
  set red (newValue: number) {
    if (newValue < 0 || newValue > 255) throw new SyntaxError('"red" must be an integer between 0 and 255')

    this.#red = newValue;
    [this.#hue, this.#saturation, this.#lightness] = this.#getHsl()
  }

  get green (): number { return this.#green }
  set green (newValue: number) {
    if (newValue < 0 || newValue > 255) throw new SyntaxError('"green" must be an integer between 0 and 255')

    this.#green = newValue;
    [this.#hue, this.#saturation, this.#lightness] = this.#getHsl()
  }

  get blue (): number { return this.#blue }
  set blue (newValue: number) {
    if (newValue < 0 || newValue > 255) throw new SyntaxError('"blue" must be an integer between 0 and 255')

    this.#blue = newValue;
    [this.#hue, this.#saturation, this.#lightness] = this.#getHsl()
  }

  get alpha (): number { return this.#alpha }
  set alpha (newValue: number) {
    if (newValue < 0 || newValue > 1) throw new SyntaxError('"alpha" must be a float between 0 and 1')

    this.#alpha = newValue;
    [this.#hue, this.#saturation, this.#lightness] = this.#getHsl()
  }

  get hue (): number { return this.#hue }
  get saturation (): number { return this.#saturation }
  get lightness (): number { return this.#lightness }

  get rgb (): string { return this.toRgb() }
  get rgba (): string { return this.toRgba() }
  get hex (): string { return this.toHex() }
  get hexa (): string { return this.toHex({ omitAlphaOnFullOpacity: false }) }
  get hsl (): string { return this.toHsl() }
  get hsla (): string { return this.toHsla() }

  get luminance (): number { return this.calculateLuminance() }

  constructor (input: string) {
    if (ColorConvert.isRgbString(input)) {
      [this.#red, this.#green, this.#blue, this.#alpha] = ColorConvert.#parseRgb(input)
    } else if (ColorConvert.isHexString(input)) {
      [this.#red, this.#green, this.#blue, this.#alpha] = ColorConvert.#parseHex(input)
    } else if (ColorConvert.isHslString(input)) {
      [this.#red, this.#green, this.#blue, this.#alpha] = ColorConvert.#parseHsl(input)
    } else if (ColorConvert.isCssColorName(input)) {
      [this.#red, this.#green, this.#blue, this.#alpha] = ColorConvert.#parseCssColor(input as CssColorNames)
    } else {
      throw new SyntaxError('input is not a valid color')
    }
    [this.#hue, this.#saturation, this.#lightness] = this.#getHsl()
  }

  toRgb ({
    spaceSeparated = true,
    omitAlphaOnFullOpacity = true,
    alphaInPercent = true
  }: { spaceSeparated?: boolean, omitAlphaOnFullOpacity?: boolean, alphaInPercent?: boolean } = {}): string {
    if (spaceSeparated) {
      return `rgb(${ColorConvert.#roundTwoDecimals(this.red)} ${ColorConvert.#roundTwoDecimals(this.green)} ${ColorConvert.#roundTwoDecimals(this.blue)}${this.alpha === 1 && omitAlphaOnFullOpacity ? '' : ` / ${alphaInPercent ? `${this.#alpha * 100}%` : this.alpha}`})`
    } else {
      return `rgb(${ColorConvert.#roundTwoDecimals(this.red)}, ${ColorConvert.#roundTwoDecimals(this.green)}, ${ColorConvert.#roundTwoDecimals(this.blue)})`
    }
  }

  toRgba (): string {
    return `rgba(${ColorConvert.#roundTwoDecimals(this.red)}, ${ColorConvert.#roundTwoDecimals(this.green)}, ${ColorConvert.#roundTwoDecimals(this.#blue)}, ${this.#alpha})`
  }

  toHex ({
    preferShortNotation = true,
    omitAlphaOnFullOpacity = true
  }: { preferShortNotation?: boolean, omitAlphaOnFullOpacity?: boolean } = {}): string {
    const values = [this.red, this.green, this.blue, this.alpha].map((it, idx) => idx === 3 ? Math.round((it * 0xff)).toString(16) : Math.round((it)).toString(16))
    if (omitAlphaOnFullOpacity && this.alpha === 1) values.pop()

    if (preferShortNotation && values.every(it => /^(\w)\1$/.test(it))) {
      return `#${values.map(it => it[0]).join('')}`
    }
    return `#${values.join('')}`
  }

  toHsl ({
    spaceSeparated = true,
    omitAlphaOnFullOpacity = true,
    alphaInPercent = true,
    hueUnit = 'deg'
  }: { spaceSeparated?: boolean, omitAlphaOnFullOpacity?: boolean, alphaInPercent?: boolean, hueUnit?: 'deg'|'rad'|'grad'|'turn' } = {}): string {
    if (spaceSeparated) {
      return `hsl(${this.#hue2UnitString(hueUnit)} ${ColorConvert.#roundTwoDecimals(this.saturation * 100)}% ${ColorConvert.#roundTwoDecimals(this.lightness * 100)}%${this.alpha === 1 && omitAlphaOnFullOpacity ? '' : ` / ${alphaInPercent ? `${this.#alpha * 100}%` : this.alpha}`})`
    }
    return `hsl(${this.#hue2UnitString(hueUnit)}, ${ColorConvert.#roundTwoDecimals(this.saturation * 100)}%, ${ColorConvert.#roundTwoDecimals(this.lightness * 100)}%)`
  }

  toHsla ({ hueUnit = 'deg' }: { hueUnit?: 'deg'|'rad'|'grad'|'turn' } = {}): string {
    return `hsl(${this.#hue2UnitString(hueUnit)}, ${ColorConvert.#roundTwoDecimals(this.saturation * 100)}%, ${ColorConvert.#roundTwoDecimals(this.lightness * 100)}%, ${ColorConvert.#roundTwoDecimals(this.alpha)})`
  }

  calculateLuminance (algorithm: LuminanceAlgorithm = LuminanceAlgorithm.LINEAR_RGB): number {
    switch (algorithm) {
      case LuminanceAlgorithm.LINEAR_RGB:
        return (0.2126 * this.red + 0.7152 * this.green + 0.0722 * this.blue) / 0xff
      case LuminanceAlgorithm.W3C_AERT:
        return (0.299 * this.red + 0.587 * this.green + 0.114 * this.blue) / 0xff
      case LuminanceAlgorithm.HSP:
        return Math.sqrt(0.299 * this.red ** 2 + 0.587 * this.green ** 2 + 0.114 * this.blue ** 2) / 0xff
    }
  }

  #getHsl (): [number, number, number] {
    const [red, green, blue] = [
      this.red / 0xff,
      this.green / 0xff,
      this.blue / 0xff
    ]
    const max = Math.max(red, green, blue)
    const min = Math.min(red, green, blue)
    const delta = max - min

    const light = (max + min) / 2

    const hue = delta === 0
      ? 0
      : max === red
        ? 60 * (((green - blue) / delta) % 6)
        : max === green
          ? 60 * (((blue - red) / delta) + 2)
          : 60 * (((red - green) / delta) + 4)

    const sat = delta === 0
      ? 0
      : delta / (1 - Math.abs(2 * light - 1))

    return [hue, sat, light]
  }

  #hue2UnitString (unit: 'deg'|'rad'|'grad'|'turn' = 'deg'): string {
    switch (unit) {
      case 'rad':
        return `${ColorConvert.#roundTwoDecimals(this.hue * Math.PI / 180)}rad`
      case 'grad':
        return `${ColorConvert.#roundTwoDecimals(this.hue / 0.9)}grad`
      case 'turn':
        return `${ColorConvert.#roundTwoDecimals(this.hue / 360)}turn`
      default:
        return `${ColorConvert.#roundTwoDecimals(this.hue)}deg`
    }
  }

  static #parseRgb (str: string): RgbaValues {
    const match = str.match(ColorConvert.#RGB_STRING_REGEX)
      ?.slice(1)
      ?.filter(it => it != null) as RegExResult

    return match.length === 3
      ? [...match.map(it => parseInt(it)), 1] as RgbaValues
      : [
          ...match.slice(0, 3).map(it => parseInt(it)),
          ColorConvert.#alphaToFloat(match[3])
        ] as RgbaValues
  }

  static #parseHex (str: string): RgbaValues {
    const match = str.match(ColorConvert.#HEX_STRING_REGEX)
      ?.slice(1)
      ?.filter(it => it != null)
      ?.map(it => it.length < 2 ? `${it}${it}` : it) as RegExResult

    return match.length === 3
      ? [...match.map(it => parseInt(it, 16)), 1] as RgbaValues
      : match.map((it, idx) => idx === 3 ? parseInt(it, 16) / 0xff : parseInt(it, 16)) as RgbaValues
  }

  static #hslToRgb (hue: number, sat: number, light: number): [number, number, number] {
    const c = (1 - Math.abs(2 * light - 1)) * sat
    const x = c * (1 - Math.abs((hue / 60) % 2 - 1))
    const m = light - c / 2

    const [red, green, blue] =
      hue < 60
        ? [c, x, 0]
        : hue < 120
          ? [x, c, 0]
          : hue < 180
            ? [0, c, x]
            : hue < 240
              ? [0, x, c]
              : hue < 300
                ? [x, 0, c]
                : [c, 0, x]

    return [
      (red + m) * 0xff,
      (green + m) * 0xff,
      (blue + m) * 0xff
    ]
  }

  static #parseHsl (str: string): RgbaValues {
    const match = str.match(ColorConvert.#HSL_STRING_REGEX)
      ?.slice(1)
      ?.filter(it => it != null) as RegExResult

    const hue = ColorConvert.#hueToFloat(match[0])
    const sat = parseFloat(match[1]) / 100
    const light = parseFloat(match[2]) / 100
    const alpha = match[3] != null ? ColorConvert.#alphaToFloat(match[3]) : 1

    return [
      ...ColorConvert.#hslToRgb(hue, sat, light),
      alpha
    ]
  }

  static #parseCssColor (str: CssColorNames): RgbaValues {
    return ColorConvert.#CSS_COLORS[str]
  }

  static #alphaToFloat (alpha: string): number {
    return alpha.charAt(-1) === '%'
      ? parseFloat(alpha.slice(0, -1)) / 100
      : parseFloat(alpha)
  }

  static #hueToFloat (hue: string): number {
    let deg: number

    if (/deg$/.test(hue)) {
      deg = parseFloat(hue.slice(0, -3))
    } else if (/grad$/.test(hue)) {
      deg = parseFloat(hue.slice(0, -4)) * 0.9
    } else if (/rad$/.test(hue)) {
      deg = parseFloat(hue.slice(0, -3)) / Math.PI * 180
    } else if (/turn$/.test(hue)) {
      deg = parseFloat(hue.slice(0, -4)) * 360
    } else {
      deg = parseInt(hue)
    }

    return deg % 360
  }

  static isRgbString = (str: string): boolean => ColorConvert.#RGB_STRING_REGEX.test(str)
  static isHexString = (str: string): boolean => ColorConvert.#HEX_STRING_REGEX.test(str)
  static isHslString = (str: string): boolean => ColorConvert.#HSL_STRING_REGEX.test(str)
  static isCssColorName = (str: string): boolean => str in ColorConvert.#CSS_COLORS

  static #roundTwoDecimals = (input: number): number => Math.round((input + Number.EPSILON) * 100) / 100;

  [Symbol.toPrimitive] <H extends 'number'|'string'|'default'> (hint: H): H extends 'number' ? number : H extends 'string' ? string : boolean {
    if (hint === 'number') {
      return parseInt(this.toHex({ preferShortNotation: false, omitAlphaOnFullOpacity: false })) as H extends 'number' ? number : H extends 'string' ? string : boolean
    } else if (hint === 'string') {
      return this.toHsl({ omitAlphaOnFullOpacity: false }) as H extends 'number' ? number : H extends 'string' ? string : boolean
    } else {
      return this.lightness > 0.5 as H extends 'number' ? number : H extends 'string' ? string : boolean
    }
  }

  get [Symbol.toStringTag] (): string {
    return 'ColorConvert'
  }
}

/**
 * Enum that corresponds to diffrent luminance calculating algorithms
 * @property LINEAR_RGB - {@link https://en.wikipedia.org/wiki/Relative_luminance#Relative_luminance_and_%22gamma_encoded%22_colorspaces|Standard algorithm to calculate relative luminance for linear rgb}
 * @property W3C_AERT - {@link https://www.w3.org/TR/AERT/#color-contrast|Algorithm to calculate ralative luminance according to W3Cs Working Draft for AERT}
 * @property HSP - {@link https://alienryderflex.com/hsp.html|Algorithm to calculate brightness in HSP color space}
 */
export enum LuminanceAlgorithm {
  LINEAR_RGB,
  W3C_AERT,
  HSP
}
