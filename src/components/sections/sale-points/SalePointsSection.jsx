import React from 'react';

import g from 'src/styles/Main.module.scss';
import s from './SalePointsSection.module.scss';
import { TabButton } from '@components/common/Buttons/TabButton/TabButton';
import { useTabs } from 'src/hooks';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const cities = [
  {
    title: 'Москва',
    points: [
      {
        title: 'Усачевский рынок',
        coords: [55.75, 37.57]
      },
      {
        title: 'Даниловский рынок',
        coords: [55.78, 37.55]
      },
      {
        title: 'Черемушкинский рынок',
        coords: [55.78, 37.59]
      }
    ]
  },
  {
    title: 'Екатеренбург'
  },
  {
    title: 'Арамиль'
  }
];

export const SalePointsSection = () => {
  const tabsMap = useTabs(0);
  const [activeCity, setActiveCity] = React.useState(
    cities.find((city) => city.title === cities[0].title)
  );

  React.useEffect(() => {
    setActiveCity(cities.find((city) => city.title === cities[tabsMap.active].title));
  }, [tabsMap.active]);

  console.log(activeCity);

  return (
    <div className={g.wrapper}>
      <h1 className={s.title}>Точки продаж</h1>
      <div className={s.tabs}>
        {cities.map((city, i) => {
          return (
            <TabButton
              key={i}
              text={city.title}
              index={i}
              active={tabsMap.active}
              toggleActive={tabsMap.toggleActive}
              small
            />
          );
        })}
      </div>
      <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} className={s.map}>
          {activeCity.points.map(({ title, coords }) => (
            <Placemark  geometry={coords} properties={{ iconCaption: title, iconContent: 'xuy' }} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
