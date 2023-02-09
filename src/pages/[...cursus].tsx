import React, { useState } from "react";
import { ICursus } from "../@types/global";
import NavBar from "../layout/NavBar";
import Tabs from "../componenents/Tabs/Tabs";
import TeachingUnit from "../layout/TeachingUnit";
import TabItem from "../componenents/Tabs/TabItem";
import { GetStaticPaths, GetStaticProps } from "next/types";
import {
  getAllCursusUrl,
  retreiveCursusDataFromUrl,
} from "../lib/CursusPage/cursusData";

interface Props {
  cursusData: ICursus;
}

export const getStaticPaths: GetStaticPaths = () => {
  const allCursusUrl = getAllCursusUrl();

  const paths = allCursusUrl.map((cursusUrl) => {
    return {
      params: {
        cursus: cursusUrl.split("/"),
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const cursusParams = params?.cursus as string[];
  const cursusData = retreiveCursusDataFromUrl(
    cursusParams.join("/") as string
  );

  return {
    props: {
      cursusData,
    },
  };
};

const CursusPage = ({ cursusData }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <>
      <NavBar />
      <h1 className="text--header5 cursus-title">{cursusData.title}</h1>

      <Tabs setter={setActiveTabIndex} activeTabIndex={activeTabIndex}>
        {cursusData.domainSection.map((domain) => {
          return (
            <TabItem key={domain.title}>
              {" "}
              <p>{domain.title}</p>{" "}
            </TabItem>
          );
        })}
      </Tabs>

      <div className="teach-units-wrapper">
        <TeachingUnit
          activeTabIndex={activeTabIndex}
          domains={cursusData.domainSection}
          semesterNumber={1}
        />

        <TeachingUnit
          activeTabIndex={activeTabIndex}
          domains={cursusData.domainSection}
          semesterNumber={2}
        />
      </div>
    </>
  );
};

export default CursusPage;
