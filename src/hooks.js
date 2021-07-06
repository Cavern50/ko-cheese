import React from 'react';

export const useModal = () => {
   const [isShowed, setIsShowed] = React.useState(true)

   const hideModal = () => setIsShowed(false)
   const showModal = () => setIsShowed(true)

   return {isShowed, hideModal, showModal}
}