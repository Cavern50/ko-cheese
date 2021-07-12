import React from 'react';

import s from './WrapperNarrow.module.scss';

export const WrapperNarrow = ({ children }) => {
  return (
    <div className={s.wrapper}>
      {children}
    </div>
  );
};

