const colors = {
  blue: '#07c',
  green: '#0fa',
  primary: '#333',
  white: '#f8f8ff'
};

const space = [0, 4, 8, 16, 32];
space.small = space[1];
space.medium = space[2];
space.large = space[3];

const breakpoints = ['40em', '52em', '64em'];

const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`
};

export default {
  colors,
  fontSizes: [12, 14, 16, 20, 24, 32],
  space,
  breakpoints,
  mediaQueries
};
