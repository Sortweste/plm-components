import { defineProperties } from '@vanilla-extract/sprinkles';

import {
  large,
  medium,
  small,
  xlarge,
  xxlarge,
} from '../constants/breakpoints';

const maxWidthSpace = {
  'mw-small': '540px',
  'mw-medium': '720px',
  'mw-large': '960px',
  'mw-xlarge': '1140px',
  'mw-full': '100%',
};

const marginSpace = {
  'm-auto': 'auto',
  'm-0': '0',
  'm-1': '1rem',
};

const paddingSpace = {
  'p-1': '1rem',
};

const widthSpace = {
  'w-full': '100%',
};

const layoutProperties = defineProperties({
  conditions: {
    mobile: {},
    small: {
      '@media': `(min-width: ${small}px)`,
    },
    medium: {
      '@media': `(min-width: ${medium}px)`,
    },
    large: {
      '@media': `(min-width: ${large}px)`,
    },
    xlarge: {
      '@media': `(min-width: ${xlarge}px)`,
    },
    xxlarge: {
      '@media': `(min-width: ${xxlarge}px)`,
    },
  },
  defaultCondition: 'mobile',
  properties: {
    maxWidth: maxWidthSpace,
    marginLeft: marginSpace,
    marginRight: marginSpace,
    paddingLeft: paddingSpace,
    paddingRight: paddingSpace,
    justifyContent: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
    ],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    width: widthSpace,
    top: ['0'],
    left: ['0'],
    right: ['0'],
    bottom: ['0'],
  },
  shorthands: {
    marginX: ['marginLeft', 'marginRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
  },
});

export default layoutProperties;
