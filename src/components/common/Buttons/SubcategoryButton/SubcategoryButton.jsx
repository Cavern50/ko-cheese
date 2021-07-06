import React from 'react';
import clsx from 'clsx';

import s from './SubcategoryButton.module.scss';

export const SubcategoryButton = ({title, id, active, setActive}) => {
  
  return (
    <button
      type="button"
      className={clsx(s.subcategory, active === id ? s.active : '')}
      onClick={() => setActive(id)}
    >
      {title}
    </button>
  );
};

