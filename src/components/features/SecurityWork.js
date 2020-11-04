import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, SubHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"
import LineImage from "images/bsk/timeline.png";
import callImage from "images/bsk/call.svg";
import agileImage from "images/bsk/agile-flat-style.svg";
import testImage from "images/bsk/test.svg";
import reviewImage from "images/bsk/customer-review.svg";
import retestImage from "images/bsk/retest.png";

const Container = tw.div`relative py-12 md:pt-20 md:pb-32 bg-primary-1100 -mx-8 px-8`;
const OneColumn = tw.div`relative max-w-screen-xl mx-auto`;

const TimeLineImage = styled.img`
  ${tw`absolute w-full`}

  @media (max-width: 1023px) {
    ${tw`hidden`}
  }
`;

const TimeLineList = styled.div`
  ${tw`
    flex lg:flex-row md:flex-col justify-between items-center px-10 transform -translate-y-8 xl:translate-y-0
  `}

  @media (max-width: 1023px) {
    ${tw`relative mx-auto block`}

    &::after {
      content: '';
      position: absolute;
      width: 6px;
      background-color: #fba00c;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
    }

    .timeline {
      position: relative;
      width: 50%;
    }

    .timeline::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      right: -12.5px;
      background-color: white;
      border: 4px solid #fba00c;
      top: 15px;
      border-radius: 50%;
      z-index: 1;
    }

    .timeline > div {
      transform: translateY(0) !important;
    }

    .timeline-left {
      left: 0%;
    }

    .timeline-right {
      left: 50%;

      & > div {
        ${tw`ml-auto`}
      }

      &::after {
        left: -12.5px;
      }
    }
  }

  @media (max-width: 600px) {
    ${tw`px-0`}

    &::after {
      ${tw`left-0`}
    }

    .timeline {
      ${tw`w-full`}

      &::after {
        left: -27.5px;
      }

      &.timeline-left > div {
        transform: translate(30px, 0) !important;
      }
    }

    .timeline-left, .timeline-right {
      left: 15px;
    }
  }

  .timeline1 {
    transform: translateY(120px);
  }

  .timeline2 {
    transform: translateY(60px);
  }

  .timeline4 {
    transform: translateY(60px);
  }

  .timeline5 {
    transform: translateY(-20px);
  }
`;

const TimeLine = styled.div`
  width: 175px;

  ${tw`flex flex-col`}
`

const TimeLineBox = styled.div`
  width: 158px;
  height: 158px;
  z-index: 1;
  background: white;
  border: 1px solid #fba00c;
  border-radius: 60px;
  box-shadow: 0 0px 0px 0 rgba(251, 160, 12, 0.2), 0 6px 6px 0px rgba(251, 160, 12, 0.59);

  ${tw`flex justify-center items-center`}

  img {
    ${tw`w-5/6`}
  }
`;

const TimeLineContent = styled.div`
  ${tw`flex flex-col leading-relaxed py-8`}
  .title {
    ${tw`font-bold text-xl text-black`}
  }
  .description {
    ${tw`my-1 text-black`}
  }
`;

const Margin = tw.div`mb-20`;

export default () => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const list = [
    {
      src: callImage,
      alt: "call",
      title: "Screening Call",
      description: "Speak with one of our specialists to ensure our services meet your needs."
    },
    {
      src: agileImage,
      alt: "Scope",
      title: "Scope",
      description: "Determine your specific testing requirements and project timeline."
    },
    {
      src: testImage,
      alt: "Test",
      title: "Test",
      description: "Our team will execute compliant tests scripts aimed at finding system vulnerabilities."
    },
    {
      src: reviewImage,
      alt: "Review",
      title: "Review",
      description: "Receive detailed reporting that outlines vulnerabilities that puts you data at risk."
    },
    {
      src: retestImage,
      alt: "Retest",
      title: "Retest",
      description: "Once updated have been deployed, BSK Consulting will retest the application, free of charge."
    },
  ]

  return (
    <Container>
      <OneColumn>
        <SectionHeading>
          What's included
        </SectionHeading>
        <SubHeading>
          How does BSK Security work?
        </SubHeading>
        <Margin />
        <TimeLineImage src={LineImage} alt="Line Image" />
        <TimeLineList className="timeline-list">
          {
            list.map((item, i) => (
              <div className={`timeline ${i % 2 == 0 ? "timeline-left" : "timeline-right"}`}>
                <TimeLine className={`timeline${i+1}`}>
                  <TimeLineBox>
                    <img src={item.src} alt={item.alt} />
                  </TimeLineBox>
                  <TimeLineContent>
                    <p className="title">
                      {item.title}
                    </p>
                    <p className="description">
                      {item.description}
                    </p>
                  </TimeLineContent>
                </TimeLine>
              </div>
            ))
          }
        </TimeLineList>
      </OneColumn>
    </Container>
  );
};
