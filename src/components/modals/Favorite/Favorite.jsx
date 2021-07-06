import React from 'react';

import s from './Favorite.module.scss';

import { ModalBody } from '../ModalBody/ModalBody';
import { SubcategoryButton } from '@components/common/Buttons/SubcategoryButton/SubcategoryButton';
import { Purchase } from '@components/common/Purchase/Purchase';

const favorites = [
  { title: 'сыры', id: 1 },
  { title: 'молоко', id: 2 },
  { title: 'десерты', id: 3 }
];

export const Favorite = ({ toggleShowed }) => {
  const [activeSubcategory, setActiveSubcategory] = React.useState(0);

  const toggleActiveSubcategory = (id) => {
    id === activeSubcategory ? setActiveSubcategory(null) : setActiveSubcategory(id);
  };

  return (
    <ModalBody toggleShowed={toggleShowed} title={'Избранное'}>
      <div className={s.subcategories}>
        {favorites.map((favorite) => (
          <SubcategoryButton
            {...favorite}
            key={favorite.id}
            active={activeSubcategory}
            setActive={toggleActiveSubcategory}
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
