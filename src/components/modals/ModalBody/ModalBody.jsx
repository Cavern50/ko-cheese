import React from "react";

import { CloseButton } from "components/common/Buttons/CloseButton/CloseButton";
import s from "./ModalBody.module.scss";

export const ModalBody = ({ closeModal, title, children, show }) => {
  const [shouldRender, setRender] = React.useState(show);

  React.useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div className={s.box} onClick={() => closeModal()}
           style={{ animation: `${show ? "fadeIn" : "fadeOut"} forwards .4s` }}>
        <div className={s.container} onClick={(e) => e.stopPropagation()}
             style={{ animation: `${show ? "moveFromRight" : "moveToRight"} forwards .4s` }}
             onAnimationEnd={() => onAnimationEnd()}>
          <div className={s.header}>
            <h2>{title}</h2>
            <CloseButton close={closeModal}/>
          </div>
          {children}
        </div>
      </div>
    )

  );
};

