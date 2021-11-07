import React from "react";
import { SectionWrapper } from "./index.style";
import { Row, Col } from "components/Layout";
import { MiddleCard } from "components/Card";
//  import image
import photo1 from "assets/icon/business4-icon2.png";
import photo2 from "assets/icon/business4-icon4.png";
import photo3 from "assets/icon/business4-icon2.png";

const data = [
  {
    title: "Relationship Oriented",
    description:
      "We are a relationship-oriented company. This means we work hard to earn your business for our goal is to build a long-term relationship.",
    image: photo1,
  },
  {
    title: "User-Generated Content ",
    description:
      "We believe in user-generated content in the formation of the marketplace community in the most authentic sense.",
    image: photo2,
  },
  {
    title: "Social Shopping",
    description:
      "We see the lack of a two-way conversation in regular e-commerce shopping so we promote the idea of social shopping to fill that need.",
    image: photo3,
  },
];

const Section2_7: React.FC = () => {
  return (
    <SectionWrapper>
      <Row
        justifyContent="center"
        alignItems="flex-start"
        gap={20}
        responsive={{
          768: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
          },
        }}
      >
        {data.map((item: any, index: number) => {
          return (
            <Col item={8} responsive={{ 768: { item: -1 } }}>
              <MiddleCard
                key={`card-item-${index}`}
                title={item.title}
                description={item.description}
                image={item.image}
                width={60}
                height={60}
              />
            </Col>
          );
        })}
      </Row>
    </SectionWrapper>
  );
};

export default Section2_7;
