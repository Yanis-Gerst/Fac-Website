import React from "react";

interface Props {
  activeTabIndex?: number;
  index?: number;
  handleCick?: () => void;
  children: React.ReactNode;
}
const TabItem = ({ activeTabIndex, index, handleCick, children }: Props) => {
  if (activeTabIndex === null || index === null || handleCick === null) {
    throw new Error("Use Tabs Component Provider");
  }

  return (
    <div
      className={`tabs__item text--small-text ${
        index == activeTabIndex ? "tabs__item--active" : ""
      }`}
      key={index}
      onClick={handleCick}
    >
      {children}
    </div>
  );
};

export default TabItem;
