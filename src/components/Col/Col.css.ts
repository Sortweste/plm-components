import { style } from '@vanilla-extract/css';

import sprinkles from 'styles/theme.css';

const col = style([
  sprinkles({
    paddingX: 'p-1',
    width: 'w-full',
    maxWidth: 'mw-full',
  }),
  {
    position: 'relative',
    flexBasis: '0',
    flexGrow: '1',
    boxSizing: 'border-box',
  },
]);

export default col;
