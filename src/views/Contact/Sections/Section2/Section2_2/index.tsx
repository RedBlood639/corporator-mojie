import React from "react";
// import style component
import { SectionWrapper, Content_wrapper, Image_wrapper } from "./index.style";
// import component
import { WithContainer } from "components/Container";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
// import image
import photo1 from "assets/images/business4-wrap-bg2.jpg";
import photo2 from "assets/icon/business4-icon7.png";
import photo3 from "assets/icon/business4-icon8.png";
import photo4 from "assets/images/business4-section-bg4.png";
const Content: React.FC = () => {
  return (
    <>
      <Content_wrapper>
        <Row>
          <Col>
            <Col>
              <Text
                fColor="black.regular"
                fSize={36}
                lHeight={42}
                fWeight={700}
              >
                Mojie
              </Text>
            </Col>
            <Col padding="30px 0 50px 0">
              <Text
                fColor="black.regular"
                fSize={24}
                lHeight={30}
                fWeight={700}
                responsive={{ 320: { fSize: 17 } }}
              >
                Unit 1411, 14/Floor, Cosco Tower,183 Queen's Road Central,
                Sheung Wan, Hong Kong
              </Text>
            </Col>
            <Row flexDirection="column" gap={30}>
              <Col>
                <Row>
                  <Image src={photo3} width={50} height={50} />
                  <Text
                    fWeight={700}
                    fSize={34}
                    lHeight={40}
                    fColor="black.regular"
                    responsive={{ 320: { fSize: 27 } }}
                  >
                    &nbsp;&nbsp;support@mojie.tv
                  </Text>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content_wrapper>
    </>
  );
};

const Section2_2: React.FC = () => {
  return (
    <SectionWrapper>
      <Row
        alignItems="center"
        responsive={{
          1024: { flexDirection: "column-reverse", padding: "30px 0" },
        }}
      >
        <Col item={12} responsive={{ 1024: { item: 24 } }}>
          <WithContainer SectionView={Content} />
          <Image_wrapper>
            <Image src={photo4} mode="intrinsic" />
          </Image_wrapper>
        </Col>
        <Col item={12} responsive={{ 1024: { item: 24, padding: "30px 0" } }}>
          <Image src={photo1} mode="intrinsic" />
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section2_2;
