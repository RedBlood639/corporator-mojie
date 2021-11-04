import { ReactNode } from "react";

interface BorderProps {
  children?: ReactNode;
  [key: string]: unknown;
}

export interface BorderContainerProps extends BorderProps {
  bColor?: string;
  bSize?: number;

}
