import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import DesignIllustration from "../../images/bsk/cyber.png";

const Container = tw.div`relative`;
const TwoColumn = styled.div`
  ${tw`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto`}
`;
const LeftColumn = styled.div`
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #1966f8;
  z-index: 1;
  height: 394px;

  @media (max-width: 1023px) {
    margin-top: 0;
    border-radius: 20px;
    height: auto;
  }
  ${tw`
    relative md:w-full lg:w-6/12 text-center mx-auto lg:max-w-none lg:text-left
    sm:px-16 sm:py-12 px-8 py-8
  `}
`;
const RightColumn = styled.div`
  margin-left: -40px;
  @media (max-width: 1023px) {
    margin-left: 0px;
  }
  ${tw`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`}
`;

const Heading = tw.h1`
  font-bold text-xl md:text-3xl lg:text-3xl xl:text-4xl text-white leading-tight pr-0 lg:pr-10
  md:max-w-xl lg:max-w-none mx-auto
`;
const Paragraph = tw.p`
  my-5 lg:mb-8 lg:mt-5 text-base xl:text-lg text-white
  md:max-w-xl lg:max-w-none mx-auto
`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`
      sm:pr-48 pl-8 py-3 rounded-md sm:rounded-xl border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-primary-500 hover:border-gray-500
      mb-2 sm:mb-0
    `}  }
  button {
    ${tw`
      w-full sm:absolute right-0 top-0 bottom-0 bg-orange-default text-gray-100 font-bold rounded-md sm:rounded-l-none sm:rounded-r-xl py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-orange-400 transition duration-300
    `}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Penetration Testing starting at $4,500 USD.
            </Heading>
            <Paragraph>
              SOC2, HIPAA, and Vendor/Partner compliant pentests satisfy industry requirements and allow you to focus your time on what matters to your business. 
            </Paragraph>
            <Actions>
              <input type="text" placeholder="Email" />
              <button>Become Compliant</button>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
      </Container>
    </>
  );
};
