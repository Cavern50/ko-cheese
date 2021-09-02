import React from "react";
import s from "components/modals/ModalWrapper/ModalWrapper.module.scss";

export const ModalWrapper = (props) => {
  const { show, children, closeModal, animation: { animationShow, animationHide }, classes: { boxClass, containerClass }, stopScroll = false } = props;
  const [shouldRender, setRender] = React.useState(show);

  React.useEffect(() => {
    if (show) setRender(true);
    document.body.style.overflow = stopScroll && show ? "hidden" : 'unset';
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }, [show]);

  React.useEffect(() => () => {
      // if (stopScroll) document.body.style.overflow = "unset";
      document.removeEventListener("keydown", closeModal, false);
    });


  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className={s[boxClass]} onClick={() => closeModal()}
           style={{ animation: `${show ? "fadeIn" : "fadeOut"} forwards .4s` }}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={s[containerClass]} onClick={(e) => e.stopPropagation()}
             style={{ animation: `${show ? animationShow : animationHide} forwards .4s` }}
             onAnimationEnd={() => onAnimationEnd()}>
          {children}
        </div>
      </div>
    )
  );
};

