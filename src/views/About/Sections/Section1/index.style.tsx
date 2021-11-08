import styled from "styled-components";
//
import photo from "assets/images/business4-section-bg4.png";

export const SectionWrapper = styled.div`
  padding: 160px 25px 120px 25px;
  width: 100%;
  background-image: url(${photo.src});
  background-repeat: no-repeat;
  background-position: center bottom;
  @media screen and (max-width: 425px) {
    padding: 120px 0;
  }
`;
