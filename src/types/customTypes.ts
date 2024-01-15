import { ReactNode } from "react";

export interface WorkCardProp {
    title: string;
    link: ReactNode;
    description: ReactNode[];
    duration: string;
}

export interface WithThemeProp {
    theme: string;
}
