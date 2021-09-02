import React from "react";
import s from "components/modals/Subscribe/Subscribe.module.scss";
import { DaysList } from "components/common/DaysList/DaysList";
import { Input } from "components/forms/Input/Input";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { PROFILE_VALIDATION_SCHEMA } from "/src/constants.js";
import { Purchase } from "components/common/Purchase/Purchase";
import { ModalFooter } from "components/modals/ModalFooter/ModalFooter";
import { ModalBody } from "../ModalBody/ModalBody";


export const Subscribe = ({ closeModal }) => (
    <ModalBody title="Подписка" closeModal={closeModal}>
      <FormContainer enableReinitialize initialValues={{}} validationScheme={PROFILE_VALIDATION_SCHEMA}
                     className="fullWidth">
        {() =>
          <>
            <p className={s.subtitle}>Выберите дни по которым будет осуществляться доставка</p>
            <DaysList/>
            <div className={s.dates}>
              <Input id="dateFrom" name="dateFrom" type="date" label="от" containerClass="subscribe" additionClass="dateInput"/>
              <Input id="dateTo" name="dateTo" type="date" label="до" containerClass="subscribe" additionClass="dateInput"/>
            </div>
            <Purchase inCart />
            <ModalFooter/>
          </>
        }
      </FormContainer>
    </ModalBody>
  );

