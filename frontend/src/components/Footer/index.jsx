import React from "react";
import { Link } from "react-router-dom";

import diagram from "@assets/images/diagram.svg";
// import { footerItems } from "@constants";

import {
  FooterContainer,
  FooterWrapper,
  Item,
  DiagramWrapper,
  Quote,
  LinksWrapper,
  MainLinks,
  SubLinks,
  FooterCopyright,
} from "./styled";

const Footer = () => {
  const { name, quote, mainLinks, subLinks, copyright } = footerItems;

  return (
    <FooterContainer data-cy="footer">
      {/* <FooterWrapper>
        <Item>
          <DiagramWrapper>
            <img src={diagram} alt="diagram" />
            <p>{name}</p>
          </DiagramWrapper>
          <Quote>
            <p>{quote}</p>
          </Quote>
        </Item>
        <Item>
          <LinksWrapper>
            {mainLinks.map((mainLink, index) => (
              <div key={mainLink}>
                <MainLinks>
                  <span>{mainLink}</span>
                </MainLinks>
                <SubLinks>
                  {subLinks.slice(index * 2, index * 2 + 2).map((link) => (
                    <Link key={link} to={`/sublinks/${link.toLowerCase()}`}>
                      {link}
                    </Link>
                  ))}
                </SubLinks>
              </div>
            ))}
          </LinksWrapper>
        </Item>
      </FooterWrapper> */}
      <FooterCopyright>{copyright}</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
