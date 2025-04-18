import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SelectedItemTabPanel } from "./SelectedItemPanel";
import { TabState } from "../../../../types/tabState";
import * as reduxHooks from "../../../../app/hooks";
import { setSelectedTabState } from "../../../../features/items/itemsSlice";

const mockUseAppSelector = jest.spyOn(reduxHooks, "useAppSelector");
const mockUseAppDispatch = jest.spyOn(reduxHooks, "useAppDispatch");

describe("SelectedItemTabPanel", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    // Reset the mocks
    mockUseAppDispatch.mockReturnValue(mockDispatch);
  });

  test("renders tabs and shows the correct initial panel", () => {
    mockUseAppSelector.mockImplementation((selectorFn) =>
        selectorFn({ items: { selectedItemGUID: null, items: [], selectedTabState: TabState.PROPERTIES } })
    );

    render(<SelectedItemTabPanel />);
    expect(screen.getByText("Properties")).toBeVisible();
    expect(screen.getByText("Image")).toBeVisible();

     // Verify the selected tab
    const propertiesTab = screen.getByRole('tab', { name: /properties/i })
    const imageTab = screen.getByRole('tab', { name: /image/i })
    expect(propertiesTab).toHaveClass('Mui-selected');
    expect(imageTab).not.toHaveClass('Mui-selected')
  });

  test("switches to Image panel when Image tab is clicked", async () => {
    mockUseAppSelector.mockImplementation((selectorFn) =>
      selectorFn({ items: { selectedItemGUID: null, items: [], selectedTabState: TabState.PROPERTIES } })
    );

    render(<SelectedItemTabPanel />);

    // Click on the 'Image' tab and ensure it updates the selected state.
    fireEvent.click(screen.getByText("Image"));
    expect(mockDispatch).toHaveBeenCalledWith(setSelectedTabState(TabState.IMAGE));
  });

  test("switches to Properties panel when Properties tab is clicked", () => {
    mockUseAppSelector.mockImplementation((selectorFn) =>
        selectorFn({ items: { selectedItemGUID: null, items: [], selectedTabState: TabState.IMAGE } })
    );

    render(<SelectedItemTabPanel />);

    // Click on the 'Properties' tab and ensure it updates the selected state.
    fireEvent.click(screen.getByText("Properties"));
    expect(mockDispatch).toHaveBeenCalledWith(setSelectedTabState(TabState.PROPERTIES));
  });
});