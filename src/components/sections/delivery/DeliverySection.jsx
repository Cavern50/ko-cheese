import React from 'react';
import { Tabs } from 'components/layout/Tabs/Tabs';
import { TabButton } from 'components/common/Buttons/TabButton/TabButton';
import { useTabs } from 'hooks';

import s from './DeliverySection.module.scss';


export const DeliverySection = ({deliveryData}) => {
  const { activeId, toggleActiveId } = useTabs(1, false);
  const [activeCategory, setActiveCategory] = React.useState(
    deliveryData.find(({ id }) => id === activeId)
  );

  React.useEffect(() => {
    setActiveCategory(deliveryData.find(({ id }) => id === activeId));
  }, [activeId]);

  return (
    <>
      <Tabs>
        {deliveryData.map(({ title, id }) => (
          <TabButton
            text={title}
            key={id}
            index={id}
            active={activeId}
            toggleActive={toggleActiveId}
          />
        ))}
      </Tabs>
      <div className={s.container}>
        {activeCategory.items?.length && activeCategory.items.map((item) => (
          <div className={s.block}>
            <span className={s.subtitle}>{item.subtitle}</span>
            <ul className={s.list}>
              {item.listItems.map((li) => (
                <li className={s.item}>{li}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
