import React from 'react';

export const useModal = (init = false) => {
  const [isShowed, setIsShowed] = React.useState(init);

  const hideModal = () => setIsShowed(false);
  const showModal = () => setIsShowed(true);

  return { isShowed, hideModal, showModal };
};

export const useTabs = (init = null) => {
  const [active, setActive] = React.useState(init);

  const toggleActive = (id) => {
    id === active ? setActive(null) : setActive(id);
  };

  return { active, setActive, toggleActive };
};
