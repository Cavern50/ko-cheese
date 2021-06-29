import React from "react";
import clsx from "clsx";
import { Product } from "@components/Common/Product/Product";

import s from "./ProductsSection.module.scss";
import g from "src/styles/Main.module.scss";


export const ProductsSection = ({ products }) => {
   // console.log(products)
   const [activeCategory, setActiveCategory] = React.useState(0);
   const [activeSubcategory, setActiveSubcategory] = React.useState(0);

   const setActiveItem = (i, setState) => {
      setState(i);
   };

   const categories = [
      {
         title: "Сыры",
         href: "/",
      },
      {
         title: "Молоко",
         href: "/",
      },
      {
         title: "Десерты",
         href: "/",
      },
   ];

   const subCategories = [
      {
         title: "Свежие",
         href: "/",
      },
      {
         title: "Мягкие",
         href: "/",
      },
      {
         title: "Твердые",
         href: "/",
      },
      {
         title: "С белой плесенью",
         href: "/",
      },
      {
         title: "С голубой плесенью",
         href: "/",
      },
      {
         title: "Коровий",
         href: "/",
      },
      {
         title: "Козий",
         href: "/",
      },
   ];

   return (
      <section className={clsx(s.products)}>
         <div className={clsx(g.wrapper)}>
            <div className={clsx(s.header)}>
               <div className={clsx(s.categories)}>
                  {categories.map((category, i) => (
                     <h2
                        className={clsx(
                           s.category,
                           activeCategory === i ? s.active : ""
                        )}
                        onClick={() => setActiveItem(i, setActiveCategory)}
                        key={i}
                     >
                        {category.title}
                     </h2>
                  ))}
               </div>
               <div className={clsx(s.subcategories)}>
                  {subCategories.map((subcategory, i) => (
                     <button
                        type="button"
                        className={clsx(
                           s.subcategory,
                           activeSubcategory === i ? s.active : ""
                        )}
                        onClick={() => setActiveItem(i, setActiveSubcategory)}
                        key={i}
                     >
                        {subcategory.title}
                     </button>
                  ))}
               </div>
            </div>
            <div className={clsx(s.body)}>
               {products &&
                  products.map((product) => (
                     <Product key={product.id} {...product} />
                  ))}
            </div>
         </div>
      </section>
   );
};

