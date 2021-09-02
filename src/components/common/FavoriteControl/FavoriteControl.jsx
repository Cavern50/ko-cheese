import React from 'react';

import { RemoveButton } from 'components/buttons/RemoveButton/RemoveButton';
import s from './FavoriteControl.module.scss';

export const FavoriteControl = () => (
        <div className={s.container}>
            <button type='button' className={s.add}>в корзину</button>
            <RemoveButton small/>
        </div>
    )

