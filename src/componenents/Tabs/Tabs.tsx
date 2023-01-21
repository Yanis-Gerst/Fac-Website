import React, { Children } from "react";
import "./_tabs.scss";
interface Props {
  children: React.ReactNode;
  setter: React.Dispatch<number>;
  activeTabIndex: number;
}
const Tabs = ({ children, setter, activeTabIndex }: Props) => {
  const toRender = Children.toArray(children);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const dataIndex = parseInt(
      e.currentTarget.getAttribute("data-index") as string
    );
    setter(dataIndex);
  };
  return (
    <div className="tabs">
      {toRender.map((element, index) => {
        return (
          <div
            className={`tabs__item text--small-text ${
              index == activeTabIndex ? "tabs__item--active" : ""
            }`}
            key={index}
            data-index={index}
            onClick={handleClick}
          >
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
