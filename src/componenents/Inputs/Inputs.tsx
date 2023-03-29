import React from "react";
import styles from "./inputs.module.scss";

interface Props {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Inputs = ({ label, onChange }: Props) => {
  return (
    <div className={`${styles["inputs-container"]}`}>
      <label>{label}</label>
      <input type="text" name="userName" onChange={onChange} />
    </div>
  );
};

export default Inputs;
