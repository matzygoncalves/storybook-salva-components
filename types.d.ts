type ColorValue = string;
interface ColorLevel {
    10: ColorValue;
    20: ColorValue;
    30: ColorValue;
    40: ColorValue;
    50: ColorValue;
    60: ColorValue;
    70: ColorValue;
    80: ColorValue;
    90: ColorValue;
    100: ColorValue;
}
interface ColorState {
    primary: ColorLevel;
    secondary: ColorLevel;
    gray: ColorLevel;
    coolGray: ColorLevel;
    warmGray: ColorLevel;
    blue: ColorLevel;
    cyan: ColorLevel;
    green: ColorLevel;
    magenta: ColorLevel;
    purple: ColorLevel;
    red: ColorLevel;
    teal: ColorLevel;
    yellow: ColorLevel;
    orange: ColorLevel;
}
interface OtherColors {
    white: ColorValue;
    black: ColorValue;
}
interface PaletteState {
    other: OtherColors;
    primary: ColorLevel;
    secondary: ColorLevel;
    gray: ColorLevel;
    coolGray: ColorLevel;
    warmGray: ColorLevel;
    blue: ColorLevel;
    cyan: ColorLevel;
    green: ColorLevel;
    magenta: ColorLevel;
    purple: ColorLevel;
    red: ColorLevel;
    teal: ColorLevel;
    yellow: ColorLevel;
    orange: ColorLevel;
}
export interface Palettes {
    default: PaletteState;
    hover: ColorState;
}
type Color = string;
interface Palette {
    [key: string]: Color | Palette;
}
interface ShadowEffect {
    black: string;
}
interface BorderEffect {
    inner: {
        all: Color;
        top?: Color;
        right?: Color;
        bottom?: Color;
        left?: Color;
        topBottom?: Color;
        leftRight?: Color;
        topLeftBottom?: Color;
        topRightBottom?: Color;
        bottomLeftRight?: Color;
        topLeftRight?: Color;
    };
    outer?: {
        all: Color;
        top?: Color;
        right?: Color;
        bottom?: Color;
        left?: Color;
    };
}
interface Effects {
    shadow: ShadowEffect;
    border: {
        subtle: {
            1: BorderEffect;
        };
        strong: {
            1: BorderEffect;
        };
        focus: BorderEffect;
        selected: BorderEffect;
        error: BorderEffect;
        disabled: BorderEffect;
    };
}
interface SpacingBlock {
    [level: number]: string;
}
export interface ThemeTypes {
    colors: {
        background: Palette;
        layer: {
            default: Palette;
            hover: Palette;
            active: Palette;
            selected: Palette & {
                selectedHover: Palette;
                selectedDisable: Color;
                selectedInverse: Color;
            };
        };
        border: {
            subtle: Palette & {
                selected: Palette;
                strong: Palette;
                interactive: Color;
                disabled: Color;
                tile: Palette;
            };
        };
        text: Palette;
        link: Palette;
        support: Palette & {
            caution: Palette;
        };
        button: Palette & {
            danger: Palette;
            separetor: Color;
        };
        layerAccent: Palette;
        field: Palette;
        focus: Palette;
        miscellaneous: Palette & {
            skeleton: {
                background: Color;
                element: Color;
            };
        };
    };
    effects: Effects;
    spacingBlock: SpacingBlock;
}
export {};
