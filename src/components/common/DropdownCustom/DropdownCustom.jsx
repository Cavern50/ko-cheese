import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Field } from "formik";
import s from "./DropdownCustom.module.scss";

export const DropdownCustom = (props) => {
  const { label, placeholder, options, name, id, selectHandler } = props;
  return (
    <Field name={name} id={id}>
      {({
          field,
          form,
          meta
        }) =>
        <div className={s.container}>
          <span className={s.label}>{label}</span>
          <Dropdown options={options}
                    className={s.field}
                    controlClassName={s.control}
                    menuClassName={s.menu}
                    placeholder={placeholder}
                    arrowOpen={<span className={s.arrowOpen}/>}
                    arrowClosed={<span className={s.arrowClosed}/>}
                    onChange={(e) => {
                      form.setFieldValue(field.name, e.value);
                      selectHandler && selectHandler(e.value);
                    }}/>
        </div>
      }
    </Field>
  );
};