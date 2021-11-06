import React, { Fragment } from "react";
// styled component
import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import css from "@styled-system/css";
import { compose, variant, border, space, layout } from "styled-system";

// type
import {
  ButtonContainerProps,
  ButtonItemProps,
  StyledProps,
} from "types/components/Button";

type Ref = HTMLButtonElement;
// ----------------------------------------------------

const StyledButton = styled.button(
  (props: StyledProps) =>
    css({
      px: "18px",
      py: "36px",
      fontSize: "regular",
      fontWeight: "semiBold",
      cursor: props.disabled ? "not-allowed" : "pointer",
      transition:
        "all 0.3s ease, color 300ms ease-in-out, background-color 300ms ease-in-out",
    }),
  {
    zIndex: 15,
    appearance: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    textAlign: "center",
    textDecoration: "none",
    fontFamily: "inherit",
    borderRadius: "10px",
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      transform: "scale(0.99)",
    },
  },
  variant({
    variants: {
      primary: {
        color: "white",
        bg: "blue.regular",
        border: "none",
        "&:hover": { bg: "blue.light" },
      },
      orange: {
        color: "white",
        bg: "orange.normal",
        border: "none",
        "&:hover": { bg: "orange.light" },
      },
    },
  }),
  variant({
    prop: "size",
    variants: {
      big: { fontSize: 16, px: 36, py: 18 },
      normal: {
        bordeButtonrRadius: 0,
        height: "42px",
        width: "150px",
        fontSize: 12,
      },
      medium: { height: "42px", fontSize: 16, px: 10, py: 10 },
      small: { height: "38px", fontSize: 16, px: 25, py: 10 },
      full: { fontSize: 16, px: 36, py: 18, width: "100%" },
    },
  }),
  compose(border, space, layout)
);
const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border: 3px solid #ffffff;
  border-top: 3px solid ${themeGet("primary.regular", "#009E7F")};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const Button = React.forwardRef<Ref, ButtonItemProps>(
  ({ children, disabled, icon, loading = false, ...props }, ref) => {
    const buttonIcon = icon || Fragment;
    return (
      <StyledButton ref={ref} {...props} disabled={disabled}>
        <ButtonInner>
          {!loading && buttonIcon}
          <div>{children}</div>
          {loading && <Spinner />}
        </ButtonInner>
      </StyledButton>
    );
  }
);

const ButtonContainer = React.forwardRef<Ref, ButtonContainerProps>(
  ({ bColor = "primary", bSize = "big", ...props }, ref) => (
    <Button ref={ref} variant={bColor} size={bSize} {...props}></Button>
  )
);

export default ButtonContainer;
