import { render, screen, fireEvent } from '@testing-library/react';
import { ItemsTable } from './ItemsTable';
import { Item } from '../../../../types/item';
import { setSelectedItem } from '../../../../features/items/itemsSlice';
import * as reduxHooks from '../../../../app/hooks';

const mockUseAppSelector = jest.spyOn(reduxHooks, "useAppSelector");
const mockUseAppDispatch = jest.spyOn(reduxHooks, "useAppDispatch");
const mockDispatch = jest.fn();

beforeEach(() => {
  mockUseAppDispatch.mockReturnValue(mockDispatch);
});

test('renders items table and selects an item row when clicked', () => {
  const mockItems: Item[] = [
    { guid: '123', name: 'Item 1', path: ['path1'], properties: {} },
    { guid: '124', name: 'Item 2', path: ['path2'], properties: {} },
  ];

  // Mocking the items from the Redux store
  mockUseAppSelector.mockImplementation(() => mockItems);

  render(<ItemsTable />);

  // Ensure table rows are rendered correctly for each item
  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();

  // Click on the first row (Item 1)
  fireEvent.click(screen.getByText('Item 1'));

  // Check if the dispatch function is called with the correct GUID
  expect(mockDispatch).toHaveBeenCalledWith(setSelectedItem('123'));

  // Ensure the second row (Item 2) is also rendered and clickable
  fireEvent.click(screen.getByText('Item 2'));

  // Check if the dispatch function is called with the correct GUID for Item 2
  expect(mockDispatch).toHaveBeenCalledWith(setSelectedItem('124'));
});

test('does not render any rows when there are no items in the store', () => {
  // Mocking an empty array for the items
  mockUseAppSelector.mockImplementation(() => []);

  render(<ItemsTable />);

  // Ensure no rows are rendered when there are no items
  expect(screen.queryByText('Item 1')).toBeNull();
  expect(screen.queryByText('Item 2')).toBeNull();
});