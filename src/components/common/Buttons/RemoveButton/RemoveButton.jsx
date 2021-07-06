import React from 'react';
import clsx from 'clsx';

import s from './RemoveButton.module.scss';

export const RemoveButton = ({small}) => {
  return (
    <button type="button" className={clsx(s.btn, small && s.btn_small)}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.03125 1.59375H4.875C4.96094 1.59375 5.03125 1.52344 5.03125 1.4375V1.59375H10.9688V1.4375C10.9688 1.52344 11.0391 1.59375 11.125 1.59375H10.9688V3H12.375V1.4375C12.375 0.748047 11.8145 0.1875 11.125 0.1875H4.875C4.18555 0.1875 3.625 0.748047 3.625 1.4375V3H5.03125V1.59375ZM14.875 3H1.125C0.779297 3 0.5 3.2793 0.5 3.625V4.25C0.5 4.33594 0.570312 4.40625 0.65625 4.40625H1.83594L2.31836 14.6211C2.34961 15.2871 2.90039 15.8125 3.56641 15.8125H12.4336C13.1016 15.8125 13.6504 15.2891 13.6816 14.6211L14.1641 4.40625H15.3438C15.4297 4.40625 15.5 4.33594 15.5 4.25V3.625C15.5 3.2793 15.2207 3 14.875 3ZM12.2832 14.4062H3.7168L3.24414 4.40625H12.7559L12.2832 14.4062Z"
          fill="#184240"
        />
      </svg>
    </button>
  );
};

