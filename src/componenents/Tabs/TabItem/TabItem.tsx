import React from "react";

interface Props {
  activeTabIndex?: number;
  index?: number;
  handleClick?: () => void;
  children: React.ReactNode;
}
const TabItem = ({ activeTabIndex, index, handleClick, children }: Props) => {
  console.log(activeTabIndex, index, handleClick);
  if (
    activeTabIndex === undefined ||
    index === undefined ||
    handleClick === undefined
  ) {
    throw new Error("Use Tabs Component Provider");
  }

  return (
    <div
      className={`tabs__item text--small-text ${
        index == activeTabIndex ? "tabs__item--active" : ""
      }`}
      key={index}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default TabItem;
