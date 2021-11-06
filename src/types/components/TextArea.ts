import { ComponentType,ReactNode } from "react";

interface TextAreaProps {
    children?:ReactNode
    [key:string]:unknown
}

export interface StyledProps extends TextAreaProps {
    disabled?:boolean
}

export interface TextAreaItemProps extends StyledProps {
    icon?:any 
    placeholder?:string  
}

export interface TextAreaContainerProps extends TextAreaProps {
    iColor?:"primary"
    iFont?: "bold" |  "medium" | "smbold";
}

export interface TextAreaHocProps extends TextAreaContainerProps {
    Inputicon?: ComponentType;
}