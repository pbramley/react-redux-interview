import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/items/itemsSlice';

/**
 * Global store of items for the application.
 */
export const store = configureStore({
    reducer: {
        items: itemsReducer,
    }
});

// Types here are added for convenience and type safety.
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;