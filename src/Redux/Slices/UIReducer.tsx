import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
    basket: boolean;
    search: boolean;
}

const initialState: UIState = {
    basket: false,  
    search: false,
}

export const UIReducer = createSlice({
    name: 'ui_state',
    initialState,
    reducers: {
        basket_open: (state) => {
            state.basket = !state.basket;
        },
        search_open: (state) => {
            state.search = !state.search;
        },

    },
})

export const { basket_open, search_open } = UIReducer.actions

export default UIReducer.reducer;