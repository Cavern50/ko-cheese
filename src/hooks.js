import React from "react";

export const useModal = (init = false, stopScroll = true) => {
  const [isShowed, setIsShowed] = React.useState(init);

  const hideModal = () => setIsShowed(false);
  const showModal = () => setIsShowed(true);

  // eslint-disable-next-line consistent-return
  // React.useEffect(() => {
  //   if (stopScroll) {
  //     document.body.style.overflow = isShowed ? "hidden" : "unset";
  //     document.addEventListener("keydown", (e) => {
  //       if (e.key === "Escape") hideModal();
  //     });
  //     return () => {
  //       document.removeEventListener("keydown", hideModal, false);
  //     };
  //   }
  // }, [isShowed]);

  return { isShowed, hideModal, showModal };
};


export const useTabs = (init = null, isRemovable = true) => {
  const [activeId, setActiveId] = React.useState(init);

  const toggleActiveId = (id) => {
    setActiveId(id);
    if (isRemovable && id === activeId) setActiveId(null);
  };

  return { activeId, setActiveId, toggleActiveId };
};

export const useClientSide = () => {
  const [isRender, setIsRender] = React.useState(null);
  React.useEffect(() => {
    setIsRender(true);
  });
  return isRender;
};