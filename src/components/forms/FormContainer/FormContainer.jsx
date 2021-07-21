import React from "react";
import { Form, Formik } from "formik";
import { FormErrorContainer } from "components/forms/FormErrorContainer/FormErrorContianer";
import s from "./FormContainer.module.scss";

export const FormContainer = (props) => {
  const { serverErrors, children, className, ...other } = props;
  console.log(children);
  return (
    <Formik {...other} onSubmit={values => {
      alert(JSON.stringify(values, null, 2));
    }}>
      {(formik) => {
        const { setErrors } = formik;
        return (
          <FormErrorContainer serverErrors={serverErrors && serverErrors} setErrors={setErrors}>
            <Form className={s[className]}>{children(formik)}</Form>
          </FormErrorContainer>
        );
      }}
    </Formik>
  );
};
