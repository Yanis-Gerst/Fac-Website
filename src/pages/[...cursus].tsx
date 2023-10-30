import React, { useState } from "react";
import NavBar from "../layout/NavBar";
import Tabs from "../componenents/Tabs/Tabs";
import TeachingUnit from "../layout/TeachingUnit";
import TabItem from "../componenents/Tabs/TabItem";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { getAllCursusUrl } from "../lib/CursusPage/cursusData";
import { ICursusPage } from "../@types/global";
import { retrieveAmuDataFromUrl } from "../lib/db/amuData";

interface Props {
  cursusData: ICursusPage;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allCursusUrl = await getAllCursusUrl();

  const paths = allCursusUrl.map((cursusUrl) => {
    return {
      params: {
        cursus: cursusUrl.split("/"),
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cursusParams = params?.cursus as string[];

  const cursusData = await retrieveAmuDataFromUrl(
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

  if (cursusData.domainSection.length === 0) return <h1>Working on it ...</h1>;
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

      <section className="teach-units-wrapper">
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
      </section>
    </>
  );
};

export default CursusPage;
