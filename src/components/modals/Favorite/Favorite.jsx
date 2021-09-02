import React from "react";


import { SubcategoryButton } from "components/buttons/SubcategoryButton/SubcategoryButton";
import { Purchase } from "components/common/Purchase/Purchase";
import { useTabs } from "hooks";
import { ModalBody } from "../ModalBody/ModalBody";
import s from "./Favorite.module.scss";

const favorites = [
  { title: "сыры", id: 1 },
  { title: "молоко", id: 2 },
  { title: "десерты", id: 3 }
];

export const Favorite = ({ closeModal }) => {

  const { activeId, toggleActiveId } = useTabs(1, false);

  return (
    <ModalBody closeModal={closeModal} title='Избранное'>
      <div className={s.subcategories}>
        {favorites.map((favorite) => (
          <SubcategoryButton
            {...favorite}
            key={favorite.id}
            active={activeId}
            toggleActive={toggleActiveId}
          />
        ))}
      </div>
      <div>
        <Purchase inFavorite/>
        <Purchase inFavorite/>
      </div>
    </ModalBody>
  );
};
