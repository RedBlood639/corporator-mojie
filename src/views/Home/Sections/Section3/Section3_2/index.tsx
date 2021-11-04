import React from "react";
import { SectionWrapper } from "./index.style";
import { Row } from "components/Layout";
import { MiddleCard } from "components/Card";
//  import image
import photo1 from "assets/images/business4-icon2.png";
import photo2 from "assets/images/business4-icon4.png";
import photo3 from "assets/images/business4-icon3.png";

const data = [
  {
    title: "Vel rhoncus elemen",
    description:
      "Volutpat ultricies vehicula id id duis hendrerit at hac egestas semper est primis etiam.",
    image: photo1,
  },
  {
    title: "Quisque taciti erat",
    description:
      "Viverra hac non sociosqu eu aenean et ullamcorper praesent ante mattis bibendum morbi.",
    image: photo2,
  },
  {
    title: "Duis ultricies quisque",
    description:
      "Elit lacinia et elementum faucibus rhoncus class egestas duis facilisis faucibus ligula.",
    image: photo3,
  },
];

const Section3_3: React.FC = () => {
  return (
    <SectionWrapper>
      <Row justifyContent="center" alignItems="center" gap={30}>
        {data.map((item: any, index: number) => {
          return (
            <MiddleCard
              key={`card-item-${index}`}
              title={item.title}
              description={item.description}
              image={item.image}
              width={60}
              height={60}
            />
          );
        })}
      </Row>
    </SectionWrapper>
  );
};

export default Section3_3;
