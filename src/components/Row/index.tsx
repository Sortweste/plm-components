import { forwardRef, PropsWithChildren } from 'react';

import classNames from 'classnames';

import sprinkles from '../../styles/theme.css';
import rowStyles from './Row.css';

export type RowProps = {
  id?: string;
  className?: string;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

const Row = forwardRef<HTMLDivElement, PropsWithChildren<RowProps>>(
  (
    { children, className, id, justify = 'center', align = 'flex-start' },
    ref
  ) => {
    const rowClassNames = classNames(
      rowStyles,
      className,
      sprinkles({
        justifyContent: justify,
        alignItems: align,
      })
    );
    return (
      <div id={id} ref={ref} className={rowClassNames}>
        {children}
      </div>
    );
  }
);

export default Row;
