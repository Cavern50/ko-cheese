import React from "react";
import { ModalWrapper } from "components/modals/ModalWrapper/ModalWrapper";
import { mainModalProperties } from "constants.js";
import { Cart } from "components/modals/Cart/Cart";
import { Favorite } from "components/modals/Favorite/Favorite";
import { Subscribe } from "components/modals/Subscribe/Subscribe";
import { Letter } from "components/modals/Letter/Letter";
import { useDispatch, useSelector } from "react-redux";
import {
  cartModalSelector,
  favoriteModalSelector,
  subscribeModalSelector,
  letterModalSelector,
  cartChangeModalState,
  favoriteChangeModalState,
  letterChangeModalState,
  subscribeChangeModalState
} from "redux/slices/modals";


export const AllModals = () => {
  const dispatch = useDispatch();
  const cartModalValue = useSelector(cartModalSelector);
  const favoriteModalValue = useSelector(favoriteModalSelector);
  const subscribeModalValue = useSelector(subscribeModalSelector);
  const letterModalValue = useSelector(letterModalSelector);
  console.log(cartChangeModalState);
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
    </>
  );
};

