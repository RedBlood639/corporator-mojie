import React from "react";
// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
//
import { CardItemProps } from "types/components/Card";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";

const CardWrapper = styled.div<CardItemProps>`
  border-radius: 10px;
  padding: 35px 20px;
  max-width: 452.75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => themeGet(`colors.${color}`)};
`;

const SimpleCard: React.FC<CardItemProps> = ({
  description = "",
  kind = "small",
  image,
  height,
  width,
  color = "gray.normal",
}) => {
  return (
    <CardWrapper color={color}>
      <Row justifyContent="center">
        <Col item={kind == "small" ? 4 : 10}>
          <Image src={image} width={width} height={height} />
        </Col>
        <Col item={kind == "small" ? 20 : 14}>
          <Text
            fColor="black.regular"
            fSize={kind == "small" ? "inherit" : 22}
            fWeight={kind == "small" ? 400 : 700}
          >
            {description}
          </Text>
        </Col>
      </Row>
    </CardWrapper>
  );
};

export default SimpleCard;
