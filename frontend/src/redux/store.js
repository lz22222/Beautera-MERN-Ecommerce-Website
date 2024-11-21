import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import authReducer from './features/auth/authSlice'
import authApi from './features/auth/authApi'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
	middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});
