import styled from "styled-components";
//
export const SectionWrapper = styled.div``;

export const Content_wrapper = styled.div`
  padding: 180px 0;
  @media screen and (max-width: 425px) {
    padding: 120px 0 80px 0;
  }
  position: relative;
  img {
    z-index: 1;
  }
`;
export const Image_wrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
