import { ReactNode } from "react";

export interface WorkCardProp {
    title: string;
    link: ReactNode;
    description: string[];
    duration: string;
}
export interface ProjectCardProp {
    title: string;
    deployed: string | null;
    description: string;
    github: string;
    image: string;
}

export interface WithThemeProp {
    theme: string;
}
