import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../componenents/Form";
import { IFormOptions } from "../../componenents/Form/Form";
import questionnaryIllustration from "../../../assets/questionnaryIllustration.svg";

const createInitFormOptions = (
  naviguationFunction: (page: string) => void,
  setterFormFunction: (option: IFormOptions) => void
) => {
  const initOptions: IFormOptions = {
    "Portail Descartes": naviguationFunction,
    "Licence Première Année": () => {
      setterFormFunction({
        Mathématique: naviguationFunction,
        Informatique: naviguationFunction,
        Mécanique: naviguationFunction,
        Physique: naviguationFunction,
      });
    },
  };

  return initOptions;
};

const QuestionnarySection = () => {
  const [formOptions, setFormOptions] = useState<IFormOptions>({});
  const naviguate = useNavigate();

  useEffect(() => {
    const initOptions = createInitFormOptions(naviguate, setFormOptions);
    setFormOptions(initOptions);
  }, []);

  return (
    <div className="questionnary-section">
      <img
        src={questionnaryIllustration}
        alt="un homme qui se pose une question."
        className="questionnary-section__illustration"
      />
      <h1 className="text--header4 questionnary-section__header">
        Quelle est ton cursus ?
      </h1>
      <Form options={formOptions} />
    </div>
  );
};

export default QuestionnarySection;
