import React from "react";

import g from "src/styles/Main.module.scss";
import s from "./ModalBody.module.scss";

export const ModalBody = ({ toggleShowed, title, children }) => {
   return (
      <div className={g.modal}>
         <div className={s.container}>
            <div className={s.header}>
               <h2>{title}</h2>
               <button
                  type="button"
                  className={s.close}
                  onClick={() => toggleShowed()}
               ></button>
            </div>
            {children}
         </div>
      </div>
   );
};
