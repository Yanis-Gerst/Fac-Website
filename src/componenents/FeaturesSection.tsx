import React from "react";
import FeatureCard from "./FeatureCard";
import fichesFeatureIllu from "../../assets/ficheFeature.svg";
import exerciceFeatureIllu from "../../assets/exerciceFeature.svg";
import sucessFeatureIllus from "../../assets/succesFeature.svg";

const featuresNumber = 3;
const featuresTitles = [
  "Fiches de Révision",
  "Exercices et Examen",
  "Vous aider à Réussir",
];
const featuresIllustration = [
  fichesFeatureIllu,
  exerciceFeatureIllu,
  sucessFeatureIllus,
];
const featuresText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
];

const FeaturesSection = () => {
  return (
    <>
      <h1 className="text--header2 feature-section-header mt-section">
        Name c'est Quoi ?
      </h1>

      <div className="feature-slider">
        {[...Array(featuresNumber)].map((elt, i) => {
          return (
            <FeatureCard
              title={featuresTitles[i]}
              imgUrl={featuresIllustration[i]}
            >
              {featuresText[i]}
            </FeatureCard>
          );
        })}

        <div>Pagination</div>
      </div>
    </>
  );
};

export default FeaturesSection;
