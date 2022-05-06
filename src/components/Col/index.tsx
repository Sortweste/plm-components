import { forwardRef, PropsWithChildren } from 'react';

import classNames from 'classnames';

import colStyles from './Col.css';

export type ColProps = {
  id?: string;
  className?: string;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const Col = forwardRef<HTMLDivElement, PropsWithChildren<ColProps>>(
  ({ children, className, id, lg, md, sm, xl }, ref) => {
    const colClassNames = classNames(colStyles, className);
    return (
      <div id={id} ref={ref} className={colClassNames}>
        {children}
      </div>
    );
  }
);

export default Col;
