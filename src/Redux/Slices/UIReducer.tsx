import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
    basket: boolean;
    search: boolean;
    tab: string;
}

const initialState: UIState = {
    basket: false,
    search: false,
    tab: "catalog",
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
        set_tab: (state, action: PayloadAction<string>) => {
            state.tab = action.payload;
        }

    },
})

export const { basket_open, search_open,set_tab } = UIReducer.actions

export default UIReducer.reducer;