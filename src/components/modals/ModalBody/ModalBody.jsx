import React from "react";

import { CloseButton } from "components/common/Buttons/CloseButton/CloseButton";

import g from "styles/Main.module.scss";
import s from "./ModalBody.module.scss";

export const ModalBody = ({ closeModal, title, children }) => (
      <div className={g.modal}>
         <div className={s.container}>
            <div className={s.header}>
               <h2>{title}</h2>
               <CloseButton close={closeModal}/>
            </div>
            {children}
         </div>
      </div>
   );
