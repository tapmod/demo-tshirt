import React from 'react';
import { Heading, HeadingWrapper, Logo, Subheading, TextWrapper } from './Header.style';

const Header = props => (
  <HeadingWrapper>
    <Logo />
    <TextWrapper>
      <Heading>Tapmod Studio</Heading>
      <Subheading>Demo project for testing purposes</Subheading>
    </TextWrapper>
  </HeadingWrapper>
);

export default Header;
