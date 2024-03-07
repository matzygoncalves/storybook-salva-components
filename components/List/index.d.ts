export type ListProps = {
    list: itemProps[];
    markerType: string;
};
export type itemProps = {
    label: string;
    children: any[];
};
export declare const List: (props: ListProps) => import("react/jsx-runtime").JSX.Element;
