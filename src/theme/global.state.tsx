import styled, { createGlobalStyle } from "styled-components";
import { get } from "styled-system";
import css from "@styled-system/css";

export const InjectRTL = styled.div`
  ${({ lang }) =>
    (lang === "ar" || lang === "he") &&
    `
    font-family: 'Lato', sans-serif;
    `}
`;

export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      outline: "none !important",
    },
    "#__next": {
      width: "100%",
      height: "100%",
    },
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
    },
    body: {
      scrollBehavior: "smooth",
      color: get(theme, "colors.white"),
      margin: "0 auto",
      fontFamily: "Roboto, Arial, sans-serif",
      fontWeight: "400",
      fontSize: "17px",
      lineHeight: "1.5",
      backgroundColor: "white",
      transition: get(theme, "transition.normal"),
      WebkitTextSizeAdjust: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.004)",
      "-moz-user-select": "none",
      "-khtml-user-select": "none",
      "-webkit-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
      "::-webkit-scrollbar": {
        width: "3px",
      },
      "::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 5px grey",
        borderRadius: "10px",
      },
      " ::-webkit-scrollbar-thumb": {
        background: get(theme, "colors.primary.regular"),
        borderRadius: "6px",
      },
    },
    h1: {
      color: get(theme, "colors.black.100"),
      fontFamily: "base",
      fontSize: "5xl",
      fontWeight: "bolder",
      zIndex: 10,
      margin: 0,
    },
    h2: {
      color: get(theme, "colors.black.100"),
      fontFamily: "base",
      fontSize: "4xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h3: {
      color: get(theme, "colors.black.100"),
      fontFamily: "base",
      fontSize: "xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h4: {
      color: get(theme, "colors.black.100"),
      fontFamily: "base",
      fontSize: "xl",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h5: {
      color: get(theme, "colors.black.100"),
      fontFamily: "base",
      fontSize: "mm",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h6: {
      fontFamily: "base",
      fontSize: "base",
      fontWeight: "medium",
      zIndex: 10,
      margin: 0,
    },

    "p,span,button,li,div": {
      fontFamily: "base",
      margin: 0,
    },
    a: {
      fontFamily: "base",
      textDecoration: "none",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      listStyle: "none",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    button: {
      appearance: "none",
    },
    img: {
      maxWidth: "100%",
    },
    // custom
    "#nprogress": {
      pointerEvents: "none",
    },
    "#nprogress .bar": {
      top: "0",
      left: "0",
      height: "2px",
      width: "100%",
      position: "fixed",
      zIndex: "9999",
      background: get(theme, "colors.primary.regular"),
      boxShadow: `0 0 2px ${get(theme, "colors.primary.regular")}`,
    },
    "#nprogress .peg": {
      right: "0",
      opacity: "1",
      width: "100px",
      height: "100%",
      display: "block",
      position: "absolute",
      transform: "rotate(3deg) translate(0px, -4px)",
      boxShadow: `0 0 10px ${get(
        theme,
        "colors.primary.regular"
      )}, 0 0 5px ${get(theme, "colors.primary.regular")}`,
    },

    // @ts-ignore
    ...theme.globals,
  })
);
