import styled from 'styled-components';
import theme from 'consts/theme';

export const HeadingWrapper = styled.div`
  height: 50px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};

  ${theme.mediaQueries.large} {
    background-color: ${theme.colors.primary};
  }
`;

export const Heading = styled.h1`
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  font-size: 26px;
  line-height: 42px;
  margin: 0;

  ${theme.mediaQueries.large} {
    color: ${theme.colors.white};
  }
`;
