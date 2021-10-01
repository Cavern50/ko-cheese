import React from "react";
import { ModalWrapper } from "components/modals/ModalWrapper/ModalWrapper";
import { mainModalProperties } from "constants.js";
import { Cart } from "components/modals/Cart/Cart";
import { Favorite } from "components/modals/Favorite/Favorite";
import { Subscribe } from "components/modals/Subscribe/Subscribe";
import { Letter } from "components/modals/Letter/Letter";
import { Menu } from "components/modals/Menu/Menu";
import { PrivacyPolicy } from "components/modals/PrivacyPolicy/PrivacyPolicy";
import { useDispatch, useSelector } from "react-redux";
import {
  cartModalSelector,
  favoriteModalSelector,
  subscribeModalSelector,
  letterModalSelector,
  menuModalSelector,
  privacyModalSelector,
  cartChangeModalState,
  favoriteChangeModalState,
  letterChangeModalState,
  subscribeChangeModalState,
  menuChangeModalState,
  privacyChangeModalState
} from "redux/slices/modals";


export const AllModals = () => {
  const dispatch = useDispatch();
  const cartModalValue = useSelector(cartModalSelector);
  const favoriteModalValue = useSelector(favoriteModalSelector);
  const subscribeModalValue = useSelector(subscribeModalSelector);
  const letterModalValue = useSelector(letterModalSelector);
  const menuModalValue = useSelector(menuModalSelector);
  const privacyModalValue = useSelector(privacyModalSelector);

  const cartModalCloseHandler = () => {
    dispatch(cartChangeModalState(false));
  };

  const favoriteModalCloseHandler = () => {
    dispatch(favoriteChangeModalState(false));
  };

  const subscribeModalCloseHandler = () => {
    dispatch(subscribeChangeModalState(false));
  };

  const letterModalCloseHandler = () => {
    dispatch(letterChangeModalState(false));
  };

  const menuModalCloseHandler = () => {
    dispatch(menuChangeModalState(false));
  };

  const privacyModalCloseHandler = () => {
    dispatch(privacyChangeModalState(false))
  }

  return (
    <>
      <ModalWrapper closeModal={cartModalCloseHandler}
                    show={cartModalValue}
                    stopScroll
                    {...mainModalProperties}>
        <Cart closeModal={cartModalCloseHandler}/>
      </ModalWrapper>
      <ModalWrapper closeModal={favoriteModalCloseHandler}
                    show={favoriteModalValue}
                    stopScroll
                    {...mainModalProperties}>
        <Favorite closeModal={favoriteModalCloseHandler}/>
      </ModalWrapper>
      <ModalWrapper closeModal={subscribeModalCloseHandler}
                    show={subscribeModalValue}
                    stopScroll
                    {...mainModalProperties}>
        <Subscribe closeModal={subscribeModalCloseHandler}/>
      </ModalWrapper>
      <ModalWrapper closeModal={letterModalCloseHandler}
                    show={letterModalValue}
                    stopScroll
                    {...mainModalProperties}>
        <Letter closeModal={letterModalCloseHandler}/>
      </ModalWrapper>
      <ModalWrapper closeModal={menuModalCloseHandler}
                    show={menuModalValue}
                    stopScroll
                    additionClass="menu"
                    {...mainModalProperties}>
        <Menu/>
      </ModalWrapper>
      <ModalWrapper closeModal={privacyModalCloseHandler}
                    show={privacyModalValue}
                    stopScroll
                    {...mainModalProperties}>
        <PrivacyPolicy closeModal={privacyModalCloseHandler}/>
      </ModalWrapper>
    </>
  );
};

