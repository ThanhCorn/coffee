import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Menu {
    id: string
    name: string
    food: string[]
}

interface MenuState {
  value: Menu[]
}

interface MenuItem {
    id: string
    food: string
}

const initialState: MenuState = {
  value: [],
}

export const menusSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    addMenu: (state, action: PayloadAction<Menu>) => {
        state.value.push(action.payload)
    },
    addMenuItem: (state,action: PayloadAction<MenuItem>) => {
        const menu = state.value.find(menu => menu.id === action.payload.id)
        if( menu){
            menu.food.push(action.payload.food)
        }
    }
  },
})

export const { addMenu,addMenuItem } = menusSlice.actions
export default menusSlice.reducer
