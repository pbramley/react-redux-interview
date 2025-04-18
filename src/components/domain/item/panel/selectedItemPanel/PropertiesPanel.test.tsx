import { render, screen, waitFor } from "@testing-library/react";
import { PropertiesPanel } from "./PropertiesPanel";
import * as reduxHooks from "../../../../../app/hooks";
import { TabState } from "../../../../../types/tabState";

const mockUseAppSelector = jest.spyOn(reduxHooks, "useAppSelector");

describe("PropertiesPanel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("displays empty message when no item is selected", () => {
    mockUseAppSelector.mockImplementation((selectorFn) =>
      selectorFn({
        items: {
          selectedItemGUID: null,
          items: [],
          selectedTabState: TabState.PROPERTIES,
        },
      })
    );

    render(<PropertiesPanel />);
    expect(screen.getByText(/No properties to show./i)).toBeVisible();
  });

  test("displays empty message when selected item has no properties", () => {
    const state = {
      items: {
        selectedItemGUID: "123",
        items: [
          {
            name: "My item",
            path: ["path1", "path2"],
            guid: "123",
            properties: null,
          },
        ],
        selectedTabState: TabState.PROPERTIES,
      },
    };

    mockUseAppSelector.mockImplementation((selectorFn) => selectorFn(state));

    render(<PropertiesPanel />);
    expect(screen.getByText(/No properties to show./i)).toBeVisible();
  });

  test("renders property list with correct key-value pairs", async () => {
    const state = {
      items: {
        selectedItemGUID: "123",
        items: [
          {
            name: "Test item",
            path: ["path1", "path2"],
            guid: "123",
            properties: {
                Text: "Test Item",
                Number: "100",
                Date: "2024-04-15",
              }
          },
        ],
        selectedTabState: TabState.PROPERTIES,
      },
    };

    mockUseAppSelector.mockImplementation((selectorFn) => selectorFn(state));

    render(<PropertiesPanel />);

    await waitFor(() => {
      expect(screen.getByText("Test Item")).toBeVisible();
    });

    expect(screen.getByText("Test Item")).toBeVisible();
    expect(screen.getByText("Number")).toBeVisible();
    expect(screen.getByText("100")).toBeVisible();
    expect(screen.getByText("Date")).toBeVisible();
    expect(screen.getByText("2024-04-15")).toBeVisible();
  });
});
