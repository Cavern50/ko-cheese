import React from "react";
import clsx from "clsx";

import { RemoveButton } from "../Buttons/RemoveButton/RemoveButton";

import s from "./PurchaseControl.module.scss";

export const PurchaseControl = ({ id, inCart }) => {
   const [count, setCount] = React.useState(1);
   // eslint-disable-next-line consistent-return
   const changeCount = (operation) => {
      if (count === 1 && operation === "-") {
         return false;
      }
      setCount((prev) => (operation === "-" ? prev - 1 : prev + 1));
   };
   React.useEffect(() => {
      setCount(1);
   }, [id]);

   return (
      <>
         <div className={s.container}>
            <div className={clsx(s.counter)}>
               <button
                  className={clsx(s.change, s.minus)}
                  onClick={() => changeCount("-")}
               >
                  <svg
                     width="11"
                     height="2"
                     viewBox="0 0 11 2"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <rect
                        x="0.3"
                        y="0.500012"
                        width="9.83479"
                        height="0.6"
                        rx="0.3"
                        stroke="#184240"
                        strokeWidth="0.6"
                     />
                  </svg>
               </button>
               <span className={clsx(s.count)}>{count}</span>
               <button
                  className={clsx(s.change, s.plus)}
                  onClick={() => changeCount("+")}
               >
                  <svg
                     width="12"
                     height="10"
                     viewBox="0 0 12 10"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <rect
                        x="0.3"
                        y="4.49983"
                        width="11.2654"
                        height="0.6"
                        rx="0.3"
                        stroke="#184240"
                        strokeWidth="0.6"
                     />
                     <rect
                        x="6.55178"
                        y="0.570808"
                        width="8.85841"
                        height="0.741591"
                        rx="0.370795"
                        transform="rotate(90 6.55178 0.570808)"
                        stroke="#184240"
                        strokeWidth="0.741591"
                     />
                  </svg>
               </button>
            </div>
            {inCart ? (
               <RemoveButton/>
            ) : (
               <>
                  {" "}
                  <button className={clsx(s.add)}>в корзину</button>
                  <button className={clsx(s.favorite)}>
                     <svg
                        width="19"
                        height="17"
                        viewBox="0 0 19 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M9.29928 2.8843L9.71861 3.53202L10.1385 2.88466C11.6303 0.584595 13.7078 0.133692 15.3877 0.77901C17.0993 1.43651 18.5 3.26982 18.5 5.76058C18.5 6.62038 18.0425 7.67417 17.2506 8.83147C16.469 9.97383 15.4093 11.1491 14.31 12.2383C13.2129 13.3253 12.0885 14.3146 11.1847 15.0863C10.8601 15.3635 10.5655 15.6111 10.3101 15.826C10.2094 15.9106 10.1149 15.9902 10.0269 16.0644C9.91405 16.1596 9.80919 16.2485 9.71578 16.329C9.61709 16.2464 9.50606 16.1556 9.3869 16.0586C9.25968 15.9552 9.12042 15.8427 8.96965 15.7209C8.73358 15.5301 8.4693 15.3166 8.17885 15.0793C7.23374 14.3071 6.05445 13.3174 4.90234 12.2299C3.7479 11.1401 2.63384 9.96442 1.81183 8.82183C0.978006 7.6628 0.5 6.61263 0.5 5.76058C0.5 3.26866 1.99286 1.42774 3.82391 0.767222C5.63163 0.115123 7.81776 0.595876 9.29928 2.8843Z"
                           stroke="#184240"
                        />
                     </svg>
                  </button>
               </>
            )}
         </div>
         <div className={clsx(s.delivery)}>
            <svg
               width="20"
               height="20"
               viewBox="0 0 20 20"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M17.9543 10.2835L16.24 6.13794C16.1963 6.0309 16.1231 5.93957 16.0296 5.87532C15.9361 5.81108 15.8265 5.77678 15.7143 5.77668H14V4.59223C14 4.43516 13.9398 4.28452 13.8326 4.17346C13.7255 4.0624 13.5801 4 13.4286 4H2.57143C2.41988 4 2.27453 4.0624 2.16737 4.17346C2.0602 4.28452 2 4.43516 2 4.59223V14.6601C2 14.8172 2.0602 14.9678 2.16737 15.0789C2.27453 15.1899 2.41988 15.2523 2.57143 15.2523H3.79429C3.92588 15.7542 4.21314 16.1972 4.61177 16.513C5.0104 16.8289 5.49823 17 6 17C6.50177 17 6.9896 16.8289 7.38823 16.513C7.78686 16.1972 8.07412 15.7542 8.20571 15.2523H11.7943C11.9259 15.7542 12.2131 16.1972 12.6118 16.513C13.0104 16.8289 13.4982 17 14 17C14.5018 17 14.9896 16.8289 15.3882 16.513C15.7869 16.1972 16.0741 15.7542 16.2057 15.2523H17.4286C17.5801 15.2523 17.7255 15.1899 17.8326 15.0789C17.9398 14.9678 18 14.8172 18 14.6601V10.5145C17.9999 10.4351 17.9843 10.3566 17.9543 10.2835ZM14 6.96114H15.3371L16.56 9.92228H14V6.96114ZM6 15.8446C5.77396 15.8446 5.553 15.7751 5.36506 15.6449C5.17712 15.5148 5.03064 15.3298 4.94414 15.1134C4.85764 14.8969 4.83501 14.6588 4.8791 14.429C4.9232 14.1993 5.03205 13.9882 5.19188 13.8226C5.35171 13.6569 5.55535 13.5441 5.77704 13.4984C5.99873 13.4527 6.22852 13.4762 6.43735 13.5658C6.64618 13.6555 6.82467 13.8073 6.95025 14.0021C7.07583 14.1968 7.14286 14.4258 7.14286 14.6601C7.14286 14.9742 7.02245 15.2755 6.80812 15.4976C6.59379 15.7198 6.3031 15.8446 6 15.8446ZM11.7943 14.0679H8.20571C8.07412 13.566 7.78686 13.123 7.38823 12.8072C6.9896 12.4913 6.50177 12.3202 6 12.3202C5.49823 12.3202 5.0104 12.4913 4.61177 12.8072C4.21314 13.123 3.92588 13.566 3.79429 14.0679H3.14286V5.18446H12.8571V12.6228C12.5969 12.7794 12.3691 12.9876 12.1867 13.2355C12.0043 13.4835 11.871 13.7664 11.7943 14.0679ZM14 15.8446C13.774 15.8446 13.553 15.7751 13.3651 15.6449C13.1771 15.5148 13.0306 15.3298 12.9441 15.1134C12.8576 14.8969 12.835 14.6588 12.8791 14.429C12.9232 14.1993 13.032 13.9882 13.1919 13.8226C13.3517 13.6569 13.5553 13.5441 13.777 13.4984C13.9987 13.4527 14.2285 13.4762 14.4374 13.5658C14.6462 13.6555 14.8247 13.8073 14.9503 14.0021C15.0758 14.1968 15.1429 14.4258 15.1429 14.6601C15.1429 14.9742 15.0224 15.2755 14.8081 15.4976C14.5938 15.7198 14.3031 15.8446 14 15.8446ZM16.8571 14.0679H16.2057C16.0794 13.5606 15.7943 13.1111 15.3952 12.7897C14.9961 12.4682 14.5055 12.2929 14 12.2912V11.1067H16.8571V14.0679Z"
                  fill="#728D8C"
               />
            </svg>
            <span className={clsx(s.text)}>Доставка: </span>
            <span className={clsx(s.terms)}>15.05.2021 ~ 15:30</span>
         </div>
      </>
   );
};