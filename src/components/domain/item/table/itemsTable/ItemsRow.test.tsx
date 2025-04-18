import { render, screen, fireEvent } from '@testing-library/react';
import { ItemsRow } from './ItemsRow';
import { Item } from '../../../../../types/item';
import * as reduxHooks from "../../../../../app/hooks";

const mockUseAppSelector = jest.spyOn(reduxHooks, "useAppSelector");
const mockOnSelectItem = jest.fn();

describe('ItemsRow', () => {
    test('renders item row with correct data and calls onSelectItem when clicked', () => {
    const mockItem: Item = {
        guid: '123',
        name: 'Test Item',
        path: ['path1', 'path2'],
        properties: {}
    };

    // Mocking the selectedItemGUID to match the item guid
    mockUseAppSelector.mockImplementation(() => '123');

    render(<ItemsRow item={mockItem} onSelectItem={mockOnSelectItem} />);

    expect(screen.getByText('123')).toBeVisible();
    expect(screen.getByText('Test Item')).toBeVisible();
    expect(screen.getByText('path1/path2')).toBeVisible();

    fireEvent.click(screen.getByText('Test Item'));
    expect(mockOnSelectItem).toHaveBeenCalledWith('123');
    });
})