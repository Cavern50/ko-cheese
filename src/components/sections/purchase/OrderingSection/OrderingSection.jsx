import React from "react";
import clsx from "clsx";

import { BackButton } from "components/buttons/BackButton/BackButton";
import { Input } from "components/forms/Input/Input";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { PURCHASE_VALIDATION_SCHEMA , windowSize } from "constants.js";
import s from "./OrderingSection.module.scss";



const stages = [[{
  label: "Телефон",
  type: "number",
  name: "phone",
  id: "phone"
}, {
  label: "Имя",
  type: "text",
  name: "name",
  id: "name"
}, {
  label: "E-mail",
  type: "email",
  name: "email",
  id: "email"
}], [{
  label: "Город",
  type: "text",
  name: "city",
  id: "city"
}, {
  label: "Улица",
  type: "text",
  name: "street",
  id: "street"
}, {
  label: "Дом",
  type: "text",
  name: "house",
  id: "house"
}, {
  label: "Квартира",
  type: "text",
  name: "apartment",
  id: "apartment"
}], [
  {
    label: "Чем платить будем",
    type: "text",
    name: "payment",
    id: "payment"
  }
]];

const steps = ["Информация", "Доставка", "Оплата"];

export const OrderingSection = () => {

  const initialValues = {
    phone: "",
    name: "",
    email: "",
    city: "Москва",
    street: "",
    house: "",
    apartment: "",
    payment: ""
  };

  const [stageForm, setStageForm] = React.useState(0);
  const [currentInputs, setCurrentInputs] = React.useState(stages[stageForm].map(stage => stage.name));
  const submitHandler = (values) => {
    console.log(values);
  };

  const stageHandler = (formProps) => {
    if (stages.length === stageForm + 1) {
      formProps.submitForm();
      return false;
    }
    windowSize <= 768 && window.scrollTo(0, 0);

    //

    formProps.setTouched();
    const currentErrors = Object.keys(formProps.errors).sort();
    console.log(currentErrors, currentInputs.sort());


    //

    // setStageForm(prev => prev + 1);
  };

  React.useEffect(() => {
    setCurrentInputs(stages[stageForm].map(stage => stage.name));
  }, [stageForm])

  return (
    <div className={s.container}>
      <BackButton additionClass="purchase"/>
      <div className={s.purchase}>
        <h2 className={s.title}>Оформление заказа</h2>
        <div className={s.steps}>
          {steps.map((step, index) =>
            <button type="button"
                    onClick={() => setStageForm(index)}
                    key={index}
                    className={clsx(s.step, index === stageForm && s.active)}>
              {step}
            </button>)}
        </div>
        <FormContainer
          enableReinitialize
          initialValues={initialValues}
          validateOnBlur
          validationSchema={PURCHASE_VALIDATION_SCHEMA}
          submitHandler={submitHandler}
        >
          {(formProps) => (
            <>
              <div className={s.stage}>
                {stages[stageForm].map((input, index) => <Input key={index} {...input}/>)}
              </div>
              <button
                type="button"
                onClick={() => stageHandler(formProps)}
                className={s.submit}>
                Оформить заказ
              </button>
            </>
          )}
        </FormContainer>
      </div>
    </div>
  );
};
