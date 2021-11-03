import React from "react";
// type
import { TextWrapperProps } from "types/components/Text";
// styled component
import { TextWrapper, TextSpanWrapper } from "./Text.style";
// ------------------------------------------------

const Text: React.FC<TextWrapperProps> = ({
  mode = "p",
  children,
  ...props
}) => {
  const Wrapper = mode == "p" ? TextWrapper : TextSpanWrapper;
  return <Wrapper {...props}>{children}</Wrapper>;
};
export default Text;
