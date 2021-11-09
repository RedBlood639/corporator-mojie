import React from "react";
// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
//
import { CardItemProps } from "types/components/Card";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";

const CardWrapper = styled.div`
  border-radius: 10px;
  padding: 50px;
  max-width: 452.75px;
  min-height: 194px;
  background: ${themeGet("colors.white")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiddleCard: React.FC<CardItemProps> = ({
  title,
  description,
  image,
  height,
  width,
}) => {
  return (
    <CardWrapper>
      <Row justifyContent="center" flexDirection="column" alignItems="center">
        <Col padding="0 0 30px 0" fColor="blue.regular">
          <Image src={image} width={width} height={height} />
        </Col>
        <Col padding="0 0 40px 0">
          <Text
            fWeight={700}
            fSize={24}
            fColor="black.regular"
            tAlign="center"
            responsive={{ 1024: { fSize: 22 } }}
          >
            {title}
          </Text>
        </Col>
        <Col padding="0 0 40px 0">
          <Text
            fColor="black.regular"
            tAlign="center"
            responsive={{ 1024: { fSize: 15 } }}
          >
            {description}
          </Text>
        </Col>
      </Row>
    </CardWrapper>
  );
};

export default MiddleCard;
