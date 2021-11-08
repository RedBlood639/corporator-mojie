import { Col, Row } from "components/Layout";
import React from "react";

import { SectionWrapper } from "./index.style";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { FaCommentDollar } from "react-icons/fa";
import { Image } from "components/Image";

// import photo
import photo1 from "assets/images/business4-home-pic4.png";

const Secton2_1: React.FC = () => {
  return (
    <SectionWrapper>
      <Row
        gap={60}
        alignItems="center"
        responsive={{
          768: { flexDirection: "column", justifyContent: "center", gap: 30 },
        }}
      >
        <Col item={11} responsive={{ 768: { item: 24 } }}>
          <Image src={photo1} width={674.5} height={452.63} />
        </Col>
        <Col item={10} responsive={{ 768: { item: 22 } }}>
          <Row
            flexDirection="column"
            gap={30}
            responsive={{
              425: { justifyContent: "center", alignItems: "center" },
            }}
          >
            <Col padding="0 0 50px 0" responsive={{ 768: { padding: "0" } }}>
              <Text
                fSize={50}
                fWeight={700}
                lHeight={55}
                responsive={{
                  425: { fSize: 30, tAlign: "center" },
                }}
              >
                Who we are
              </Text>
            </Col>
            <Col padding="0 0 30px 0" responsive={{ 768: { padding: "0" } }}>
              <Text responsive={{ 425: { tAlign: "center", fSize: 15 } }}>
                Mojie incorporates user-generated content into eCommerce to
                create a groundbreaking interactive experience for buyers and
                sellers alike.
              </Text>
            </Col>
            <Col>
              <Button bColor="primary" bSize="big" icon={<FaCommentDollar />}>
                READ ABOUT US
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Secton2_1;
