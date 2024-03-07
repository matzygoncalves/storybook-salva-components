import { ButtonHTMLAttributes, FC } from "react";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: "primary" | "secondary" | "tertiary" | "ghost" | "dangerPrimary" | "dangerTertiary" | "dangerGhost";
    variant: "small" | "medium" | "large" | "extraLarge" | "2xLarge" | "expressive";
    label?: string;
    svgIcon?: React.ReactNode;
    icon?: string;
    isLoading?: boolean;
    fullWidth?: boolean;
    forModal?: boolean;
    disabled?: boolean;
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana";
};
export declare const Button: FC<ButtonProps>;
