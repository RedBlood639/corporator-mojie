import { ReactNode } from "react";

interface MenuProps {
  children?: ReactNode;
  [key: string]: unknown;
  fDirection?: "up" | "down" | "start" | "end" | "none";
}
export interface StyledProps extends MenuProps {}

export interface MenuItemProps extends StyledProps {
  title?: string;
}
export interface MenuItemType {
  title: string;
}

export interface MenuContainerProps extends MenuProps {
  data?: Array<MenuItemType>;
}
