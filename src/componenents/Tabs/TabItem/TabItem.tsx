import React from "react";
import styles from "./tabItem.module.scss";

interface Props {
  activeTabIndex?: number;
  index?: number;
  handleClick?: () => void;
  children: React.ReactNode;
}
const TabItem = ({ activeTabIndex, index, handleClick, children }: Props) => {
  if (
    activeTabIndex === undefined ||
    index === undefined ||
    handleClick === undefined
  ) {
    throw new Error("Use Tabs Component Provider");
  }

  return (
    <div
      className={`${styles["tabs__item"]} text--small-text ${
        index == activeTabIndex ? styles["tabs__item--active"] : ""
      }`}
      key={index}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default TabItem;
