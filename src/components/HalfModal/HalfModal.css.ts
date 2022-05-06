import { style } from '@vanilla-extract/css';

import sprinkles from '@/styles/theme.css';

const halfModal = style([
  sprinkles({
    width: { mobile: 'w-full', medium: 'w-full' },
    bottom: { mobile: '0' },
  }),
  {
    height: '300px',
    position: 'absolute',
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
    backgroundColor: '#fff',
  },
  {
    transition: 'all 400ms ease-in-out',
    transform: 'translateY(150%)',
  },
]);

const overlayHalfModal = style([
  {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: '0',
    transition: 'opacity 300ms ease-in-out',
  },
]);

const overlayAfterOpen = style({
  opacity: '1',
});

const overlayBeforeClose = style({
  opacity: '0',
});

const modalAfterOpen = style({
  transform: 'translateY(0%)',
});

const modalBeforeClose = style({
  transform: 'translateY(1000%)',
});

export {
  halfModal,
  overlayHalfModal,
  overlayAfterOpen,
  overlayBeforeClose,
  modalAfterOpen,
  modalBeforeClose,
};
