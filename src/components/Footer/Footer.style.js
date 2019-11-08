import styled from 'styled-components';
import theme from 'consts/theme';
import LogoImage from './logo.png';

export const FootingWrapper = styled.div`
  padding-top: ${theme.space.medium}px;
  padding-bottom: ${theme.space.medium}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};

  ${theme.mediaQueries.large} {
    background-color: ${theme.colors.primary};
  }
`;

export const Logo = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${LogoImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 10px;
`;

export const Heading = styled.h1`
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  font-size: 14px;
  line-height: 20px;
  margin: 0;

  ${theme.mediaQueries.large} {
    color: ${theme.colors.white};
  }
`;

export const Subheading = styled.div`
  font-size: 7px;
  line-height: 9px;
  color: ${theme.colors.primary};

  ${theme.mediaQueries.large} {
    color: ${theme.colors.white};
  }
`;
