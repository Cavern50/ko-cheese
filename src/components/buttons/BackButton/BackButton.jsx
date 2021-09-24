import React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import s from "components/buttons/BackButton/BackButton.module.scss";

export const BackButton = ({ additionClass, clickHandler }) => {
  const router = useRouter();
  return (
    <div className={clsx(s.container, s[additionClass])}>
      <button type="button" className={s.button} onClick={() => clickHandler && clickHandler() || router.back()}>
        <svg
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.6967L0.46967 5.46967ZM11 5.25L1 5.25L1 6.75L11 6.75L11 5.25Z"
            fill="#184240"
          />
        </svg>
      </button>
    </div>
  );
};
