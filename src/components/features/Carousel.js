import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner1 from "images/bsk/banner1.png";
import banner2 from "images/bsk/banner2.png";
import banner3 from "images/bsk/banner3.png";
import banner4 from "images/bsk/banner4.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto`}
  
  .thumbs-wrapper {
    display: none !important;
  }
`;

const BrandImage = styled.img`
  ${tw`w-full`}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  return (
    <Container>
      <ThreeColumnContainer>
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          swipeable={true}
        >
          <BrandImage src={banner1} alt="banner1" />
          <BrandImage src={banner2} alt="banner2" />
          <BrandImage src={banner3} alt="banner3" />
          <BrandImage src={banner4} alt="banner4" />
        </Carousel>
      </ThreeColumnContainer>
    </Container>
  );
};
