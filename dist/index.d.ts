export default class ColorConvert {
    #private;
    get red(): number;
    get green(): number;
    get blue(): number;
    get alpha(): number;
    get hue(): number;
    get saturation(): number;
    get lightness(): number;
    get rgb(): string;
    get rgba(): string;
    get hex(): string;
    get hexa(): string;
    get hsl(): string;
    get hsla(): string;
    constructor(input: string);
    toRgb({ spaceSeparated, omitAlphaOnFullOpacity, alphaInPercent }?: {
        spaceSeparated?: boolean;
        omitAlphaOnFullOpacity?: boolean;
        alphaInPercent?: boolean;
    }): string;
    toRgba(): string;
    toHex({ preferShortNotation, omitAlphaOnFullOpacity }?: {
        preferShortNotation?: boolean;
        omitAlphaOnFullOpacity?: boolean;
    }): string;
    toHsl({ spaceSeparated, omitAlphaOnFullOpacity, alphaInPercent, hueUnit }?: {
        spaceSeparated?: boolean;
        omitAlphaOnFullOpacity?: boolean;
        alphaInPercent?: boolean;
        hueUnit?: 'deg' | 'rad' | 'grad' | 'turn';
    }): string;
    toHsla({ hueUnit }?: {
        hueUnit?: 'deg' | 'rad' | 'grad' | 'turn';
    }): string;
    static isRgbString: (str: string) => boolean;
    static isHexString: (str: string) => boolean;
    static isHslString: (str: string) => boolean;
    static isCssColorName: (str: string) => boolean;
}
