import React from "react";

import { TabButton } from "components/common/Buttons/TabButton/TabButton";
import { MarketCard } from "components/common/MarketCard/MarketCard";
import { useTabs } from "hooks";
import clsx from "clsx";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { cities } from "constants.js";
import { Tabs } from "components/layout/Tabs/Tabs";
import { Loading } from "components/common/Loading/Loading";
import s from "./SalePointsSection.module.scss";


export const SalePointsSection = () => {
  const { activeId, toggleActiveId } = useTabs(cities[0].id, false);
  const [activeCity, setActiveCity] = React.useState(
    cities.find((city) => city.id === activeId)
  );
  const [mapLoaded, setMapLoaded] = React.useState(false);

  React.useEffect(() => {
    setActiveCity(cities.find((city) => city.id === activeId));
  }, [activeId]);

  return (
    <Section>
      <Wrapper>
        <Tabs border={"top"}>
          {cities.map(({ title, id }) => (
            <TabButton
              key={id}
              text={title}
              index={id}
              active={activeId}
              toggleActive={toggleActiveId}
              small
            />
          ))}
        </Tabs>
        <div className={s.container}>
          {!mapLoaded && <Loading/>}
          <YMaps>
            <Map
              onLoad={() => setMapLoaded(true)}
              state={{ center: activeCity.cityCoords, zoom: 11 }}
              options={{ controls: ["default"] }}
              className={s.map}
              instanceRef={(ref) => {
                // eslint-disable-next-line no-unused-expressions
                ref && ref.behaviors.disable("scrollZoom");
              }}
            >
              {activeCity.points.map(({ title, coords, id }) => (
                <Placemark
                  key={id}
                  geometry={coords}
                  properties={{ iconCaption: title }}
                  options={{ preset: "islands#brownShoppingIcon" }}
                />
              ))}
              <ZoomControl/>
            </Map>
          </YMaps>
        </div>


        <div className={s.points}>
          {activeCity.points.length > 0 && activeCity.points.map(point => <MarketCard
            key={point.id}
            city={activeCity.title} {...point} />)}
        </div>
      </Wrapper>
    </Section>
  );
};
