import { createSprinkles } from '@vanilla-extract/sprinkles';

import colorProperties from './color.css';
import layoutProperties from './layout.css';

const sprinkles = createSprinkles(colorProperties, layoutProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
export default sprinkles;
