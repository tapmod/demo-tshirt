import styled from 'styled-components';

const modelHeight = '600px';

export const Wrapper = styled.div`
  height: ${modelHeight};
  width: 100%;
  background: #f5f5f5;
  iframe {
    border: none;
    height: 100%;
    width: 100%;
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  }
`;

export const Loader = styled.h1`
  width: 100%;
  line-height: ${modelHeight};
  text-align: center;
`;
