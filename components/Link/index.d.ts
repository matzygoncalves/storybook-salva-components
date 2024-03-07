import { ButtonHTMLAttributes } from "react";
export type LinkProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    icon?: string;
    onClick?: () => void;
    size?: "small" | "medium" | "large";
    arrow?: boolean;
    disabled?: boolean;
};
export declare const Link: (props: LinkProps) => import("react/jsx-runtime").JSX.Element;
