import React from 'react';
import { Heading, FootingWrapper, Logo, TextWrapper } from './Footer.style';

const Footer = props => {
  return (
    <FootingWrapper>
      <Logo />
      <TextWrapper>
        <Heading>Tapmod Studio</Heading>
      </TextWrapper>
    </FootingWrapper>
  );
};

export default Footer;
