import tw from "twin.macro";
import styled from "styled-components";

export const SectionHeading = styled.h4`
  ${tw`relative font-bold text-orange-default pb-2 ml-0 pl-12 md:ml-20 text-xl uppercase`}

  &::before {
    content: "";
    width: 30px;
    border-bottom: solid 4px #fba00c;
    position: absolute;
    left: 0;
    top: 12px;
    z-index: 1;
  }
`;
export const SubHeading = tw.h1`font-bold text-black pl-0 md:pl-20 text-2xl md:text-4xl leading-tight max-w-screen-sm`;

export const SectionTitle = tw.h1`font-bold text-black mb-6 text-2xl md:text-4xl lg:text-5xl leading-tight text-center`;
