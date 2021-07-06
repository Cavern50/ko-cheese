import React from 'react';
import clsx from 'clsx';

import s from './TabButton.module.scss';

export const TabButton = ({ text, active, toggleActive, index, small }) => {
  return (
    <button
      className={clsx(s.btn, active === index && s.active, small && s.small)}
      type="button"
      onClick={() => toggleActive(index)}
    >
      {small ? <h3>{text}</h3> : <h2>{text}</h2>}
    </button>
  );
};
