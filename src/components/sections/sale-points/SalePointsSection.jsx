import React from 'react';

import g from 'src/styles/Main.module.scss';
import s from './SalePointsSection.module.scss';
import { TabButton } from '@components/common/Buttons/TabButton/TabButton';
import { MarketCard } from '@components/common/MarketCard/MarketCard';
import { useTabs } from 'src/hooks';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

const cities = [
  {
    id: 1,
    title: 'Москва',
    cityCoords: [55.75322, 37.622513],
    points: [
      {
        id: 1,
        market: 'Усачевский рынок',
        coords: [55.727506, 37.567707],
        image: '/static/img/content/marketPoints/usach.jpg',
        phone: '+7 (495) 120-18-01',
        workingTime: 'с 08 до 21 часа'
      },
      {
        id: 2,
        market: 'Даниловский рынок',
        coords: [55.712117, 37.620555],
        image: '/static/img/content/marketPoints/danil.jpg',
        phone: '+7 (495) 120-18-01',
        workingTime: 'с 08 до 22 часов'
      },
      {
        id: 3,
        market: 'Черемушкинский рынок',
        coords: [55.683919, 37.550567],
        image: '/static/img/content/marketPoints/chermush.jpg',
        phone: '+7 (495) 120-18-01',
        workingTime: 'с 08 до 20 часов'
      }
    ]
  },
  {
    id: 2,
    title: 'Екатеринбург',
    cityCoords: [56.838011, 60.597474],
    points: []
  },
  {
    id: 3,
    title: 'Арамиль',
    cityCoords: [56.694568, 60.834342],
    points: []
  }
];

export const SalePointsSection = () => {
  const tabsMap = useTabs(0, false);

  const [activeCity, setActiveCity] = React.useState(
    cities.find((city) => city.id === cities[0].id)
  );

  React.useEffect(() => {
    setActiveCity(cities.find((city) => city.id === cities[tabsMap.active].id));
  }, [tabsMap.active]);

  return (
    <section>
      <div className={g.wrapper}>
        <div className={s.tabs}>
          {cities.map(({title, id}) => {
            return (
              <TabButton
                key={id}
                text={title}
                index={id}
                active={tabsMap.active}
                toggleActive={tabsMap.toggleActive}
                small
              />
            );
          })}
        </div>
        <YMaps>
          <Map
            state={{ center: activeCity.cityCoords, zoom: 11 }}
            options={{ controls: ['default'] }}
            className={s.map}
            instanceRef={(ref) => {
              ref && ref.behaviors.disable('scrollZoom');
            }}
          >
            {activeCity.points.map(({ title, coords }, i) => (
              <Placemark
                key={i}
                geometry={coords}
                properties={{ iconCaption: title }}
                options={{ preset: 'islands#brownShoppingIcon' }}
              />
            ))}
            <ZoomControl />
          </Map>
        </YMaps>
        <div className={s.points}>
          {activeCity.points.length > 0 && activeCity.points.map(point => <MarketCard city={activeCity.title} {...point} />)}
        </div>
      </div>
    </section>
  );
};

