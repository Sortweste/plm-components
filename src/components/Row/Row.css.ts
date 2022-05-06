import { style } from '@vanilla-extract/css';

import sprinkles from '../../styles/theme.css';

const row = style([
  sprinkles({
    marginX: 'm-1',
  }),
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
  },
]);

export default row;
