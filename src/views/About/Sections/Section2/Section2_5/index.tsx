import React from "react";
// import  component
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
//  import styled component
import { SectionWrapper } from "./index.style";
import { Border } from "components/Border";
// import type
import { CardItemProps } from "types/components/Card";
// import image
import photo1 from "assets/images/business4-clients-pic1.png";
import photo2 from "assets/images/business4-clients-pic2.png";
import photo3 from "assets/images/business4-clients-pic3.png";
import CoperateCard from "components/Card/CoperateCard";

// define the data
const data: CardItemProps[] = [
  {
    image: photo1,
    description:
      "Vivamus nibh. Etiam ut metus. Integer lorem eu felis. Mauris convallis libero. Aenean feugiat facilisis risus. Suspendisse pede. Duis elementum vel, eleifend et, ultricies est. Duis sed ipsum dolor sit amet augue nec malesuada quis, aliquam convallis.",
    title: "Suspendisse dapibus",
  },
  {
    image: photo2,
    description:
      "Fusce quam elit viverra elit. Nam hendrerit. Donec molestie justo ac elit tincidunt in, ipsum. Sed laoreet enim. Phasellus vestibulum. Nunc eu pede semper aliquam enim.",
    title: "Pellentesque sagittis",
  },
  {
    image: photo3,
    description:
      "Duis aliquam, wisi sapien tristique vitae, ligula. Fusce non sem volutpat massa volutpat odio et netus et ligula. Sed feugiat ac, rhoncus a, iaculis at, egestas sit amet, accumsan nisl sapien magna neque, eu orci luctus augue.",
    title: "Convallis viverra",
  },
];
//  - - - --  -
const Section2_5: React.FC = () => {
  return (
    <SectionWrapper>
      <Row flexDirection="column" alignItems="center" justifyContent="center">
        <Col>
          <Text fSize={42} fWeight={700} lHeight={42} fColor="orange.regular">
            We cooperate with
          </Text>
        </Col>
        <Col item={24} padding="30px 0 50px 0">
          <Border bColor="gray.regular" bSize={1} />
        </Col>
      </Row>
      <Row flexDirection="row" gap={40}>
        {data.map((item: CardItemProps, index: number) => {
          return (
            <Col item={8} key={`card-item-${index}`}>
              <CoperateCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </Col>
          );
        })}
      </Row>
    </SectionWrapper>
  );
};

export default Section2_5;
