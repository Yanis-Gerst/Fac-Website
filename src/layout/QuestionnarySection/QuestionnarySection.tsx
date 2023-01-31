import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../componenents/Form";
import questionnaryIllustration from "../../../assets/questionnaryIllustration.svg";
import createInitFormOptions from "../../pages/AmuData/formOptions";
import { IFormOptions } from "../../componenents/Form/Form";
import Button from "../../componenents/Button";

const QuestionnarySection = () => {
  const [formOptions, setFormOptions] = useState<IFormOptions>({});
  const naviguate = useNavigate();

  useEffect(() => {
    const initOptions = createInitFormOptions(naviguate, setFormOptions);
    setFormOptions(initOptions);
    console.log("Stae Change");
  }, []);

  return (
    <div className="questionnary-section">
      <img
        src={questionnaryIllustration}
        alt="un homme qui se pose une question."
        className="questionnary-section__illustration"
      />
      <h1 className="text--header5 questionnary-section__header">
        Quelle est ton cursus ?
      </h1>
      <Form
        options={formOptions}
        setOptions={setFormOptions}
        nextButton={
          <Button type="primary" specificStyle="form__next-button">
            Suivant
          </Button>
        }
        backButton={
          <Button type="secondary" specificStyle="form__back-button">
            Back
          </Button>
        }
      />
    </div>
  );
};

export default QuestionnarySection;
