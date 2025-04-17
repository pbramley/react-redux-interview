import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchItems } from './features/items/itemsSlice';

/**
 * Application to display items and manage the selected item using a redux store.
 * @returns 
 */
export const App = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.items.items);

  /**
   * Dispatch the fetch items async thunk to invoke loading the item data.
   */
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="App">
        {JSON.stringify(items)}
    </div>
  );
}

export default App;
