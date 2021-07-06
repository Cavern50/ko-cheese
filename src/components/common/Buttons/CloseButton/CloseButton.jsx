import React from 'react'

import clsx from 'clsx'
import s from './CloseButton.module.scss'

export const CloseButton = ({small, close}) => {
    return (
        <button type="button" className={clsx(s.close, small && s.close_small)} onClick={() => close()}></button>
    )
}
