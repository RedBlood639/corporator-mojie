import React from "react";
import { SectionWrapper, CardContainer, GroupCard } from "./index.style";
import { Row, Col } from "components/Layout";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { FaQuestion } from "react-icons/fa";
import { Image } from "components/Image";
import { SimpleCard } from "components/Card";
import photo1 from "assets/images/business4-home-pic7.jpg";
import photo2 from "assets/icon/business4-icon5.png";
const Section4_2: React.FC = () => {
  return (
    <SectionWrapper>
      <Row gap={30}>
        <Col item={12}>
          <GroupCard>
            <Image src={photo1} width={534} height={428} />
            <CardContainer>
              <SimpleCard
                description="Mauris sagittis faucibus ipsum est porttitor curae diam litora rhoncus enim mattis ornare cras congue rhoncus molestie fermentum sodales."
                image={photo2}
                kind="small"
                width={59.75}
                height={59.75}
              />
            </CardContainer>
          </GroupCard>
        </Col>
        <Col item={12}>
          <Col>
            <Text fWeight={700} fSize={24} fColor="black.regular">
              Turpis convallis cubilia tincidunt
            </Text>
          </Col>
          <Col>
            <Text fWeight={700} fSize={50} fColor="black.regular" lHeight={55}>
              Adipiscing odio neque praesent
            </Text>
          </Col>
          <Col>
            <br />
            <Text fColor="black.regular">
              Netus iaculis sed nostra lacinia 12% consectetur nullam etiam
              netus cursus rhoncus porta mattis vestibulum feugiat faucibus
              praesent consequat varius ut enim odio massa purus bibendum
              convallis diam.
            </Text>
          </Col>
          <Col>
            <br />
            <br />
            <Button bColor="primary" bSize="big" icon={<FaQuestion />}>
              FAQ
            </Button>
          </Col>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section4_2;
