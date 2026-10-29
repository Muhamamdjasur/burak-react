import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import ProductsPageReducer from "./screens/productsPage/slice";
import reduxLogger from "redux-logger";
import OrdersPageReducer from "./screens/ordersPage/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger), //reduxLogger integratsiyasini amalga oshrdik
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer,
    ordersPage: OrdersPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import HomePageReducer from "./screens/homePage/slice";
// import { createLogger } from "redux-logger";

// const logger = createLogger({ collapsed: true });

// export const store = configureStore({
//   reducer: {
//     HomePage: HomePageReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(logger as any), // ✅ MUHIM
// });
