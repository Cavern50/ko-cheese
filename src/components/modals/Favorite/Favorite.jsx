import React from 'react';

import s from './Favorite.module.scss';

import { ModalBody } from '../ModalBody/ModalBody';
import { SubcategoryButton } from '@components/common/Buttons/SubcategoryButton/SubcategoryButton';
import { Purchase } from '@components/common/Purchase/Purchase';
import { useTabs } from 'src/hooks';

const favorites = [
  { title: 'сыры', id: 1 },
  { title: 'молоко', id: 2 },
  { title: 'десерты', id: 3 }
];

export const Favorite = ({ closeModal }) => {

  const tabCategory = useTabs();

  return (
    <ModalBody closeModal={closeModal} title={'Избранное'}>
      <div className={s.subcategories}>
        {favorites.map((favorite) => (
          <SubcategoryButton
            {...favorite}
            key={favorite.id}
            active={tabCategory.active}
            setActive={tabCategory.toggleActive}
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
