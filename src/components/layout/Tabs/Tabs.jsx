import React from 'react';
import clsx from "clsx";

import s from './Tabs.module.scss';

export const Tabs = ({ children, border }) => <div className={clsx(s.container, border ? s.top : s.bottom)}>{children}</div>;

