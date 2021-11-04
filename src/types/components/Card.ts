import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  [key: string]: unknown;
}

export interface CardItemProps extends CardProps {
    kind?:"small"|"medium"
    title?:string
    description?:string
    image?:any;
    width?:number
    height?:number
    color?:string
}
