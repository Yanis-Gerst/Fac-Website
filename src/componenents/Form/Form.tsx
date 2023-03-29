import React, { ReactElement, useEffect, useState } from "react";
import { parseTitleToUrl } from "../../utils/stringMethods";

import styles from "./form.module.scss";

export interface IFormOptions {
  label: string;
  next: IFormOptions[];
}

interface Props {
  initOptions: IFormOptions[];
  naviguation: (url: string) => void;
  nextButton?: ReactElement;
  backButton?: ReactElement;
}
const Form = ({ initOptions, naviguation, nextButton, backButton }: Props) => {
  const [options, setOptions] = useState<IFormOptions[]>(initOptions);
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const [path, setPath] = useState("");
  const [optionsHistory, setOptionsHistory] = useState<IFormOptions[][]>([]);

  const handleClickOnInput = (e: React.MouseEvent<HTMLElement>) => {
    const inputChild: HTMLInputElement =
      e.currentTarget?.getElementsByTagName("input")[0];
    inputChild.checked = true;
    setActiveOptionIndex(parseInt(inputChild.value));
  };

  const handleNextSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const activeOption = options[activeOptionIndex];
    const newPath = `${path}/${parseTitleToUrl(activeOption.label)}`;
    setPath(newPath);

    if (activeOption.next.length === 0) naviguation(newPath);
    else setOptions(activeOption.next);
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (optionsHistory.length <= 1) return;
    optionsHistory.pop(); //Remove Current Options
    setOptions(optionsHistory.pop() as IFormOptions[]);

    const newPath = path.split("/");
    newPath.pop(); //remove currentPath to get previous path
    setPath(newPath.join("/"));
  };

  useEffect(() => {
    if (options.length === 0) return;
    setOptionsHistory((currentHistory) => [...currentHistory, options]);
  }, [options]);

  return (
    <form className={styles.form}>
      <ul className={styles["form__inputs"]}>
        {options.map((option, index) => {
          return (
            <li onClick={handleClickOnInput} key={option.label}>
              <input
                type="radio"
                name="option"
                value={index}
                className={styles["form__inputs__input"]}
              />
              <label htmlFor={option.label} className="text--base-text">
                {capitilize(option.label)}
              </label>
            </li>
          );
        })}
      </ul>
      <div
        className={`${styles["form-button-wrapper"]} ${
          optionsHistory.length <= 1 &&
          styles["form-button-wrapper--back-button-disable"]
        }`}
      >
        {nextButton ? (
          React.cloneElement(nextButton, { onClick: handleNextSubmit })
        ) : (
          <button
            className={styles["form__submit-button"]}
            onClick={handleNextSubmit}
          >
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
