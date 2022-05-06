import { forwardRef, PropsWithChildren } from 'react';

import classNames from 'classnames';

import containerStyles from './Container.css';

export type ContainerProps = {
  id?: string;
  className?: string;
};

const Container = forwardRef<HTMLDivElement, PropsWithChildren<ContainerProps>>(
  ({ children, className, id }, ref) => {
    const containerClassNames = classNames(containerStyles, className);
    return (
      <div id={id} ref={ref} className={containerClassNames}>
        {children}
      </div>
    );
  }
);

export default Container;
