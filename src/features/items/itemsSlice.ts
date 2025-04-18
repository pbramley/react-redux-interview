import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types/item';
import { TabState } from '../../types/tabState';

const FETCH_ITEMS_URL = 'http://localhost:8080/items';

/**
 * Definition of the state represented in the items slice. 
 * In particular, will contain the list of items loaded from the server, the GUID
 * of the selected item (or null), and the state of the selected tab for the selected item panel.
 */
interface ItemsState {
  items: Item[];
  selectedItemGUID: string | null;
  selectedTabState: TabState;
}

/**
 * Initialises the state of the itemsSlice to be an empty items list before being loaded from the server.
 * Also intialises the selected item to null, and sets the default tab place to the Properties tab.
 */
const initialState: ItemsState = {
  items: [],
  selectedItemGUID: null,
  selectedTabState: TabState.PROPERTIES,
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
  reducers: {
    setSelectedItem: (state, action: PayloadAction<string>) => {
      state.selectedItemGUID = action.payload;
    },
    setSelectedTabState: (state, action: PayloadAction<TabState>) => {
      state.selectedTabState = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.items = action.payload;
    })
  }
});

export const { setSelectedItem, setSelectedTabState } = itemsSlice.actions;
export default itemsSlice.reducer;