import React from 'react';

export const useModal = (init = false) => {
  const [isShowed, setIsShowed] = React.useState(init);

  const hideModal = () => setIsShowed(false);
  const showModal = () => setIsShowed(true);

  return { isShowed, hideModal, showModal };
};

export const useTabs = (init = null, isRemovable = true ) => {
  const [activeId, setActiveId] = React.useState(init);

  const toggleActiveId = (id) => {
    if (isRemovable) {
      id === activeId && setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return { activeId, setActiveId, toggleActiveId };
};
