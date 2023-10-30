import React, { useEffect, useRef } from "react";
import styles from "./wordsSlider.module.scss";

interface Props {
  wordsArray: string[];
  wordsStyle?: string;
  slideSlowness?: number;
}

const WordsSlider = ({
  wordsArray,
  wordsStyle = "",
  slideSlowness = 12,
}: Props) => {
  const wordsSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wordsSliderRef.current) return;

    const styleElement = document.styleSheets[0];
    const createKeyframesAnimation = () => {
      const animationSteps = 100 / wordsArray.length;
      let animationBody = "";

      animationBody += `
        0%, ${animationSteps - slideSlowness}% {
          transform: translateY(0);
        } 
      `;

      for (let i = 1; i < wordsArray.length + 1; i++) {
        animationBody += ` 
        ${animationSteps * i - slideSlowness / 2}% {
          transform: translateY(${-100 * i - 10}%);
        }
        ${animationSteps * i - slideSlowness / 4}% {
          transform: translateY(${-100 * i + 5}%)
        }
        ${animationSteps * i}%${
          i === wordsArray.length
            ? ""
            : `, ${animationSteps * (i + 1) - slideSlowness}%`
        } {
          transform: translateY(${-100 * i}%);
        } 
        `;
      }

      const keyframesRule = `@keyframes ${styles["wordsSlide"]} {
             ${animationBody}
          }`;

      styleElement.insertRule(keyframesRule, 0);
    };
    createKeyframesAnimation();
  }, []);

  return (
    <div className={`${styles["words-slider"]}`} ref={wordsSliderRef}>
      {wordsArray.map((word) => (
        <span
          className={`${styles["words-slider__item"]} ${wordsStyle}`}
          key={word}
        >
          {word}
        </span>
      ))}
      <span className={`${styles["words-slider__item"]} ${wordsStyle}`}>
        {wordsArray[0]}
      </span>
    </div>
  );
};

export default WordsSlider;
