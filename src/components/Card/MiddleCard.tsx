import React from "react";
// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
//
import { CardItemProps } from "types/components/Card";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { FaRegCommentDots } from "react-icons/fa";

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
      <Row justifyContent="center" flexDirection="column">
        <Col padding="0 0 30px 0">
          <Image src={image} width={width} height={height} />
        </Col>
        <Col padding="0 0 40px 0">
          <Text fWeight={700} fSize={24} fColor="black.regular">
            {title}
          </Text>
        </Col>
        <Col padding="0 0 40px 0">
          <Text fColor="black.regular">{description}</Text>
        </Col>
        <Col>
          <Button bColor="orange" bSize="big" icon={<FaRegCommentDots />}>
            READ MORE
          </Button>
        </Col>
      </Row>
    </CardWrapper>
  );
};

export default MiddleCard;
