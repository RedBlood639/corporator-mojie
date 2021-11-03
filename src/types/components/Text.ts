// type
import { ReactNode } from "react";
import {InitialProps } from "./Common"

export interface TextWrapperProps extends InitialProps {
    mode?:"span"|"p"
    children?:ReactNode
}