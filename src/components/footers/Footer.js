import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/logo-light.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import Ellipse226 from "images/bsk/ellipse-226.png";
import Ellipse144 from "images/bsk/ellipse-144.png";
import Ellipse84 from "images/bsk/ellipse-84.png";
import EllipseGrid from "images/bsk/ellipsegrid.png";

const Container = tw.div`relative bg-primary-1000 text-gray-100 -mb-8 -mx-8 pt-20 pb-4 lg:pt-40 lg:pb-4`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12 px-4 sm:px-0`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

const Divider = tw.div`mt-12 lg:mt-24 mb-4 border-b-2 border-white w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between px-12 xl:px-0`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-2 md:mt-0 font-medium text-white`;

const SocialLinksContainer = tw.div`mt-2 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg hidden lg:block`;
const DecoratorBlob1 = styled.img`
  ${tw`absolute top-0 left-0 transform -translate-x-32 translate-y-16 text-primary-700`}
`;
const DecoratorBlob2 = styled.img`
  ${tw`absolute top-0 right-0 transform -translate-x-24 -translate-y-24 text-primary-700`}
`;
const DecoratorBlob3 = styled.img`
  ${tw`absolute top-0 left-0 transform translate-x-32 translate-y-8 text-primary-700`}
`;
const DecoratorBlob4 = styled.img`
  ${tw`absolute bottom-0 right-0 transform -translate-x-6 -translate-y-24 text-primary-700`}
`;
const DecoratorBlob5 = styled.img`
  ${tw`absolute top-0 left-0 transform translate-x-32 translate-y-64 text-primary-700`}
`;
const DecoratorBlob6 = styled.img`
  ${tw`absolute top-0 right-0 transform -translate-x-20 translate-y-48 text-primary-700`}
`;

const Security = styled.div`
  max-width: 500px;
  ${tw`mx-auto`}
`;
const Heading = tw.h1`font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white leading-tight pr-0 sm:pr-10 text-center`;
const Paragraph = tw.p`my-5 lg:mb-8 lg:mt-5 text-base xl:text-lg text-white px-12`;

const Actions = styled.div`
  ${tw`relative w-full text-center mx-auto lg:mx-0`}
  input {
    ${tw`text-black sm:pr-48 pl-8 py-3 mb-2 sm:mb-0 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-primary-500 hover:border-gray-500 h-12 sm:h-16`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-orange-default text-gray-100 font-bold rounded-full my-1 mx-1 py-4 flex items-center justify-center sm:w-48 sm:leading-none focus:outline-none hover:bg-orange-400 transition duration-300 h-12 sm:h-auto`}
  }
`;

export const NavLinks = tw.div`inline-block`;
export const NavLink = tw.a`
  my-2 text-sm mx-4 lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Security>
            <Heading>
              Security Matters
            </Heading>
            <Paragraph>
              Please leave your email below and one of our specialists will be in touch with you shortly to get started on your compliance journey.
            </Paragraph>
            <Actions>
              <input type="text" placeholder="Enter your email address" />
              <button>Let's Talk</button>
            </Actions>
          </Security>
        </FiveColumns>
      </Content>
      <Divider />
      <Content>
        <ThreeColRow>
          <CopywrightNotice>
            &copy; {new Date().getFullYear()} BSK Security
          </CopywrightNotice>
          <SocialLinksContainer>
            <NavLinks key={1}>
              <NavLink href="/#">About</NavLink>
              <NavLink href="/#">Testimonials</NavLink>
              <NavLink href="/#">Contact</NavLink>
            </NavLinks>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
      <DecoratorBlobContainer>
        <DecoratorBlob1 src={Ellipse226} alt="Ellipse226" />
        <DecoratorBlob2 src={Ellipse226} alt="Ellipse226" />
        <DecoratorBlob3 src={EllipseGrid} alt="EllipseGrid" />
        <DecoratorBlob4 src={EllipseGrid} alt="EllipseGrid" />
        <DecoratorBlob5 src={Ellipse144} alt="Ellipse144" />
        <DecoratorBlob6 src={Ellipse84} alt="Ellipse84" />
      </DecoratorBlobContainer>
    </Container>
  );
};
