import {
   RedWine,
   WhiteWine,
   Vegetables,
   Fruits,
} from "@components/SVG/TastesSVG/TastesSVG";

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

export const products = [
   {
      status: "avaliable",
      allStatus: [
         {
            name: "avaliable",
            count: 20,
         },
         {
            name: "preparing",
            count: 15,
            date: "15.08.2021",
         },
      ],
      image: "/static/img/content/camamberGoat.png",
      gallery: [
         "/static/img/content/camamberGoat.png",
         "/static/img/content/slide-1.jpg",
         "/static/img/content/recipe-2.jpg",
         "/static/img/content/recipe-3.jpg",
      ],
      name: "Камамбер козий",
      description:
         "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
      addition: "с белой плесенью",
      weight: "200 гр",
      price: 320,
      tastes: ["red-wine", "fruits"],
      link: "/card",
      id: 23,
   },
   {
      status: "preparing",
      allStatus: [
         {
            name: "avaliable",
            count: 20,
         },
         {
            name: "preparing",
            count: 15,
            date: "15.08.2021",
         },
      ],
      image: "/static/img/content/camamberCow.png",
      gallery: [
         "/static/img/content/camamberCow.png",
         "/static/img/content/slide-1.jpg",
         "/static/img/content/recipe-2.jpg",
         "/static/img/content/recipe-3.jpg",
      ],
      name: "Камамбер коровий",
      description:
         "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
      addition: "с белой плесенью",
      weight: "200 гр",
      price: 320,
      tastes: ["white-wine", "vegetables"],
      link: "/card",
      id: 20,
   },
   {
      status: "avaliable",
      allStatus: [
         {
            name: "avaliable",
            count: 20,
         },
         {
            name: "preparing",
            count: 15,
            date: "15.08.2021",
         },
      ],
      image: "/static/img/content/goatBalance.png",
      gallery: [
         "/static/img/content/goatBalance.png",
         "/static/img/content/slide-1.jpg",
         "/static/img/content/recipe-2.jpg",
         "/static/img/content/recipe-3.jpg",
      ],
      name: "Cыр Козий Валансе",
      description:
         "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
      addition: "с белой плесенью",
      weight: "200 гр",
      price: 650,
      tastes: ["white-wine", "vegetables"],
      link: "/card",
      id: 2,
   },
   {
      status: "avaliable",
      allStatus: [
         {
            name: "avaliable",
            count: 20,
         },
         {
            name: "preparing",
            count: 15,
            date: "15.08.2021",
         },
      ],
      image: "/static/img/content/goatBalance2.png",
      gallery: [
         "/static/img/content/goatBalance2.png",
         "/static/img/content/slide-1.jpg",
         "/static/img/content/recipe-2.jpg",
         "/static/img/content/recipe-3.jpg",
      ],
      name: "Cыр Козий Валансе",
      description:
         "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
      addition: "с белой плесенью",
      weight: "200 гр",
      price: 500,
      tastes: ["white-wine", "vegetables"],
      link: "/card",
      id: 3,
   },
   {
      status: "preparing",
      allStatus: [
         {
            name: "avaliable",
            count: 20,
         },
         {
            name: "preparing",
            count: 15,
            date: "15.08.2021",
         },
      ],
      image: "/static/img/content/bushDeShevr.png",
      gallery: [
         "/static/img/content/bushDeShevr.png",
         "/static/img/content/slide-1.jpg",
         "/static/img/content/recipe-2.jpg",
         "/static/img/content/recipe-3.jpg",
      ],
      name: "Бюш де шевр",
      description:
         "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
      weight: "200 гр",
      price: 500,
      tastes: ["white-wine", "vegetables"],
      link: "/card",
      id: 4,
   },
   {
      status: "avaliable",
      allStatus: [
         {
            name: "avaliable",
            count: 20,
         },
         {
            name: "preparing",
            count: 15,
            date: "15.08.2021",
         },
      ],
      image: "/static/img/content/mozzarella.png",
      gallery: [
         "/static/img/content/mozzarella.png",
         "/static/img/content/slide-1.jpg",
         "/static/img/content/recipe-2.jpg",
         "/static/img/content/recipe-3.jpg",
      ],
      name: "Моцарелла",
      description:
         "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
      weight: "200 гр",
      price: 500,
      link: "/card",
      id: 29,
   },
   {
      status: "not-avaliable",
      allStatus: [
         {
            name: "avaliable",
            count: 20,
         },
         {
            name: "preparing",
            count: 15,
            date: "15.08.2021",
         },
      ],
      image: "/static/img/content/buratta.png",
      gallery: [
         "/static/img/content/buratta.png",
         "/static/img/content/slide-1.jpg",
         "/static/img/content/recipe-2.jpg",
         "/static/img/content/recipe-3.jpg",
      ],
      name: "Буратта",
      description:
         "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
      weight: "200 гр",
      price: 500,
      tastes: ["white-wine", "vegetables"],
      link: "/card",
      id: 18,
   },
   {
      status: "avaliable",
      allStatus: [
         {
            name: "avaliable",
            count: 20,
         },
         {
            name: "preparing",
            count: 15,
            date: "15.08.2021",
         },
      ],
      image: "/static/img/content/strachella.png",
      gallery: [
         "/static/img/content/strachella.png",
         "/static/img/content/slide-1.jpg",
         "/static/img/content/recipe-2.jpg",
         "/static/img/content/recipe-3.jpg",
      ],
      name: "Страчелла",
      description:
         "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
      weight: "200 гр",
      price: 500,
      tastes: ["white-wine", "vegetables"],
      link: "/card",
      id: 7,
   },
   {
      status: "preparing",
      allStatus: [
         {
            name: "avaliable",
            count: 20,
         },
         {
            name: "preparing",
            count: 15,
            date: "15.08.2021",
         },
      ],
      image: "/static/img/content/bushDeShevr.png",
      gallery: [
         "/static/img/content/bushDeShevr.png",
         "/static/img/content/slide-1.jpg",
         "/static/img/content/recipe-2.jpg",
         "/static/img/content/recipe-3.jpg",
      ],
      name: "Бюш де шевр",
      description:
         "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
      weight: "200 гр",
      price: 500,
      tastes: ["white-wine", "vegetables"],
      link: "/card",
      id: 40,
   },
];

export const BASE_URL = 'http://localhost:3001/';