import React from 'react'
import s from './Discount.module.scss';

export const Discount = ({text}) => {
    return (
        <div className={s.container}>
            <p className={s.text}>{text}</p>
            <button className={s.close}></button>
        </div>
    )
}

