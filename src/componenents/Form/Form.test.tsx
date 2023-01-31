import React, { useEffect, useState } from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Form from "./Form";
import { IFormOptions } from "./Form";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Form Display Right Options", () => {
  it("at First Render", async () => {
    const optionsToTest: IFormOptions = createOptionsToTest(
      placeholderFunction,
      placeholderFunction
    );

    render(<Form options={optionsToTest} />);

    expect(screen.getByText("Primary")).toBeInTheDocument();
    expect(screen.getByText("Tertiary")).toBeInTheDocument();
    expect(screen.queryByText("Secondary")).not.toBeInTheDocument();
  });

  it("When we change Submit new Options", async () => {
    render(<OptionsHandlerComponent />);

    const primaryOptions = screen.getByText("Primary");
    const submitButton = screen.getByRole("button");

    await user.click(primaryOptions);
    await user.click(submitButton);

    expect(screen.getByText("Secondary")).toBeInTheDocument();
    expect(screen.getByText("Finally")).toBeInTheDocument();
  });
});

describe("Form give the Right Path Of Options as argurments", () => {
  const naviguationTest = jest.fn((page: string) => {
    page;
  });

  it("With First Options", async () => {
    const optionsToTest: IFormOptions = createOptionsToTest(
      placeholderFunction,
      naviguationTest
    );

    render(<Form options={optionsToTest} />);

    const tertiaryOptions = screen.getByText("Tertiary");
    const submitButton = screen.getByRole("button");

    await user.click(tertiaryOptions);
    await user.click(submitButton);

    expect(naviguationTest).toBeCalledWith("/Tertiary");
  });

  it("With Deeper Options", async () => {
    render(<OptionsHandlerComponent naviguationTest={naviguationTest} />);

    const primaryOptions = screen.getByText("Primary");
    const submitButton = screen.getByRole("button");

    await user.click(primaryOptions);
    await user.click(submitButton);

    const secondaryOptions = screen.getByText("Secondary");

    await user.click(secondaryOptions);
    await user.click(submitButton);

    expect(naviguationTest).toBeCalledWith("/Primary/Secondary");
  });
});

test("Back Button work", async () => {
  const optionsToTest: IFormOptions = createOptionsToTest(
    placeholderFunction,
    placeholderFunction
  );
  render(<Form options={optionsToTest} />);

  const primaryOptions = screen.getByText("Primary");
  const submitButton = screen.getByRole("button");
  const backButton = screen.getByText("Back");

  await user.click(primaryOptions);
  await user.click(submitButton);
  await user.click(backButton);

  expect(primaryOptions).toBeInTheDocument();
  expect(screen.getByText("Tertiary")).toBeInTheDocument();
});
const createOptionsToTest = (
  setterFunction: (options: IFormOptions) => void,
  naviguationFunction: (page: string) => void
) => {
  const test: IFormOptions = {
    Primary: () => {
      setterFunction({
        Secondary: naviguationFunction,
        Finally: naviguationFunction,
      });
    },
    Tertiary: naviguationFunction,
  };

  return test;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const placeholderFunction = (arg: any) => {
  arg;
};

interface Props {
  naviguationTest?: (page: string) => void;
}

const OptionsHandlerComponent: React.FC<Props> = ({
  naviguationTest = placeholderFunction,
}) => {
  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions(createOptionsToTest(setOptions, naviguationTest));
  }, []);

  return <Form options={options} />;
};
