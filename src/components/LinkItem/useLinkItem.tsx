import React, { ComponentType } from "react";
// next
import Router from "next/router";
// component
import { Row, Col } from "components/Layout";
// type
import {
  LinkItemWrapperProps,
  IconWrapperProps,
} from "types/components/LinkItem";
// styled system
import styled from "styled-components";

// -----------------------------------------------------------------
const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ iconWidth }) => {
    return iconWidth ? `${iconWidth}px` : "auto";
  }};
`;

const useLinkItem = (
  LinkItemWrapper: ComponentType<LinkItemWrapperProps>,
  mode: "title" | "icon" = "title"
) => {
  if (mode === "title") {
    return ({
      title = "",
      href = "",
      icon,
      iconSlot = "start",
      iconDirection = "row",
      iconGaping = 6,
      iconWidth,
      alignVertical = "center",
      alignHorizontal = "initial",
      handleAction,
    }: LinkItemWrapperProps) => {
      const handleOnClick = () => {
        if (href != "") Router.push(href);
        if (handleAction) handleAction();
      };

      return (
        <LinkItemWrapper>
          <Row
            alignItems={alignVertical}
            justifyContent={alignHorizontal}
            gap={icon ? iconGaping : 0}
            flexDirection={iconDirection}
          >
            {icon && iconSlot === "start" && (
              <IconWrapper iconWidth={iconWidth}>{icon}</IconWrapper>
            )}
            <Col
              item={icon ? 0 : 24}
              onClick={handleOnClick}
              className="link_title"
            >
              {title}
            </Col>
            {icon && iconSlot === "end" && (
              <IconWrapper iconWidth={iconWidth}>{icon}</IconWrapper>
            )}
          </Row>
        </LinkItemWrapper>
      );
    };
  }
  if (mode === "icon") {
    return ({ href = "", icon }: LinkItemWrapperProps) => {
      const handleOnClick = () => {
        if (href != "") Router.push(href);
      };

      return <LinkItemWrapper onClick={handleOnClick}>{icon}</LinkItemWrapper>;
    };
  }
};

export default useLinkItem;
