import {createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";


 const initialState: OrdersPageState = {
    pausedOrders: [],
    processOrders: [],
    finishedOrders: [],
 };


//Reducer vazifasi Actiondan kelayotgan malumotlarni => Storega joylash 
const ordersPageSlice = createSlice({
    name: "ordersPage",
    initialState,
    reducers: {
        setPausedOrders: (state, action ) => { // 1 Actiondan kelayotgan malumo
            state.pausedOrders = action.payload;//2 Ichidan payload qismidan malumot olayabdi 
            // //va  popularDishes qiymatini yangilab berayabdi
        },
        setProcessOrders: (state, action ) => {//
            state.processOrders = action.payload;  
        },
        setFinishedOrders: (state, action ) => {// 1 setTopUsers Reducer ishga tushsa, 
            state.finishedOrders = action.payload;
// 2 action.payloaddan kelayotgan malumotni olib , state.=imizni topUsersni yangilab berar ekan!! 
//  3 yani boshlangic qiymatlar ozgaradi(tepadagi 3 ta malumot  )
        },
    },
}); 
// Malumotli olib kelish u-n tashqariga export qilayabmiz 
export const  { setPausedOrders, setProcessOrders, setFinishedOrders  } =  // bu yerda 3 ta action va ularni destruction qilayabmiz  
ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;// 1 Buni homePageSlice ichidan reducer ovolib
export default OrdersPageReducer;// buni tashqariga export qilib olayabmiz 



// Redux Reducer 
//Redux Action.  ikkisi ham bitta nomda lekin boshqa boshqa narsa import { createSlice } from "@reduxjs/toolkit";
