import React from "react";

import { Col, Row } from "components/Layout";
import { SectionWrapper } from "./index.style";
import { Text } from "components/Text";
import { Image } from "components/Image";
//  inmport image
import photo1 from "assets/images/business4-home-pic1.png";
import photo2 from "assets/images/business4-home-pic2.png";
import photo3 from "assets/images/business4-home-pic3.png";

type dataProps = {
  image: any;
  count: number;
  title: string;
};

const data: dataProps[] = [
  {
    count: 1540,
    title: "ELEIFEND JUSTO",
    image: photo1,
  },
  {
    count: 24,
    title: "VESTIBULUM DAPIBUS",
    image: photo2,
  },
  {
    count: 1540,
    title: "DAPIBUS RISUS",
    image: photo3,
  },
];

const GroupItem: React.FC<{ item: dataProps }> = ({ item }) => {
  return (
    <Row flexDirection="column" justifyContent="center" alignItems="center">
      <Col>
        <Image src={item.image} width={45} height={48} />
      </Col>
      <Col>
        <Text fWeight={700} fSize={50}>
          {item.count}
        </Text>
      </Col>
      <Col>
        <Text fSize={15}>{item.title}</Text>
      </Col>
    </Row>
  );
};

const Section2_2: React.FC = () => {
  return (
    <SectionWrapper>
      <Row>
        {data.map((item: dataProps, index: number) => {
          return (
            <Col item={8} key={`item-${index}`}>
              <GroupItem item={item} />
            </Col>
          );
        })}
      </Row>
    </SectionWrapper>
  );
};

export default Section2_2;
