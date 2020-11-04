import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import manyBrandImage from "images/bsk/BSK_LOGOS.png";
import { SectionTitle } from "components/misc/Headings.js";

const Container = tw.div`relative py-12`;
const OneColumnContainer = styled.div`
  ${tw`max-w-screen-xl mx-auto`}
`;
const BrandImage = styled.img`
  ${tw`w-full`}
`;
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const UnderLine = tw.div`flex justify-center mb-6`;
const Line = styled.div`
  ${tw`w-12 h-1`}
  background: #fba00c;
`;
const Line1 = styled.div`
  ${tw`w-12 h-1`}
  background: #73a1fd;
`;
const Line2 = styled.div`
  ${tw`w-12 h-1`}
  background: #00d569;
`;

export default () => {
  return (
    <Container>
      <OneColumnContainer>
        <SectionTitle>
          Trusted by the Leading Industry Disruptors
        </SectionTitle>
        <UnderLine>
          <Line />
          <Line1 />
          <Line2 />
        </UnderLine>
        <BrandImage src={manyBrandImage} alt="Many Brand Image" />
      </OneColumnContainer>
    </Container>
  );
};
