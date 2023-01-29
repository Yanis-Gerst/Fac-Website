import React from "react";
import ToogleList from "./ToogleList";
import ToogleListItem from "./ToogleListItem";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const toogleNumber = 5;
const toogleIndexArray = [...Array(toogleNumber).keys()];
const testDomElement = () => (
  <ToogleList>
    {toogleIndexArray.map((indexElt) => {
      return (
        <ToogleListItem
          key={indexElt}
          index={indexElt}
          title={<h1>Title {indexElt}</h1>}
        >
          <p>Content corresponding to {indexElt}</p>
        </ToogleListItem>
      );
    })}
  </ToogleList>
);

const getContentText = (index: number) => `Content corresponding to ${index}`;

describe("Title Display Correctly", () => {
  test.each([toogleIndexArray])("Title %i render", async (indexElt) => {
    render(testDomElement());
    expect(screen).getByText(`Title ${indexElt}`).toBeInTheDocument();
  });
});

describe("Toogle Content Render Proprely", () => {
  test.each(toogleIndexArray)(
    "Content of Title %i dispaly",
    async (indexElt) => {
      render(testDomElement());
      const toogleTitle = screen.getByText(`Title ${indexElt}`);

      await user.click(toogleTitle);

      expect(screen.getByText(getContentText(indexElt))).toBeInTheDocument();
    }
  );

  it("Can remove content of current Toogle", async () => {
    render(testDomElement());
    const firstToogle = screen.getByText("Title 0");

    await user.click(firstToogle);
    await user.click(firstToogle);

    expect(screen.queryByText(getContentText(0))).not.toBeInTheDocument();
  });

  it("Can Swap Between Toogle", async () => {
    render(testDomElement());
    const firstToogle = screen.getByText("Title 0");
    const secondToogle = screen.getByText("Title 1");

    await user.click(firstToogle);
    await user.click(secondToogle);

    expect(screen.queryByText(getContentText(0))).not.toBeInTheDocument();
    expect(screen.queryByText(getContentText(1))).toBeInTheDocument();
  });
});
