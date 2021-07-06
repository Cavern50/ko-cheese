import React from 'react';

import { RemoveButton } from '../Buttons/RemoveButton/RemoveButton';
import s from './FavoriteControl.module.scss';

export const FavoriteControl = () => {
    return (
        <div className={s.container}>
            <button type='button' className={s.add}>в корзину</button>
            <RemoveButton small/>
        </div>
    )
}

