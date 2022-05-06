import { defineProperties } from '@vanilla-extract/sprinkles';

const colors = {};

const colorProperties = defineProperties({
  /** Apply only if condition is true, e.g: background-color: { darkMode: 'blue' } */
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    backgroundColor: colors,
  },
});

export default colorProperties;
