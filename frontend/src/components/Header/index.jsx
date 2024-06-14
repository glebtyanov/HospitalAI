import React from "react";

import bigLogo from "@assets/images/bigLogo.png";
import { headerData } from "@constants";

import {
  SectionWrapper,
  TextWrapper,
  Quote,
  Title,
  LogoWrapper,
} from "./styled";

const Header = () => {
  const { name, subname, quote } = headerData;

  return (
    <header data-cy="header">
      <SectionWrapper>
        <TextWrapper>
          <Title>{name}</Title>
          <Title>{subname}</Title>
          <Quote>{quote}</Quote>
        </TextWrapper>
        <LogoWrapper>
          <img src={bigLogo} alt="logo" />
        </LogoWrapper>
      </SectionWrapper>
    </header>
  );
};

export default Header;
