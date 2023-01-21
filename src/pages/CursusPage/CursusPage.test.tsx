import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UrlHandler from "../UrlHandler";
import { IPageDbJson, ITeachingDomain } from "../../@types/global";
import { BrowserRouter } from "react-router-dom";

//TODO: Revoir Typo IPageDbJson (Pb lors de l'utilisation)
const pageDbJson: IPageDbJson = {
  PortailDescartes: {
    title: "Portail Descartes",
    domainSection: [],
  },
  L2: {
    Informatique: {
      title: "L1 Info",
      domainSection: [],
    },
  },
};

const mockPathName = "/PortailDescartes";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(() => ({
    pathname: mockPathName,
  })),
}));

const user = userEvent.setup();

test("Retrieve The Right Page With Url", async () => {
  render(<UrlHandler />, { wrapper: BrowserRouter });

  const domainSection = pageDbJson.PortailDescartes
    .domainSection as ITeachingDomain[];

  expect(screen.queryByText("Liscence Deuxième année")).not.toBeInTheDocument();
  expect(
    screen.getByText(pageDbJson.PortailDescartes.title as string)
  ).toBeInTheDocument();

  domainSection.forEach((domain) => {
    expect(screen.getByText(domain.title)).toBeInTheDocument();
  });
});

describe("Tab Render Proprely onClick", () => {
  render(<UrlHandler />, { wrapper: BrowserRouter });
  const domainSection = pageDbJson.PortailDescartes
    .domainSection as ITeachingDomain[];

  test.each(domainSection)(
    "Tab $title render Proprely",
    async ({ title: domainTitle, teachingUnitsS1 }) => {
      await user.click(screen.getByText(domainTitle));

      teachingUnitsS1.forEach((teachingUnit) => {
        expect(screen.getByText(teachingUnit.title)).toBeInTheDocument();
      });
    }
  );
});

test("Error Page Render when Url doesn't exists", async () => {
  const mockPathName = "localhost:1234/azerty";
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn(() => ({
      pathname: mockPathName,
    })),
  }));

  render(<UrlHandler />, { wrapper: BrowserRouter });

  expect(screen.getByText("404")).toBeInTheDocument();
});
