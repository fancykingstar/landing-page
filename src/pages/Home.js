import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Carousel from "components/features/Carousel.js";
import SecurityWork from "components/features/SecurityWork.js";
import ServicesOffered from "components/features/ServicesOffered.js";
import BSKLogos from "components/features/BSKLogos.js";
import Footer from "components/footers/Footer.js";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Carousel />
      <SecurityWork />
      <ServicesOffered />
      <BSKLogos />
      <Footer />
    </AnimationRevealPage>
  );
}
