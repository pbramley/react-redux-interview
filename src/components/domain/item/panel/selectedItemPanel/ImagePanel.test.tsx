import React from "react";
import { render, screen } from "@testing-library/react";
import { ImagePanel } from "./ImagePanel";
import * as reduxHooks from "../../../../../app/hooks";
import { TabState } from "../../../../../types/tabState";

const mockUseAppSelector = jest.spyOn(reduxHooks, "useAppSelector");

describe("ImagePanel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("displays message when no item is selected", () => {
    mockUseAppSelector.mockImplementation((selectorFn) =>
        selectorFn({ items: { selectedItemGUID: null, items: [], selectedTabState: TabState.PROPERTIES } })
    );

    render(<ImagePanel />);

    expect(screen.getByText("No image to show.")).toBeVisible();
  });

  test("renders image when we have an item to show", () => {
    const selectedGUID = "abc123";
    mockUseAppSelector.mockImplementation((selectorFn) =>
      selectorFn({ items: { selectedItemGUID: selectedGUID, items: [], selectedTabState: TabState.PROPERTIES } })
    );

    render(<ImagePanel />);

    const image = screen.getByAltText("Selected item") as HTMLImageElement;
    expect(image).toBeVisible();
    expect(image.src).toBe(`http://localhost:8080/image/${selectedGUID}`);
  });
});