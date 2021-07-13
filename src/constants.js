import React from "react";
import {
   RedWine,
   WhiteWine,
   Vegetables,
   Fruits,
} from "components/SVG/TastesSVG/TastesSVG";

export const allStatus = {
   avaliable: {
      title: "в наличии",
      class: "avaliable",
   },
   preparing: {
      title: "созревает",
      class: "preparing",
   },
   "not-avaliable": {
      title: "нет в наличии",
      class: "not-avaliable",
   },
};

export const allTastes = {
   "red-wine": <RedWine border={"accent"} key={0} />,
   "white-wine": <WhiteWine border={"accent"} key={1} />,
   vegetables: <Vegetables border={"accent"} key={2} />,
   fruits: <Fruits border={"accent"} key={3} />,
};


export const BASE_URL = 'http://localhost:3001/';