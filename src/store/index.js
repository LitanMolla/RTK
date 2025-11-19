import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { productsApi } from './api'
import { setupListeners } from '@reduxjs/toolkit/query'
import addToCartReducer from '../features/addToCart/addToCartSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        addToCart: addToCartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)
