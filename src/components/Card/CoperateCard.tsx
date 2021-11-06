import React from "react";
// import styled component
import styled from "styled-components";
// import component
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { ImUser } from "react-icons/im";
// import type
import { CardItemProps } from "types/components/Card";
import { Text } from "components/Text";
//  import image
import photo from "assets/images/quatation.png";
// define the styled component
const CoperateCardWrapper = styled.div`
  position: relative;
`;
const Image_wrapper = styled.div`
  position: absolute;
  top: 80px;
`;

const Row_wrapper = styled.div`
  position: relative;
  z-index: 1;
`;
//  - --- - - - - - - -
const CoperateCard: React.FC<CardItemProps> = ({
  image,
  description,
  title,
}) => {
  return (
    <CoperateCardWrapper>
      <Row_wrapper>
        <Row flexDirection="column" justifyContent="center" alignItems="center">
          <Col>
            <Image src={image} mode="intrinsic" />
          </Col>
          <Col padding="50px 0 0 0">
            <Text tDecorations="underline" lHeight={31} fColor="black.200">
              {description}
            </Text>
          </Col>
          <Col padding="10px 0 0 0">
            <Row alignItems="center" gap={10}>
              <ImUser color="black" />
              <Text lHeight={31} fColor="gray.100">
                {title}
              </Text>
            </Row>
          </Col>
        </Row>
      </Row_wrapper>
      <Image_wrapper>
        <Image src={photo} width={35} height={80} />
      </Image_wrapper>
    </CoperateCardWrapper>
  );
};

export default CoperateCard;
