import React from 'react';
import { Tabs } from '@components/layout/Tabs/Tabs';
import { TabButton } from '@components/common/Buttons/TabButton/TabButton';
import { useTabs } from 'src/hooks';

import s from './DeliverySection.module.scss';

const deliveryData = [
  {
    id: 1,
    title: 'Доставка',
    items: [
      {
        subtitle: 'Доставка по Москве',
        listItems: [
          'По Москве (в пределах МКАД) - 400 рублей;',
          'По Москве (в пределах МКАД) при заказе свыше 3000 рублей - бесплатно.',
          'Срочная доставка по Москве в пределах МКАД (через 3 часа) - 500 рублей.'
        ]
      },
      {
        subtitle: 'Доставка за пределы МКАД:',
        listItems: [
          'за пределы МКАД <  10 км - 400 рублей;',
          'за пределы МКАД 10-20 км - 500 рублей;',
          'за пределы МКАД 20-30 км - 600 рублей;',
          'за пределы МКАД > 30 км - оговаривается отдельно.',
          'стоимость доставки в другие города уточняйте по телефону или по электронной почте chesom@chesom.ru.'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Оплата',
    items: [
        {
          subtitle: 'Оплата онлайн',
          listItems: [
            'Банковская карта',
            'Яндекс деньги',
            'Биткоины'
          ]
        },
        {
          subtitle: 'Наложенным платежем',
          listItems: [
            'Перевод на карту курьера',
            'Наличные',
            'Р/C'
          ]
        }
      ]
  },
  {
    id: 3,
    title: 'Оформление заказа'
  }
];

export const DeliverySection = () => {
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
