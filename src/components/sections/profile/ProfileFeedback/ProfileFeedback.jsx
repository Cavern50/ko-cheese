import React from "react";
import { Input } from "components/forms/Input/Input";
import { Textarea } from "components/common/Textarea/Textarea";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { PROFILE_VALIDATION_SCHEMA } from "constants.js";
import s from "./ProfileFeedback.module.scss";


export const ProfileFeedback = () => {
  console.log(1);
  const initialValues = {
    phone: +79271024567,
  };
  return (
    <>
      <FormContainer initialValues={initialValues} validationScheme={PROFILE_VALIDATION_SCHEMA}>
        {() => (
          <>
            <div className={s.wrapper}>
              <Input label="Телефон для обратной связи" type="text" id="phone" name="phone"/>
            </div>
            <Textarea label="Отзыв" id="feedback" name="feedback" additionClass="feedback"/>
            <button type="submit" className={s.submit}>Отправить</button>
          </>
        )}
      </FormContainer>
    </>
  );
};

