import { createSelector } from "reselect";
import OrdersPage from ".";
import {  AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;


//retrive => malumotni qabul qilish 
export const retrivePausedOrders = createSelector(
    selectOrdersPage,
    (OrdersPage) =>  OrdersPage.pausedOrders
    //retrivePopularDishes comandasi homepageni ichidagi  popularDishes qaytarib berayabdi
);
//selectHomePage orqali HomePage reduceri ichidagi ma’lumotlarni oladi.
//Olingan obyekt ichidan popularDishes qismni ajratib qaytaradi.
//retrivePopularDishes → HomePage ichidagi popularDishes ni qaytaradi.

export const retrivePocessOrders = createSelector(
    selectOrdersPage,
    (OrdersPage) =>  OrdersPage.processOrders
);//stateni qolga olib  ichidan homepageni ajratib oldi 
export const retriveFinishedOrders = createSelector(//select 
    selectOrdersPage,
    (OrdersPage) =>  OrdersPage.finishedOrders    //reselect
);
//stateni yorib homepageni qolga olib 
//homepgeni yorib  ichidagi new dishesni orqaga qaytarayabdi     import { createSelector } from "reselect";
