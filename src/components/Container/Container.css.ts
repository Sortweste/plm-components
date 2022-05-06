import { style } from '@vanilla-extract/css';

import sprinkles from '../../styles/theme.css';

const container = style([
  sprinkles({
    maxWidth: {
      small: 'mw-small',
      medium: 'mw-medium',
      large: 'mw-large',
      xlarge: 'mw-xlarge',
    },
    marginX: 'm-auto',
    paddingX: 'p-1',
  }),
  {
    boxSizing: 'border-box',
  },
]);

export default container;
