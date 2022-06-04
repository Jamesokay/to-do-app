import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import { loadState, saveState } from './localStorage'

const persistedStore = loadState()

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    preloadedState: persistedStore
})

store.subscribe(() => {
    saveState(store.getState());
})