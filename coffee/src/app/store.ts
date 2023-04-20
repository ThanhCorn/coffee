import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categorySlice';
import menusReducer from '../features/menuSlice';
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    menus: menusReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch