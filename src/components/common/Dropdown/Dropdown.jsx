import React from "react";
import clsx from "clsx";
import { ArrowIcon, CheckIcon } from "components/SVG/Icons";
import { stringFromArray } from "functions.js";
import s from "./Dropdown.module.scss";


export const Dropdown = ({ buttons }) => {

  const [openList, setOpenList] = React.useState(false);

  const [dayValue, setDayValue] = React.useState([]);

  const listHandler = () => {
    setOpenList(!openList);
  };

  const dayHandler = (day) => {
    const updatedDays = [...dayValue];
    if (!updatedDays.some((el => el.title === day.title))) {
      updatedDays.push(day);
      setDayValue(updatedDays.sort((a, b) => a.index - b.index));
    } else {
      setDayValue(updatedDays.filter((el) => el.title !== day.title));
    }
  };


  return (
    <div className={s.container}>
      <div className={clsx(s.header, openList && s.open)} onClick={listHandler}>
        <input type="hidden" value={stringFromArray(dayValue, "title")}/>
        <span
          className={s.value}>{dayValue.length ? stringFromArray(dayValue, "title") : "Дни доставки"}</span>
        <ArrowIcon/>
      </div>
      <div className={clsx(s.body, openList ? s.open : s.default)}>
        {
          buttons.map(day =>
            <button type="button"
                    className={s.day}
                    onClick={() => dayHandler(day)}>
              <span>{day.title}</span>
              {dayValue.some((el) => el.title === day.title) && <span className={s.checked}><CheckIcon/></span>}
            </button>)
        }
      </div>
    </div>
  );
};
