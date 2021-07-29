import React from "react";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { Input } from "components/forms/Input/Input";
import { PROFILE_VALIDATION_SCHEMA } from "/src/constants.js";
import s from "components/common/Profile/ProfileControls/ProfileControls.module.scss";

export const ProfileControls = ({ filters }) => {
  return (
    <header className={s.header}>
      <FormContainer enableReinitialize initialValues={{}} validationScheme={PROFILE_VALIDATION_SCHEMA}
                     className="fullWidth">
        {() =>
          <div className={s.wrapper}>
            <div className={s.tabs}>
              {filters && <>
                <button type="button" className={s.tab}>Все</button>
                <button type="button" className={s.tab}>Активные</button>
                <button type="button" className={s.tab}>Завершенные</button>
              </>}
            </div>
            <div className={s.date}>
              <Input id="dateFrom" name="dateFrom" type="date" label="от" containerClass="date"/>
              <Input id="dateTo" name="dateTo" type="date" label="до" containerClass="date"/>
              <button className={s.submit} type="submit"><span>Найти по дате</span></button>
            </div>
          </div>
        }
      </FormContainer>
    </header>
  );
};