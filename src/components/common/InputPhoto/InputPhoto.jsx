import React from "react";
import { Field } from "formik";
import s from "./InputPhoto.module.scss";

export const InputPhoto = ({ id, name, formProps }) => (

  <Field name={name} id={id}>
    {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta
      }) => (
      <div className={s.container}>
        <label className={s.label} htmlFor="pic">
          <svg width="49" height="51" viewBox="0 0 49 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9.65625" y="34.623" width="21.2459" height="14.1639" fill="#8D9A9A"/>
            <circle cx="20.672" cy="25.1803" r="6.29508" fill="#8D9A9A"/>
            <path d="M24.3374 10.2295H1V49.5738H39.5574V26.7955" stroke="#8D9A9A" strokeWidth="2"/>
            <line x1="39.7695" y1="-4.37114e-08" x2="39.7695" y2="20.459" stroke="#8D9A9A" strokeWidth="2"/>
            <line x1="29.3281" y1="10.0164" x2="49.0003" y2="10.0164" stroke="#8D9A9A" strokeWidth="2"/>
          </svg>
        </label>
        <label htmlFor="pic" className={s.text}>Изменить аватар</label>
        <input id="pic" className={s.input} type="file" {...field} onChange={e => formProps.setFieldValue("photo", e.target.files[0])}/>
      </div>
    )}
  </Field>
);