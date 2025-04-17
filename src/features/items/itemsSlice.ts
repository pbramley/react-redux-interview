import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types/item';

const FETCH_ITEMS_URL = 'http://localhost:8080/items';

/**
 * Definition of the state represented in the items slice. 
 * In particular, will contain the list of items loaded from the server.
 */
interface ItemsState {
  items: Item[];
}

/**
 * Initialises the state of the itemsSlice to be an empty items list before being loaded from the server.
 */
const initialState: ItemsState = {
  items: [],
};

/**
 * Async thunk to be used to fetch items from the server asynchronously, and then be stored in the items slice.
 */
export const fetchItems = createAsyncThunk<Item[]>('items/fetch', async () => {
    const response = await fetch(FETCH_ITEMS_URL);
    
    if (!response.ok) {
        throw new Error('Failed to fetch items');
    }

    return await response.json();
  });

/**
 * Redux slice to manage the items fetched from the server.
 * Extra reducer used to fetch the data asynchronously from the server via the async thunk.
 */
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.items = action.payload;
    })
  }
});

export default itemsSlice.reducer;