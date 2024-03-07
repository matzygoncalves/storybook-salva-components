import React from "react";
export type ModalProps = {
    open: boolean;
    mobile?: boolean;
    handleClose: () => void;
    title?: string;
    children?: React.ReactElement;
    buttons?: Buttons[];
    btnFull?: boolean;
};
export type Buttons = {
    onClick: () => void;
    label: string;
    icon?: string;
    svgIcon?: React.ReactNode;
    color: "primary" | "secondary" | "tertiary" | "ghost" | "dangerPrimary" | "dangerTertiary" | "dangerGhost";
};
export declare const Modal: (props: ModalProps) => import("react/jsx-runtime").JSX.Element;
