type Color = string;
type PaletteColor = {
    default: Color;
    hover: Color;
    active: Color;
    selected?: Color;
    selecteHover?: Color;
    brand?: Color;
    inverse?: Color;
    inverseHover?: Color;
    [key: string]: Color | undefined;
};
type LayerColor = {
    default: {
        [key: number]: Color;
    };
    hover: {
        [key: number]: Color;
    };
    active: {
        [key: number]: Color;
    };
    selected: {
        [key: number]: Color;
        selectedHover?: {
            [key: number]: Color;
        };
        selectedDisable?: Color;
        selectedInverse?: Color;
    };
    [key: string]: {
        [key: number]: Color;
    } | Color | undefined;
};
type BorderColor = {
    subtle: {
        [key: number]: Color;
        selected?: {
            [key: number]: Color;
        };
        strong?: {
            [key: number]: Color;
        };
        inverse?: Color;
        interactive?: Color;
        disabled?: Color;
        tile?: {
            [key: number]: Color;
        };
    };
    [key: string]: unknown;
};
type ButtonColor = {
    primary: PaletteColor;
    secondary: PaletteColor;
    tertiary: PaletteColor;
    danger: {
        primary: PaletteColor;
        secondary: PaletteColor;
    };
    separetor: Color;
    disabled: Color;
};
type ShadowEffect = {
    black: string;
};
type BorderEffect = {
    subtle: {
        [key: number]: {
            inner: {
                all: Color;
                top: Color;
                right: Color;
                bottom: Color;
                left: Color;
                topBottom: Color;
                leftRight: Color;
                topLeftBottom: Color;
                topRightBottom: Color;
                bottomLeftRight: Color;
                topLeftRight: Color;
            };
        };
    };
    strong: {
        [key: number]: {
            inner: {
                all: Color;
                top: Color;
                right: Color;
                bottom: Color;
                left: Color;
                topBottom: Color;
                leftRight: Color;
                topLeftBottom: Color;
                topRightBottom: Color;
                bottomLeftRight: Color;
            };
        };
    };
    focus: {
        inner: {
            all: Color;
        };
        outer: {
            all: Color;
        };
        inverse: {
            inner: {
                all: Color;
            };
            outer: {
                all: Color;
            };
        };
    };
    selected: {
        inner: {
            all: Color;
            top: Color;
            right: Color;
            bottom: Color;
            left: Color;
        };
        outer: {
            all: Color;
            top: Color;
            right: Color;
            bottom: Color;
            left: Color;
        };
        inverse?: {
            inner: {
                all: Color;
            };
            outer: {
                all: Color;
            };
        };
    };
    error: {
        inner: {
            all: Color;
        };
        outer: {
            all: Color;
        };
    };
    disabled: {
        inner: {
            topBottom: Color;
            topRightBottom: Color;
            topLeftBottom: Color;
        };
    };
};
interface Theme {
    colors: {
        background: PaletteColor;
        layer: LayerColor;
        border: BorderColor;
        text: {
            [key: string]: Color;
        };
        link: {
            [key: string]: Color;
        };
        support: {
            [key: string]: Color | {
                [key: string]: Color;
            };
        };
        button: ButtonColor;
        layerAccent: {
            [key: number]: PaletteColor;
        };
        field: {
            [key: number]: {
                default: Color;
                hover: Color;
            };
        };
        focus: {
            default: Color;
            inset: Color;
            inverse: Color;
        };
        miscellaneous: {
            [key: string]: Color | {
                [key: string]: Color;
            } | any;
        };
    };
    effects: {
        shadow: ShadowEffect;
        border: BorderEffect;
    };
    spacingBlock: {
        [key: number]: string;
    };
}
export default Theme;
