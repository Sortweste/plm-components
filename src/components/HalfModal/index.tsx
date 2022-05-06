import { PropsWithChildren } from 'react';

import classNames from 'classnames';
import ReactModal from 'react-modal';

import {
  halfModal,
  overlayHalfModal,
  overlayAfterOpen,
  overlayBeforeClose,
  modalAfterOpen,
  modalBeforeClose,
} from './HalfModal.css';

export type HalfModalProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  closeTimeoutMS?: number;
  className?: string;
  overlayClassName?: string;
};

const HalfModal = ({
  children,
  isOpen,
  onCloseModal,
  className,
  overlayClassName,
  closeTimeoutMS = 250,
}: PropsWithChildren<HalfModalProps>) => {
  const modalClassNames = classNames(halfModal, className);
  const overlayClassNames = classNames(overlayClassName, overlayHalfModal);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      closeTimeoutMS={closeTimeoutMS}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      ariaHideApp={false}
      className={{
        base: modalClassNames,
        afterOpen: modalAfterOpen,
        beforeClose: modalBeforeClose,
      }}
      overlayClassName={{
        base: overlayClassNames,
        afterOpen: overlayAfterOpen,
        beforeClose: overlayBeforeClose,
      }}
    >
      {children}
    </ReactModal>
  );
};

export default HalfModal;
