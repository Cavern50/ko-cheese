import React from 'react';

import s from './H1.module.scss';

export const H1 = ({ children }) => <h1 className={s.title}>{children}</h1>;
