import React from "react";
import { Form, Formik } from "formik";
import { FormErrorContainer } from "components/forms/FormErrorContainer/FormErrorContianer";
import { Empty } from "components/common/Empty/Empty";
import s from "./FormContainer.module.scss";

export const FormContainer = (props) => {
  // const {serverErrors, className, children, ...other} = props;
  const { initialValues, children, className } = props;
  console.log(children);

  
  return (
    <Formik initialValues={initialValues} onSubmit={() => console.log(123)}>
      {(formProps) => (
        <Form className={s[className]}>
        
          {children}
        </Form>
      )}
    </Formik>
  );
};

