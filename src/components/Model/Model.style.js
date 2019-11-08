import styled from 'styled-components';
import theme from 'consts/theme';

export const Wrapper = styled.div`
  height: calc(100% - 80px);
  width: 100%;
  position: relative;
  background-color: #f5f5f5;
  iframe {
    border: none;
    height: calc(100% - 50px);
    width: 100%;
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  }
`;

export const Configurator = styled.div`
  height: 100%;
  width: 100%;
  background: none;
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
`;

export const ButtonsWrapper = styled.div`
  height: 50px;
  width: 100%;
  background: transparent;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${theme.colors.white};

  ${theme.mediaQueries.large} {
    background-color: ${theme.colors.primary};
  }
`;

export const ColorButton = styled.div`
  pointer-events: all;
  height: 25px;
  width: 25px;
  box-sizing: border-box;
  border-radius: 100%;
  margin: auto 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: 2px solid #eee;
  &:hover,
  &.active {
    border: 2px solid #000;
  }
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  .loader {
    --path: #2f3545;
    --dot: #9fc4db;
    --duration: 3s;
    width: 44px;
    height: 44px;
    position: relative;
    &:before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      display: block;
      background: var(--dot);
      top: 37px;
      left: 19px;
      transform: translate(-18px, -18px);
      animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
      rect,
      polygon,
      circle {
        fill: none;
        stroke: var(--path);
        stroke-width: 10px;
        stroke-linejoin: round;
        stroke-linecap: round;
      }
      polygon {
        stroke-dasharray: 145 (221 - 145) 145 (221 - 145);
        stroke-dashoffset: 0;
        animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }
      rect {
        stroke-dasharray: (256 / 4 * 3) (256 / 4) (256 / 4 * 3) (256 / 4);
        stroke-dashoffset: 0;
        animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }
      circle {
        stroke-dasharray: (200 / 4 * 3) (200 / 4) (200 / 4 * 3) (200 / 4);
        stroke-dashoffset: 75;
        animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }
    }
    &.triangle {
      width: 48px;
      &:before {
        left: 21px;
        transform: translate(-10px, -18px);
        animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }
    }
  }

  @keyframes pathTriangle {
    33% {
      stroke-dashoffset: 74;
    }
    66% {
      stroke-dashoffset: 147;
    }
    100% {
      stroke-dashoffset: 221;
    }
  }

  @keyframes dotTriangle {
    33% {
      transform: translate(0, 0);
    }
    66% {
      transform: translate(10px, -18px);
    }
    100% {
      transform: translate(-10px, -18px);
    }
  }

  @keyframes pathRect {
    25% {
      stroke-dashoffset: 64;
    }
    50% {
      stroke-dashoffset: 128;
    }
    75% {
      stroke-dashoffset: 192;
    }
    100% {
      stroke-dashoffset: 256;
    }
  }

  @keyframes dotRect {
    25% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(18px, -18px);
    }
    75% {
      transform: translate(0, -36px);
    }
    100% {
      transform: translate(-18px, -18px);
    }
  }

  @keyframes pathCircle {
    25% {
      stroke-dashoffset: 125;
    }
    50% {
      stroke-dashoffset: 175;
    }
    75% {
      stroke-dashoffset: 225;
    }
    100% {
      stroke-dashoffset: 275;
    }
  }

  .loader {
    display: inline-block;
    margin: 0 16px;
  }

  html {
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
`;
