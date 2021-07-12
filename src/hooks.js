import React from 'react';
import ac from 'prettier/esm/parser-yaml';

export const useModal = (init = false) => {
  const [isShowed, setIsShowed] = React.useState(init);

  const hideModal = () => setIsShowed(false);
  const showModal = () => setIsShowed(true);

  return { isShowed, hideModal, showModal };
};

export const useTabs = (init = null, isRemovable = true) => {
  const [activeId, setActiveId] = React.useState(init);

  const toggleActiveId = (id) => {
    setActiveId(id);
    isRemovable && id === activeId && setActiveId(null);
  };

  return { activeId, setActiveId, toggleActiveId };
};
