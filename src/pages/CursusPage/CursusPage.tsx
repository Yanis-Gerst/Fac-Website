import React, { useState } from "react";
import { ICursus } from "../../@types/global";
import NavBar from "../../layout/NavBar";
import Tabs from "../../componenents/Tabs/Tabs";
import TeachingUnit from "../../layout/TeachingUnit";

interface Props {
  data: ICursus;
}
const CursusPage = ({ data }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <>
      <NavBar />
      <h1 className="text--header5 cursus-title">{data.title}</h1>

      <Tabs setter={setActiveTabIndex} activeTabIndex={activeTabIndex}>
        {data.domainSection.map((domain) => {
          return <p key={domain.title}>{domain.title}</p>;
        })}
      </Tabs>

      <div className="teach-units-wrapper">
        <TeachingUnit
          activeTabIndex={activeTabIndex}
          domains={data.domainSection}
          semester={1}
        />

        <TeachingUnit
          activeTabIndex={activeTabIndex}
          domains={data.domainSection}
          semester={2}
        />
      </div>
    </>
  );
};

export default CursusPage;
