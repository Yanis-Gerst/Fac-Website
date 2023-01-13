import React, { useState } from "react";
import Button from "../Button";
import "./_form.scss";
export interface IFormOptions {
  [key: string]: (page: string) => void;
}

interface Props {
  options: IFormOptions;
}
const Form = ({ options }: Props) => {
  const [formValue, setFormValue] = useState("");
  const [path, setPath] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newPath = `${path}/${formValue.replace(/\s/g, "")}`;
    setPath(newPath);
    const onSubmitFunction = options[formValue];
    onSubmitFunction(newPath);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const inputChild: HTMLInputElement =
      e.currentTarget?.getElementsByTagName("input")[0];
    inputChild.checked = true;
    setFormValue(inputChild.value);
  };

  return (
    <form className="form">
      <ul className="form__inputs">
        {Object.keys(options).map((key) => {
          return (
            <li onClick={handleClick}>
              <input
                type="radio"
                name="option"
                key={key}
                id={key}
                value={key}
                className="form__inputs__input"
              />
              <label htmlFor={key} className="text--base-text">
                {key}
              </label>
            </li>
          );
        })}
      </ul>

      <Button
        type={"primary"}
        onClick={handleSubmit}
        specificStyle="form__submit-button text--extra-header5"
      >
        Suivant
      </Button>
    </form>
  );
};

export default Form;
