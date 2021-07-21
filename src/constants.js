import React from "react";
import * as Yup from "yup";

import {
  RedWine,
  WhiteWine,
  Vegetables,
  Fruits
} from "components/SVG/TastesSVG/TastesSVG";

export const allStatus = {
  avaliable: {
    title: "в наличии",
    class: "avaliable"
  },
  preparing: {
    title: "созревает",
    class: "preparing"
  },
  "not-avaliable": {
    title: "нет в наличии",
    class: "not-avaliable"
  }
};

export const allTastes = {
  "red-wine": <RedWine border={"accent"} key={0}/>,
  "white-wine": <WhiteWine border={"accent"} key={1}/>,
  vegetables: <Vegetables border={"accent"} key={2}/>,
  fruits: <Fruits border={"accent"} key={3}/>
};


export const BASE_URL = "https://api.jsonbin.io/b/60f825c4a263d14a297934fd";

export const cities = [
  {
    id: 1,
    title: "Москва",
    cityCoords: [55.75322, 37.622513],
    points: [
      {
        id: 1,
        market: "Усачевский рынок",
        coords: [55.727506, 37.567707],
        image: "/static/img/content/marketPoints/usach.jpg",
        phone: "+7 (495) 120-18-01",
        workingTime: "с 08 до 21 часа"
      },
      {
        id: 2,
        market: "Даниловский рынок",
        coords: [55.712117, 37.620555],
        image: "/static/img/content/marketPoints/danil.jpg",
        phone: "+7 (495) 120-18-01",
        workingTime: "с 08 до 22 часов"
      },
      {
        id: 3,
        market: "Черемушкинский рынок",
        coords: [55.683919, 37.550567],
        image: "/static/img/content/marketPoints/chermush.jpg",
        phone: "+7 (495) 120-18-01",
        workingTime: "с 08 до 20 часов"
      }
    ]
  },
  {
    id: 2,
    title: "Екатеринбург",
    cityCoords: [56.838011, 60.597474],
    points: [
      {
        id: 1,
        market: "Свердловский рынок",
        coords: [56.838011, 60.597474],
        image: "/static/img/content/marketPoints/usach.jpg",
        phone: "+7 (495) 120-18-01",
        workingTime: "с 08 до 21 часа"
      }
    ]
  },
  {
    id: 3,
    title: "Арамиль",
    cityCoords: [56.694568, 60.834342],
    points: [
      {
        id: 1,
        market: "Арамильcкий рынок",
        coords: [56.694568, 60.834342],
        image: "/static/img/content/marketPoints/chermush.jpg",
        phone: "+7 (495) 120-18-01",
        workingTime: "с 08 до 21 часа"
      }
    ]
  }
];

export const instagramUser = "ko-cheese";

export const PROFILE_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string(),
  surname: Yup.string(),
  email: Yup.string(),
  phone: Yup.number()
});

