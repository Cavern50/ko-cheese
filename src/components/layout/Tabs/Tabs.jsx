import React from 'react';

import s from './Tabs.module.scss';

export const Tabs = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

