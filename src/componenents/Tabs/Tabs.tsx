import React, { ReactElement } from "react";
import "./_tabs.scss";

interface Props {
  children: ReactElement<ChildProps>[];
  setter: React.Dispatch<number>;
  activeTabIndex: number;
}

interface ChildProps {
  activeTabIndex?: number;
  index?: number;
  handleClick?: () => void;
}

const Tabs = ({ children, setter, activeTabIndex }: Props) => {
  const handleClickOnTab = (clickedIndex: number) => {
    setter(clickedIndex);
  };

  return (
    <div className="tabs">
      {React.Children.map(children, (tabItem, index) =>
        React.cloneElement(tabItem, {
          activeTabIndex,
          index,
          handleClick: () => handleClickOnTab(index),
        })
      )}
    </div>
  );
};

export default Tabs;
