import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
    value: string[]
}

const initialState: CategoryState = {
    value: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory:(state,action: PayloadAction<string>) =>{
        state.value.push(action.payload)
    },
    removeCategory: (state,action: PayloadAction<number>) =>{
        state.value.splice(action.payload, 1)
    }
  }
});

export const { addCategory, removeCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;