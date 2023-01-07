import fichesFeatureIllu from "../../assets/ficheFeature.svg";
import exerciceFeatureIllu from "../../assets/exerciceFeature.svg";
import sucessFeatureIllus from "../../assets/succesFeature.svg";

import FeatureCard from "../layout/FeatureCard";
import HeroSection from "../layout/HeroSection/HeroSection";
import NavBar from "../layout/NavBar/NavBar";
import Slider from "../componenents/Slider";

import { IFeature } from "../@types/global";

const LandingPage = () => {
  const placeholderText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
  const featureList: IFeature[] = [
    {
      title: "Fiches de Révision",
      illustration: fichesFeatureIllu,
      text: placeholderText,
    },
    {
      title: "Exercies et Examen",
      illustration: exerciceFeatureIllu,
      text: placeholderText,
    },
    {
      title: "Vous aider à Réussir",
      illustration: sucessFeatureIllus,
      text: placeholderText,
    },
  ];

  //RESPONSIVE: Faire un autre composant qui permet d'afficher la grid des features et faire un render conditionnel selon
  // la window.
  return (
    <>
      <NavBar />
      <HeroSection />
      <Slider>
        {featureList.map((feature) => {
          return <FeatureCard key={feature.title} feature={feature} />;
        })}
      </Slider>
    </>
  );
};

export default LandingPage;
