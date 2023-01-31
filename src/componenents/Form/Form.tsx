import React, { ReactElement, useEffect, useState } from "react";
import "./_form.scss";
export interface IFormOptions {
  [key: string]: (page: string) => void;
}

interface Props {
  options: IFormOptions;
  setOptions: React.Dispatch<IFormOptions>;
  nextButton?: ReactElement;
  backButton?: ReactElement;
}
const Form = ({ options, setOptions, nextButton, backButton }: Props) => {
  const [formValue, setFormValue] = useState("");
  const [path, setPath] = useState("");
  const [optionsHistory, setOptionsHistory] = useState<IFormOptions[]>([]);

  const handleClickOnInput = (e: React.MouseEvent<HTMLElement>) => {
    const inputChild: HTMLInputElement =
      e.currentTarget?.getElementsByTagName("input")[0];
    inputChild.checked = true;
    setFormValue(inputChild.value);
  };

  const handleNextSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newPath = `${path}/${formValue.replace(/\s/g, "")}`;
    setPath(newPath);

    const onSubmitFunction = options[formValue];
    onSubmitFunction(newPath);
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (optionsHistory.length <= 1) return;
    optionsHistory.pop(); //Remove Current Options
    setOptions(optionsHistory.pop() as IFormOptions);
  };

  useEffect(() => {
    if (Object.keys(options).length === 0) return;
    setOptionsHistory((currentHistory) => [...currentHistory, options]);
  }, [Object.keys(options)[0]]);

  return (
    <form className="form">
      <ul className="form__inputs">
        {Object.keys(options).map((key) => {
          return (
            <li onClick={handleClickOnInput} key={key}>
              <input
                type="radio"
                name="option"
                key={key}
                id={key}
                value={key}
                className="form__inputs__input"
              />
              <label htmlFor={key} className="text--base-text">
                {capitilize(key)}
              </label>
            </li>
          );
        })}
      </ul>
      <div
        className={`form-button-wrapper ${
          optionsHistory.length <= 1 &&
          "form-button-wrapper--back-button-disable"
        }`}
      >
        {nextButton ? (
          React.cloneElement(nextButton, { onClick: handleNextSubmit })
        ) : (
          <button className="form__submit-button" onClick={handleNextSubmit}>
            Next
          </button>
        )}
        {backButton ? (
          React.cloneElement(backButton, { onClick: handleBackClick })
        ) : (
          <button onClick={handleBackClick}>Back</button>
        )}
      </div>
    </form>
  );
};

const upperCaseTheFirstLetter = (string: string) => {
  return string[0].toUpperCase() + string.substring(1);
};

const capitilize = (string: string) => {
  return string
    .split(" ")
    .map((word) => upperCaseTheFirstLetter(word))
    .join(" ");
};

export default Form;
