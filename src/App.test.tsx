import { render, screen } from "@testing-library/react";
import { App } from "./App";
import * as reduxHooks from "./app/hooks";

// Mock the ItemsTable and SelectedItemTabPanel components
jest.mock("./components/domain/item/table/ItemsTable", () => ({
  ItemsTable: () => <div>Mocked ItemsTable</div>,
}));

jest.mock("./components/domain/item/panel/SelectedItemPanel", () => ({
  SelectedItemTabPanel: () => <div>Mocked SelectedItemTabPanel</div>,
}));

const mockDispatch = jest.fn();

// Mock the Redux hooks
const mockUseAppSelector = jest.spyOn(reduxHooks, "useAppSelector");
const mockUseAppDispatch = jest.spyOn(reduxHooks, "useAppDispatch");

jest.mock("./features/items/itemsSlice", () => ({
  fetchItems: jest.fn(),
}));

beforeEach(() => {
  mockUseAppDispatch.mockReturnValue(mockDispatch);
  mockUseAppSelector.mockReturnValue(null);
});

test("renders the App component with the ItemsTable and EmptySelectionState when no item is selected", () => {
  render(<App />);

  expect(screen.getByText("Mocked ItemsTable")).toBeVisible();
  expect(screen.getByText("No item selected!")).toBeVisible();
  expect(
    screen.queryByText("Mocked SelectedItemTabPanel")
  ).not.toBeInTheDocument();
});

test("renders SelectedItemTabPanel when an item is selected", () => {
  // Set the selector to simulate an item being selected
  mockUseAppSelector.mockReturnValue("123");

  render(<App />);

  expect(screen.getByText("Mocked ItemsTable")).toBeVisible();
  expect(screen.getByText("Mocked SelectedItemTabPanel")).toBeVisible();
  expect(screen.queryByText("No item selected")).not.toBeInTheDocument();
});
