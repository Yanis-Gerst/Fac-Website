import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Form from "../../componenents/Form";
import questionnaryIllustration from "../../../public/assets/questionnaryIllustration.svg";
import createInitFormOptions from "../../AmuData/formOptions";
import { IFormOptions } from "../../componenents/Form/Form";
import Button from "../../componenents/Button";
import Image from "next/image";
import {
  lowerCaseTheFirstLetter,
  removeFirstCharacterOf,
} from "../../utils/stringMethods";
const QuestionnarySection = () => {
  const [formOptions, setFormOptions] = useState<IFormOptions>({});
  const router = useRouter();

  const handleLinkToUrl = (url: string) => {
    url = parseUrl(url);
    router.push(url);
  };

  useEffect(() => {
    const initOptions = createInitFormOptions(handleLinkToUrl, setFormOptions);
    setFormOptions(initOptions);
  }, []);

  return (
    <div className="questionnary-section">
      <Image
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
          <Button
            type="primary"
            specificStyle="questionnary-section__next-button"
          >
            Suivant
          </Button>
        }
        backButton={
          <Button
            type="secondary"
            specificStyle="questionnary-section__back-button"
          >
            Back
          </Button>
        }
      />
    </div>
  );
};

const parseUrl = (url: string) => {
  let newUrl = removeFirstCharacterOf(url);
  newUrl = lowerCaseTheFirstLetter(newUrl);
  return newUrl;
};

export default QuestionnarySection;
