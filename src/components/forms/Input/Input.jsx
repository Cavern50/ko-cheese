import React from "react";
import { Field } from "formik";
import clsx from "clsx";
import s from "components/forms/Input/Input.module.scss";

export const Input = (props) => {
  const { label, type, id, name, additionClass = "", containerClass = "", value = "" } = props;
  const fieldProps = {
    name,
    type,
    ...(value && {value})
  }
  return (
    <Field {...fieldProps}>
      {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta
        }) => (
          <div className={clsx(label && s.container, s[containerClass])}>
            {label && <label className={s.label} htmlFor={id}>{label}</label>}
            <input id={id} className={clsx(s.field, s[additionClass])} type={type} {...field}/>
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
        )
      }
    </Field>
  );
};
