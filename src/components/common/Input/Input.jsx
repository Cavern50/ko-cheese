import React from 'react';

import s from './Input.module.scss';

export const Input = ({ label, type, id, name }) => {
  return (
    <div className={s.container}>
      <label className={s.label} htmlFor={id}>{label}</label>
      <input className={s.input} name={name} id={id} type={type} />
    </div>
  );
};