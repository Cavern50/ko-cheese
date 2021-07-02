import React from 'react';
import clsx from 'clsx';

import g from 'src/styles/Main.module.scss';
import s from './Cart.module.scss';


export const Cart = () => {
    return (
        <div className={clsx(g.modal)}>
            <div className={clsx(s.container)}>
                <div className={clsx(s.header)}>
                    <h2>Корзина</h2>
                    <button className={s.close}></button>
                </div>
            </div>
        </div>
    )
}

