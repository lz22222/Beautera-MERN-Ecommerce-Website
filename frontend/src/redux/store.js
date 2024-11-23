import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import authReducer from './features/auth/authSlice'
import authApi from './features/auth/authApi'
import productsApi from './features/productsApi'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
	middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware),
});
