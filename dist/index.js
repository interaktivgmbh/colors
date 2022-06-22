"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ColorConvert_instances, _a, _ColorConvert_RGB_STRING_REGEX, _ColorConvert_HEX_STRING_REGEX, _ColorConvert_HSL_STRING_REGEX, _ColorConvert_CSS_COLORS, _ColorConvert_red, _ColorConvert_green, _ColorConvert_blue, _ColorConvert_alpha, _ColorConvert_hue, _ColorConvert_saturation, _ColorConvert_lightness, _ColorConvert_getHsl, _ColorConvert_hue2UnitString, _ColorConvert_parseRgb, _ColorConvert_parseHex, _ColorConvert_parseHsl, _ColorConvert_parseCssColor, _ColorConvert_alphaToFloat, _ColorConvert_hueToFloat, _ColorConvert_roundTwoDecimals;
Object.defineProperty(exports, "__esModule", { value: true });
class ColorConvert {
    constructor(input) {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        _ColorConvert_instances.add(this);
        _ColorConvert_red.set(this, void 0);
        _ColorConvert_green.set(this, void 0);
        _ColorConvert_blue.set(this, void 0);
        _ColorConvert_alpha.set(this, void 0);
        _ColorConvert_hue.set(this, void 0);
        _ColorConvert_saturation.set(this, void 0);
        _ColorConvert_lightness.set(this, void 0);
        if (ColorConvert.isRgbString(input)) {
            _b = this, _c = this, _d = this, _e = this, [({ set value(_a) { __classPrivateFieldSet(_b, _ColorConvert_red, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_c, _ColorConvert_green, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_d, _ColorConvert_blue, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_e, _ColorConvert_alpha, _a, "f"); } }).value] = __classPrivateFieldGet(ColorConvert, _a, "m", _ColorConvert_parseRgb).call(ColorConvert, input);
        }
        else if (ColorConvert.isHexString(input)) {
            _f = this, _g = this, _h = this, _j = this, [({ set value(_a) { __classPrivateFieldSet(_f, _ColorConvert_red, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_g, _ColorConvert_green, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_h, _ColorConvert_blue, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_j, _ColorConvert_alpha, _a, "f"); } }).value] = __classPrivateFieldGet(ColorConvert, _a, "m", _ColorConvert_parseHex).call(ColorConvert, input);
        }
        else if (ColorConvert.isHslString(input)) {
            _k = this, _l = this, _m = this, _o = this, [({ set value(_a) { __classPrivateFieldSet(_k, _ColorConvert_red, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_l, _ColorConvert_green, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_m, _ColorConvert_blue, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_o, _ColorConvert_alpha, _a, "f"); } }).value] = __classPrivateFieldGet(ColorConvert, _a, "m", _ColorConvert_parseHsl).call(ColorConvert, input);
        }
        else if (ColorConvert.isCssColorName(input)) {
            _p = this, _q = this, _r = this, _s = this, [({ set value(_a) { __classPrivateFieldSet(_p, _ColorConvert_red, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_q, _ColorConvert_green, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_r, _ColorConvert_blue, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_s, _ColorConvert_alpha, _a, "f"); } }).value] = __classPrivateFieldGet(ColorConvert, _a, "m", _ColorConvert_parseCssColor).call(ColorConvert, input);
        }
        else {
            throw new SyntaxError('input is not a valid color');
        }
        _t = this, _u = this, _v = this, [({ set value(_a) { __classPrivateFieldSet(_t, _ColorConvert_hue, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_u, _ColorConvert_saturation, _a, "f"); } }).value, ({ set value(_a) { __classPrivateFieldSet(_v, _ColorConvert_lightness, _a, "f"); } }).value] = __classPrivateFieldGet(this, _ColorConvert_instances, "m", _ColorConvert_getHsl).call(this);
    }
    get red() { return __classPrivateFieldGet(this, _ColorConvert_red, "f"); }
    get green() { return __classPrivateFieldGet(this, _ColorConvert_green, "f"); }
    get blue() { return __classPrivateFieldGet(this, _ColorConvert_blue, "f"); }
    get alpha() { return __classPrivateFieldGet(this, _ColorConvert_alpha, "f"); }
    get hue() { return __classPrivateFieldGet(this, _ColorConvert_hue, "f"); }
    get saturation() { return __classPrivateFieldGet(this, _ColorConvert_saturation, "f"); }
    get lightness() { return __classPrivateFieldGet(this, _ColorConvert_lightness, "f"); }
    get rgb() { return this.toRgb(); }
    get rgba() { return this.toRgba(); }
    get hex() { return this.toHex(); }
    get hexa() { return this.toHex({ omitAlphaOnFullOpacity: false }); }
    get hsl() { return this.toHsl(); }
    get hsla() { return this.toHsla(); }
    toRgb({ spaceSeparated = true, omitAlphaOnFullOpacity = true, alphaInPercent = true } = {}) {
        if (spaceSeparated) {
            return `rgb(${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.red)} ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.green)} ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.blue)}${this.alpha === 1 && omitAlphaOnFullOpacity ? '' : ` / ${alphaInPercent ? `${__classPrivateFieldGet(this, _ColorConvert_alpha, "f") * 100}%` : this.alpha}`})`;
        }
        else {
            return `rgb(${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.red)}, ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.green)}, ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.blue)})`;
        }
    }
    toRgba() {
        return `rgba(${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.red)}, ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.green)}, ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, __classPrivateFieldGet(this, _ColorConvert_blue, "f"))}, ${__classPrivateFieldGet(this, _ColorConvert_alpha, "f")})`;
    }
    toHex({ preferShortNotation = true, omitAlphaOnFullOpacity = true } = {}) {
        const values = [this.red, this.green, this.blue, this.alpha].map((it, idx) => idx === 3 ? Math.round((it * 0xff)).toString(16) : Math.round((it)).toString(16));
        if (omitAlphaOnFullOpacity && this.alpha === 1)
            values.pop();
        if (preferShortNotation && values.every(it => /^(\w)\1$/.test(it))) {
            return `#${values.map(it => it[0]).join('')}`;
        }
        return `#${values.join('')}`;
    }
    toHsl({ spaceSeparated = true, omitAlphaOnFullOpacity = true, alphaInPercent = true, hueUnit = 'deg' } = {}) {
        if (spaceSeparated) {
            return `hsl(${__classPrivateFieldGet(this, _ColorConvert_instances, "m", _ColorConvert_hue2UnitString).call(this, hueUnit)} ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.saturation * 100)}% ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.lightness * 100)}%${this.alpha === 1 && omitAlphaOnFullOpacity ? '' : ` / ${alphaInPercent ? `${__classPrivateFieldGet(this, _ColorConvert_alpha, "f") * 100}%` : this.alpha}`})`;
        }
        return `hsl(${__classPrivateFieldGet(this, _ColorConvert_instances, "m", _ColorConvert_hue2UnitString).call(this, hueUnit)}, ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.saturation * 100)}%, ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.lightness * 100)}%`;
    }
    toHsla({ hueUnit = 'deg' } = {}) {
        return `hsl(${__classPrivateFieldGet(this, _ColorConvert_instances, "m", _ColorConvert_hue2UnitString).call(this, hueUnit)}, ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.saturation * 100)}%, ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.lightness * 100)}%, ${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.alpha)}`;
    }
}
exports.default = ColorConvert;
_a = ColorConvert, _ColorConvert_red = new WeakMap(), _ColorConvert_green = new WeakMap(), _ColorConvert_blue = new WeakMap(), _ColorConvert_alpha = new WeakMap(), _ColorConvert_hue = new WeakMap(), _ColorConvert_saturation = new WeakMap(), _ColorConvert_lightness = new WeakMap(), _ColorConvert_instances = new WeakSet(), _ColorConvert_getHsl = function _ColorConvert_getHsl() {
    const [red, green, blue] = [
        this.red / 0xff,
        this.green / 0xff,
        this.blue / 0xff
    ];
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const delta = max - min;
    const light = (max + min) / 2;
    const hue = delta === 0
        ? 0
        : max === red
            ? 60 * (((green - blue) / delta) % 6)
            : max === green
                ? 60 * (((blue - red) / delta) + 2)
                : 60 * (((red - green) / delta) + 4);
    const sat = delta === 0
        ? 0
        : delta / (1 - Math.abs(2 * light - 1));
    return [hue, sat, light];
}, _ColorConvert_hue2UnitString = function _ColorConvert_hue2UnitString(unit = 'deg') {
    switch (unit) {
        case 'rad':
            return `${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.hue * Math.PI / 180)}rad`;
        case 'grad':
            return `${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.hue / 0.9)}grad`;
        case 'turn':
            return `${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.hue / 360)}turn`;
        default:
            return `${__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_roundTwoDecimals).call(ColorConvert, this.hue)}deg`;
    }
}, _ColorConvert_parseRgb = function _ColorConvert_parseRgb(str) {
    var _b, _c;
    const match = (_c = (_b = str.match(__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_RGB_STRING_REGEX))) === null || _b === void 0 ? void 0 : _b.slice(1)) === null || _c === void 0 ? void 0 : _c.filter(it => it != null);
    return match.length === 3
        ? [...match.map(it => parseInt(it)), 1]
        : [
            ...match.slice(0, 3).map(it => parseInt(it)),
            __classPrivateFieldGet(ColorConvert, _a, "m", _ColorConvert_alphaToFloat).call(ColorConvert, match[3])
        ];
}, _ColorConvert_parseHex = function _ColorConvert_parseHex(str) {
    var _b, _c, _d;
    const match = (_d = (_c = (_b = str.match(__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_HEX_STRING_REGEX))) === null || _b === void 0 ? void 0 : _b.slice(1)) === null || _c === void 0 ? void 0 : _c.filter(it => it != null)) === null || _d === void 0 ? void 0 : _d.map(it => it.length < 2 ? `${it}${it}` : it);
    return match.length === 3
        ? [...match.map(it => parseInt(it, 16)), 1]
        : match.map((it, idx) => idx === 3 ? parseInt(it, 16) / 0xff : parseInt(it, 16));
}, _ColorConvert_parseHsl = function _ColorConvert_parseHsl(str) {
    var _b, _c;
    const match = (_c = (_b = str.match(__classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_HSL_STRING_REGEX))) === null || _b === void 0 ? void 0 : _b.slice(1)) === null || _c === void 0 ? void 0 : _c.filter(it => it != null);
    const hue = __classPrivateFieldGet(ColorConvert, _a, "m", _ColorConvert_hueToFloat).call(ColorConvert, match[0]);
    const sat = parseFloat(match[1]) / 100;
    const light = parseFloat(match[2]) / 100;
    const alpha = match[3] != null ? __classPrivateFieldGet(ColorConvert, _a, "m", _ColorConvert_alphaToFloat).call(ColorConvert, match[3]) : 1;
    const c = (1 - Math.abs(2 * light - 1)) * sat;
    const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
    const m = light - c / 2;
    const [red, green, blue] = hue < 60
        ? [c, x, 0]
        : hue < 120
            ? [x, c, 0]
            : hue < 180
                ? [0, c, x]
                : hue < 240
                    ? [0, x, c]
                    : hue < 300
                        ? [x, 0, c]
                        : [c, 0, x];
    return [
        (red + m) * 0xff,
        (green + m) * 0xff,
        (blue + m) * 0xff,
        alpha
    ];
}, _ColorConvert_parseCssColor = function _ColorConvert_parseCssColor(str) {
    return __classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_CSS_COLORS)[str];
}, _ColorConvert_alphaToFloat = function _ColorConvert_alphaToFloat(alpha) {
    return alpha.charAt(-1) === '%'
        ? parseFloat(alpha.slice(0, -1)) / 100
        : parseFloat(alpha);
}, _ColorConvert_hueToFloat = function _ColorConvert_hueToFloat(hue) {
    let deg;
    if (/deg$/.test(hue)) {
        deg = parseFloat(hue.slice(0, -3));
    }
    else if (/grad$/.test(hue)) {
        deg = parseFloat(hue.slice(0, -4)) * 0.9;
    }
    else if (/rad$/.test(hue)) {
        deg = parseFloat(hue.slice(0, -3)) / Math.PI * 180;
    }
    else if (/turn$/.test(hue)) {
        deg = parseFloat(hue.slice(0, -4)) * 360;
    }
    else {
        deg = parseInt(hue);
    }
    return deg % 360;
};
_ColorConvert_RGB_STRING_REGEX = { value: /^rgb\( *(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) +(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) +(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) *(\/ *(?:\d{1,2}|100)%)?\)|rgb\( *(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) *, *(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) *, *(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5]) *\)|rgba\( *(\d{1,2}|1\d{2}|2[0-4]\d25[0-5]) *, *(\d{1,2}|1\d{2}|2[0-4]\d25[0-5]) *, *(\d{1,2}|1\d{2}|2[0-4]\d25[0-5]) *, *(0?\.\d+|1(?:\.0+)?) *\)$/ };
_ColorConvert_HEX_STRING_REGEX = { value: /^#(?:([\da-f])([\da-f])([\da-f])([\da-f])?|([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?)$/ };
_ColorConvert_HSL_STRING_REGEX = { value: /^hsl\( *(-?(?:\d+(?:\.\d+)?|0?\.\d+)(?:deg|g?rad|turn)?) *, *(\d{1,2}(?:\.\d+)?|100)% *, *(\d{1,2}(?:\.\d+)?|100)%*\)|hsla\( *(-?(?:\d+(?:\.\d+)?|0?\.\d+)(?:deg|g?rad|turn)?) *, *(\d{1,2}(?:\.\d+)?|100)% *, *(\d{1,2}(?:\.\d+)?|100)% *, *(0?\.\d+|1(?:\.0+)) *\)|hsl\( *(-?(?:\d+(?:\.\d+)?|0?\.\d+)(?:deg|g?rad|turn)?) +(\d{1,2}(?:\.\d+)?|100)% +(\d{1,2}(?:\.\d+)?|100)%(?: *| *\/ *((?:\d{1,2}(?:\.\d+)?|100)%|1(?:\.0+)?|0?\.\d+) *)\)$/ };
_ColorConvert_CSS_COLORS = { value: {
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
    } };
ColorConvert.isRgbString = (str) => __classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_RGB_STRING_REGEX).test(str);
ColorConvert.isHexString = (str) => __classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_HEX_STRING_REGEX).test(str);
ColorConvert.isHslString = (str) => __classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_HSL_STRING_REGEX).test(str);
ColorConvert.isCssColorName = (str) => str in __classPrivateFieldGet(ColorConvert, _a, "f", _ColorConvert_CSS_COLORS);
_ColorConvert_roundTwoDecimals = { value: (input) => Math.round((input + Number.EPSILON) * 100) / 100 };
