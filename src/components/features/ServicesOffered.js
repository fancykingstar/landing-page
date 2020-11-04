import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, SubHeading } from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import RetestImage from "images/bsk/retest.png";

const Container = tw.div`relative pt-12 pb-12 md:py-20`;
const TwoColumn = tw.div`relative max-w-screen-xl mx-auto`;

const Row = tw.div`flex flex-col xs:flex-row flex-wrap py-0 px-1`;
const Column = styled.div(props => [
  tw`flex-1 py-0 px-1`,
  props.top ? tw`mt-0 xs:-mt-24 w-full xs:w-5/6` : tw`mt-0 w-full`,

  `div {
    margin-top: 8px;
    vertical-align: middle;
  }`,
  `.extra-box {
    display: none;
    
    @media (min-width: 1024px) {
      display: block;
    }
  }`
]);

const Card = styled.div`
  transition: all .3s ease-in-out;
  &:hover {
    transform: translateY(-1rem);
  }
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 40px 20px rgba(0,0,0,0.05);

  ${tw`flex flex-col flex-1 text-center items-center h-full mx-1 px-2 py-8`}
  .title {
    ${tw`tracking-wider font-bold text-black text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-black leading-snug px-8`}
  }
`;

const LeftFirstBox = styled.div`
  width: 120px;
  height: 120px;
  ${tw`bg-primary-1000 mr-4`}
`;

const LeftSecondBox = styled.div`
  width: 160px;
  height: 160px;
  ${tw`bg-primary-1000 mr-4`}
`;

const RightFirstBox = styled.div`
  width: 100px;
  height: 100px;
  ${tw`bg-primary-1000 ml-4`}
`;

const RightSecondBox = styled.div`
  width: 100px;
  height: 160px;
  ${tw`bg-primary-1000 ml-4`}
`;

const Margin = tw.div`mb-12 xs:mb-24`;

export default () => {
  const card1 = {
    src: RetestImage,
    alt: "RetestImage",
    title: "Network infrastructure",
    description: "Reduce your attack surface by monitoring your publicly and privately accessible servers and devices"
  };

  const card2 = {
    src: RetestImage,
    alt: "RetestImage",
    title: "Endpoint devices",
    description: "Find weaknesses in your end-point devices that could leave you exposed"
  };

  const card3 = {
    src: RetestImage,
    alt: "RetestImage",
    title: "Websites",
    description: "Scan your websites for vulnerabilities such as SQL injection and cros-site scripting"
  };

  const card4 = {
    src: RetestImage,
    alt: "RetestImage",
    title: "Cloud Systems",
    description: "Identify common security issues and exposures in your cloud environment"
  };

  return (
    <Container>
      <TwoColumn>
        <SectionHeading>
          Services Offered
        </SectionHeading>
        <SubHeading>
          What does a penetration test by BSK Security cover?
        </SubHeading>
        <Margin />
        <Row> 
          <Column>
            <div css={tw`w-full flex flex-row items-end`}>
              <LeftFirstBox className="extra-box" />
              <Card>
                <span className="imageContainer">
                  <img css={tw`w-64`} src={card1.src} alt="" />
                </span>
                <span className="textContainer">
                  <span className="title">{card1.title}</span>
                  <p className="description">
                    {card1.description}
                  </p>
                </span>
              </Card>
            </div>
            <div css={tw`w-full md:w-5/6 flex flex-row items-start ml-auto`}>
              <LeftSecondBox className="extra-box" />
              <Card>
                <span className="imageContainer">
                  <img css={tw`w-32`} src={card2.src} alt="" />
                </span>
                <span className="textContainer">
                  <span className="title">{card2.title}</span>
                  <p className="description">
                    {card2.description}
                  </p>
                </span>
              </Card>
            </div>
          </Column>
          <Column top={true}>
            <div css={tw`w-full md:w-5/6 flex flex-row items-end`}>
              <Card>
                <span className="imageContainer">
                  <img css={tw`w-24`} src={card3.src} alt="" />
                </span>
                <span className="textContainer">
                  <span className="title">{card3.title}</span>
                  <p className="description">
                    {card3.description}
                  </p>
                </span>
              </Card>
              <RightFirstBox className="extra-box" />
            </div>
            <div css={tw`w-full flex flex-row items-start`}>
              <Card>
                <span className="imageContainer">
                  <img css={tw`w-56`} src={card4.src} alt="" />
                </span>
                <span className="textContainer">
                  <span className="title">{card4.title}</span>
                  <p className="description">
                    {card4.description}
                  </p>
                </span>
              </Card>
              <RightSecondBox className="extra-box" />
            </div>
          </Column>
        </Row>
      </TwoColumn>
    </Container>
  );
};
