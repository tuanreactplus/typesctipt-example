import {ReactNode} from "react";

export interface ButtonProps {
    onClick?: () => void;
    title?: string;
    children?: ReactNode;
    isLoading?:boolean;
}