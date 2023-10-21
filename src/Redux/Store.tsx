import { configureStore } from '@reduxjs/toolkit'
import UIReducer from './Slices/UIReducer';


const store = configureStore({
    reducer: {
        UI: UIReducer,
    },

})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;