import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UrlHandler from "../UrlHandler";
import { ITeachingDomain } from "../../@types/global";
import mockPageObject from "../../../__mocks__/mockPageObject";

let mockPathName = "/PortailDescartes";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(() => ({
    pathname: mockPathName,
  })),
}));

jest.mock("../AmuData/pageObject", () => {
  const mockPageObject = jest.requireActual(
    "../../../__mocks__/mockPageObject"
  );
  return mockPageObject;
});

const user = userEvent.setup();

test("Retrieve The Right Page With Url", async () => {
  render(<UrlHandler />, { wrapper: BrowserRouter });

  const domainSection = mockPageObject.portailDescartes
    .domainSection as ITeachingDomain[];

  expect(screen.queryByText("L2 Info")).not.toBeInTheDocument();
  expect(
    screen.getAllByText(mockPageObject.portailDescartes.title as string)[0]
  ).toBeInTheDocument();

  domainSection.forEach((domain) => {
    expect(screen.getAllByText(domain.title)[0]).toBeInTheDocument();
  });
});

describe("Tab Render Proprely onClick", () => {
  const domainSection = mockPageObject.portailDescartes
    .domainSection as ITeachingDomain[];

  test.each(domainSection)(
    "Tab $title render Proprely",
    async ({ title: domainTitle, teachingUnitsS1 }) => {
      render(<UrlHandler />, { wrapper: BrowserRouter });
      await user.click(screen.getByText(domainTitle));

      teachingUnitsS1.forEach((teachingUnit) => {
        expect(screen.getByText(teachingUnit.title)).toBeInTheDocument();
      });
    }
  );
});

test("Error Page Render when Url doesn't exists", async () => {
  mockPathName = "/azerty";

  render(<UrlHandler />, { wrapper: BrowserRouter });

  expect(screen.getByText("404")).toBeInTheDocument();
});
