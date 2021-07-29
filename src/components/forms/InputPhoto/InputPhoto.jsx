import React from "react";
import s from "components/forms/InputPhoto/InputPhoto.module.scss";

export const InputPhoto = ({ id, name, formProps }) => {
  const [file, setFile] = React.useState("");

  const handleChange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  React.useEffect(() => {
    formProps.setFieldValue(name, file);
  }, [file]);
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        {file && <img src={file} alt="" className={s.image}/>}
        {!file && <label className={s.label} htmlFor={name} style={{ "backgroundImage": file }}>
          <svg width="49" height="51" viewBox="0 0 49 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9.65625" y="34.623" width="21.2459" height="14.1639" fill="#8D9A9A"/>
            <circle cx="20.672" cy="25.1803" r="6.29508" fill="#8D9A9A"/>
            <path d="M24.3374 10.2295H1V49.5738H39.5574V26.7955" stroke="#8D9A9A" strokeWidth="2"/>
            <line x1="39.7695" y1="-4.37114e-08" x2="39.7695" y2="20.459" stroke="#8D9A9A" strokeWidth="2"/>
            <line x1="29.3281" y1="10.0164" x2="49.0003" y2="10.0164" stroke="#8D9A9A" strokeWidth="2"/>
          </svg>
        </label>}
      </div>
      <label htmlFor={id} className={s.text}>Изменить аватар</label>
      <input id={id} name={"photo"} className={s.input} type="file"
             onChange={e => handleChange(e)}/>
    </div>
  );
};