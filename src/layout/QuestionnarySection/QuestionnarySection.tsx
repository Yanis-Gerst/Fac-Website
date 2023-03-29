import React from "react";
import { useRouter } from "next/router";
import Form from "../../componenents/Form";
import questionnaryIllustration from "../../../public/assets/questionnaryIllustration.svg";
import { IFormOptions } from "../../componenents/Form/Form";
import Button from "../../componenents/Button";
import Image from "next/image";

interface Props {
  formOptions: IFormOptions[];
}
const QuestionnarySection = ({ formOptions }: Props) => {
  const router = useRouter();

  const naviguation = (url: string) => {
    router.push(url);
  };

  return (
    <section className="questionnary-section">
      <Image
        src={questionnaryIllustration}
        alt="un homme qui se pose une question."
        className="questionnary-section__illustration"
      />
      <h1 className="text--header5 questionnary-section__header">
        Quelle est ton cursus ?
      </h1>
      <Form
        initOptions={formOptions}
        naviguation={naviguation}
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
    </section>
  );
};

export default QuestionnarySection;
