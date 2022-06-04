import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import { loadState, saveState } from './localStorage'

const persistedStore = loadState()

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
    preloadedState: persistedStore
})

store.subscribe(() => {
    saveState(store.getState());
})