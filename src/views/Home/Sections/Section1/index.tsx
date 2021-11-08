import React from "react";
//  import component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
// import styled component
import { SectionWrapper, Content_Inner } from "./index.style";

const Section1: React.FC = () => {
  return (
    <SectionWrapper>
      <video
        src={"video.mp4"}
        autoPlay={true}
        width="100%"
        muted={true}
        loop={true}
      />
      <Content_Inner>
        <Row
          gap={40}
          justifyContent="center"
          alignItems="center"
          responsive={{
            768: {
              gap: 10,
              flexDirection: "column",
              justifyContent: "center",
            },
          }}
        >
          <Col item={15} responsive={{ 768: { item: 22 } }}>
            <Col>
              <Text
                fSize={20}
                fWeight={700}
                fColor="orange.light"
                responsive={{
                  768: { fSize: 17 },
                }}
              >
                Our Mission
              </Text>
            </Col>
            <Col padding="10px 0 0 0">
              <Text
                fSize={65}
                fWeight={700}
                lHeight={70}
                tAlign="center"
                responsive={{
                  1024: { fSize: 50, lHeight: 55 },
                  768: { tAlign: "center", padding: "0 0 30px 0" },
                  425: { fSize: 30, lHeight: 35 },
                }}
              >
                The next-gen way to connect with digital shoppers
              </Text>
            </Col>
          </Col>
        </Row>
      </Content_Inner>
    </SectionWrapper>
  );
};

export default Section1;
