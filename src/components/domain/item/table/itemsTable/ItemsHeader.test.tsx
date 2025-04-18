import { render, screen } from '@testing-library/react';
import { ItemsHeader } from './ItemsHeader';

describe('ItemsHeader', () => {
    test('renders the table headers correctly', () => {
        render(<ItemsHeader />);
      
        // Check if the table header cells are rendered correctly
        expect(screen.getByText('GUID')).toBeVisible();
        expect(screen.getByText('Name')).toBeVisible();
        expect(screen.getByText('Path')).toBeVisible();
      });
})
