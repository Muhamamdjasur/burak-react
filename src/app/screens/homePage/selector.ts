import { createSelector } from "reselect";
import {  AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;


//retrive => malumotni qabul qilish 
export const retrivePopularDishes = createSelector(
    selectHomePage,
    (HomePage) =>  HomePage.popularDishes
    //retrivePopularDishes comandasi homepageni ichidagi  popularDishes qaytarib berayabdi
);
//selectHomePage orqali HomePage reduceri ichidagi ma’lumotlarni oladi.
//Olingan obyekt ichidan popularDishes qismni ajratib qaytaradi.
//retrivePopularDishes → HomePage ichidagi popularDishes ni qaytaradi.

export const retriveNewDishes = createSelector(
    selectHomePage,
    (HomePage) =>  HomePage.newDishes
);//stateni qolga olib  ichidan homepageni ajratib oldi 
export const retriveTopUsers = createSelector(//select 
    selectHomePage,
    (HomePage) =>  HomePage.topUsers//reselect
);
//stateni yorib homepageni qolga olib 
//homepgeni yorib  ichidagi new dishesni orqaga qaytarayabdi     import { createSelector } from "reselect";
