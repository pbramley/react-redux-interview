import { render, screen } from '@testing-library/react';
import { EmptySelectionState } from './EmptySelectionState';

describe('EmptySelectionState', () => {
  test('renders the "No item selected" message', () => {
    render(
        <EmptySelectionState />
    );
    expect(screen.getByText(/No item selected!/)).toBeVisible();
    expect(screen.getByText(/Start by clicking a row to select an item./)).toBeVisible();
  });
});