import React from "react";
// styled component
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import css from "@styled-system/css";
import { compose, variant, border, space, layout } from "styled-system";

// type
import {
  InputContainerProps,
  InputItemProps,
  StyledProps,
} from "types/components/Input";

type Ref = HTMLInputElement;
// ----------------------------------------------------

const StyledInput = styled.input(
  (props: StyledProps) =>
    css({
      px: "20px",
      py: "20px",
      fontWeight: "regular",
      width: "100%",
      cursor: props.disabled ? "not-allowed" : "pointer",
      transition:
        "all 0.3s ease, color 300ms ease-in-out, background-color 300ms ease-in-out",
    }),
  {
    zIndex: 15,
    borderRadius: "10px",
    appearance: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    textAlign: "left",
    height: "38px",
    textDecoration: "none",
    fontFamily: "fonts.lato",
    lineHeight: "10px",
    "&:focus": {
      outline: "none",
      color: "white",
      backgroundColor: themeGet("colors.orange.regular"),
    },
  },
  variant({
    variants: {
      primary: {
        color: "primary.regular",
        bg: "gray.regular",
        border: "1px solid",
        borderColor: "gray.normal",
        "::placeholder": { color: "gray.100" },
      },
    },
  }),
  // size
  variant({
    prop: "isize",
    variants: {
      big: {
        height: "58px",
        px: 21,
        py: 21,
      },
      medium: { height: "44px", px: 16, py: 10 },
      small: { height: "38px", px: 16, py: 10 },
      auto: { height: "100%", px: 16 },
    },
  }),
  // font
  variant({
    prop: "ifont",
    variants: {
      medium: { fontSize: 15, fontWeight: 900 },
      bold: { fontSize: 16, fontWeight: 500 },
      smbold: { fontSize: 12, fontWeight: 900 },
    },
  }),
  compose(border, space, layout)
);

const Input = React.forwardRef<Ref, InputItemProps>(
  (
    { children, disabled, icon, placeholder = "", loading = false, ...props },
    ref
  ) => {
    return (
      <StyledInput
        ref={ref}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
    );
  }
);

const InputContainer = React.forwardRef<Ref, InputContainerProps>(
  (
    { iColor = "primary", iSize = "medium", iFont = "medium", ...props },
    ref
  ) => (
    <Input
      ref={ref}
      variant={iColor}
      isize={iSize}
      ifont={iFont}
      {...props}
    ></Input>
  )
);

export default InputContainer;
