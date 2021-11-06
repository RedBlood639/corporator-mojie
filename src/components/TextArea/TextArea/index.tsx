import React from "react";
// type
import {
  StyledProps,
  TextAreaContainerProps,
  TextAreaItemProps,
} from "types/components/TextArea";
// styled component
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import css from "@styled-system/css";
import { compose, variant, border, space, layout, color } from "styled-system";

type Ref = HTMLTextAreaElement;
// ------------------------------------------------

const StyledTextArea = styled.textarea(
  (props: StyledProps) =>
    css({
      px: "15px",
      py: "15px",
      width: "100%",
      cursor: props.disabled ? "not-allowed" : "pointer",
      transition:
        "all 0.3s ease, color 300ms ease-in-out, background-color 300ms ease-in-out",
    }),
  {
    zIndex: 15,
    resize: "none",
    borderRadius: "10px",
    textAlign: "left",
    "&:focus": {
      outline: "none",
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
  // font
  variant({
    prop: "ifont",
    variants: {
      bold: { fontSize: 16, fontWeight: 500 },
    },
  }),
  compose(border, space, layout)
);

const TextArea = React.forwardRef<Ref, TextAreaItemProps>(
  ({ children, disabled, icon, placeholder = "", ...props }, ref) => {
    return (
      <StyledTextArea
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

const TextAreaContainer = React.forwardRef<Ref, TextAreaContainerProps>(
  ({ iColor = "primary", iFont = "bold", ...props }, ref) => (
    <TextArea ref={ref} variant={iColor} ifont={iFont} {...props}></TextArea>
  )
);

export default TextAreaContainer;
