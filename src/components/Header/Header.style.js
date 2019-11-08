import styled from 'styled-components';
import theme from 'consts/theme';

export const Heading = styled.h1`
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.primary};

  ${theme.mediaQueries.large} {
    color: ${theme.colors.white};
  }
`;

export const HeadingWrapper = styled.div`
  background-color: ${theme.colors.white};
  padding-top: ${theme.space.medium}px;
  padding-bottom: ${theme.space.medium}px;

  ${theme.mediaQueries.large} {
    background-color: ${theme.colors.primary};
  }
`;
