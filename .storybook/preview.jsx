import React from 'react';

export const decorators = [
  (Story) => (
    <div style={{ margin: '0.5rem' }}>
      <Story />
    </div>
  ),
];