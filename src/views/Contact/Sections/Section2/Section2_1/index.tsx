import React from "react";
//import styled component
import { SectionWrapper } from "./index.style";
// import component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Image } from "components/Image";
import { WithContainer } from "components/Container";
// import image
import photo from "assets/images/business4-wrap-bg1.png";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

const Content: React.FC = () => {
  return (
    <>
      <Row flexDirection="column" gap={20}>
        <Col>
          <Row gap={20}>
            <Col item={12}>
              <Row flexDirection="column" gap={10}>
                <Text fColor="black.regular" fWeight={700}>
                  First Name
                </Text>
                <Input
                  iColor="primary"
                  iSize="primary"
                  iFont="bold"
                  placeholder="James"
                />
              </Row>
            </Col>
            <Col item={12}>
              <Row flexDirection="column" gap={10}>
                <Text fColor="black.regular" fWeight={700}>
                  Last Name
                </Text>
                <Input
                  iColor="primary"
                  iSize="primary"
                  iFont="bold"
                  placeholder="Smith"
                />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row flexDirection="column" gap={10}>
            <Text fColor="black.regular" fWeight={700}>
              E-mail address
            </Text>
            <Input
              iColor="primary"
              iSize="primary"
              iFont="bold"
              placeholder="youremail@google.com"
            />
          </Row>
        </Col>
        <Col>
          <Row flexDirection="column" gap={10}>
            <Text fColor="black.regular" fWeight={700}>
              Message
            </Text>
            <TextArea rows={8} />
          </Row>
        </Col>
        <Col item={24}>
          <Button bSize="full">Submit</Button>
        </Col>
      </Row>
    </>
  );
};

const Section2_1: React.FC = () => {
  return (
    <SectionWrapper>
      <Row
        alignItems="center"
        responsive={{ 1024: { flexDirection: "column" } }}
      >
        <Col item={12} responsive={{ 1024: { item: 24 } }}>
          <Image src={photo} mode="intrinsic" />
        </Col>
        <Col item={12} responsive={{ 1024: { item: 24 } }}>
          <WithContainer SectionView={Content} />
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section2_1;
