import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./inputs.module.scss";

interface Props {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
  errors?: FieldError;
}
const TextInput = ({ label, register, errors }: Props) => {
  return (
    <div className={`${styles["inputs-container"]}`}>
      <div className={`${styles["inputs"]}`}>
        <label>{label}</label>
        <input {...register} />
      </div>

      <div className={`${styles["inputs__errors"]}`}>
        <p>{errors?.message}</p>
      </div>
    </div>
  );
};

export default TextInput;
