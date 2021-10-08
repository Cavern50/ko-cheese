import React from "react";
import { useDispatch } from "react-redux";
import { popUpChangeModalState } from "redux/slices/modals";
import s from "./WarnPopup.module.scss";

export const WarnPopup = ({ text }) => {
  const dispatch = useDispatch();

  const popupCloseHandler = () => {
    dispatch(popUpChangeModalState({
      visible: false
    }));
  };

  return (
    <div className={s.container}>
      <div>{text}</div>
      <button type="button" className={s.ok} onClick={popupCloseHandler}>OK</button>
    </div>
  );
};