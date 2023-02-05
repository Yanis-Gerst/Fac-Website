import React from "react";
import fichesFeatureIllu from "../../public/assets/ficheFeature.svg";
import exerciceFeatureIllu from "../../public/assets/exerciceFeature.svg";
import sucessFeatureIllus from "../../public/assets/succesFeature.svg";
import githubIcon from "../../public/assets/githubIcon.svg";
import HeroSection from "../layout/HeroSection/HeroSection";
import QuestionnarySection from "../layout/QuestionnarySection";
import NavBar from "../layout/NavBar/NavBar";

import { IFeature } from "../@types/global";
import FeaturesSection from "../layout/FeaturesSection";

const LandingPage = () => {
  const placeholderText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
  const featureList: IFeature[] = [
    {
      title: "Fiches de Révision",
      illustration: fichesFeatureIllu,
      text: placeholderText,
      alt: "Plusieurs autours d'une table qui travaillent.",
    },
    {
      title: "Exercies et Examen",
      illustration: exerciceFeatureIllu,
      text: placeholderText,
      alt: "2 Personnes qui sont sur une pile de livres énormes qui sont en train de travailler.",
    },
    {
      title: "Vous aider à Réussir",
      illustration: sucessFeatureIllus,
      text: placeholderText,
      alt: "Un Homme grand qui pose un drapeau comme signe de réussite sur une pile de livre",
    },
    {
      title: "Open Source",
      illustration: githubIcon,
      text: placeholderText,
      alt: "Le logo de github, une plateforme d'hérbegement de projet open source",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="landing-page">
        <HeroSection />
        <FeaturesSection featuresList={featureList} />
        <QuestionnarySection />
      </div>
    </>
  );
};

export const desktopBreakpoint = 1200;
export default LandingPage;
