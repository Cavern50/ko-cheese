import React from "react";
import s from "components/modals/Subscribe/Subscribe.module.scss";
import { Dropdown } from "components/common/Dropdown/Dropdown";
import { ModalBody } from "../ModalBody/ModalBody";

const days = [{
  title: "Понедельник",
  index: 0
}, {
  title: "Вторник",
  index: 1
}, {
  title: "Среда",
  index: 2
}, {
  title: "Четверг",
  index: 3
}, {
  title: "Пятница",
  index: 4
}, {
  title: "Суббота",
  index: 5
}, {
  title: "Воскресенье",
  index: 6
}];

export const Subscribe = ({ closeModal }) => {
  return (
    <div>
      <ModalBody title="Подписка" closeModal={closeModal}>
        <p className={s.subtitle}>Выберите дни по которым будет осуществяляться доставка</p>
        <Dropdown buttons={days}/>
      </ModalBody>
    </div>
  );
};