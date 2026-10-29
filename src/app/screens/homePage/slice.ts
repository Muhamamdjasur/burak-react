import { HomeMax } from "@mui/icons-material";
import {createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

 const initialState: HomePageState = {
    popularDishes: [],
    newDishes: [],
    topUsers: [],
 };


//Reducer vazifasi Actiondan kelayotgan malumotlarni => Storega joylash 
const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setPopularDishes: (state, action ) => { // 1 Actiondan kelayotgan malumo
            state.popularDishes = action.payload;//2 Ichidan payload qismidan malumot olayabdi 
            // //va  popularDishes qiymatini yangilab berayabdi
        },
        setNewDishes: (state, action ) => {//
            state.newDishes = action.payload;
        },
        setTopUsers: (state, action ) => {// 1 setTopUsers Reducer ishga tushsa, 
            state.topUsers = action.payload;
// 2 action.payloaddan kelayotgan malumotni olib , state.=imizni topUsersni yangilab berar ekan!! 
//  3 yani boshlangic qiymatlar ozgaradi(tepadagi 3 ta malumot  )
        },
    },
}); 
// Malumotli olib kelish u-n tashqariga export qilayabmiz 
export const  { setPopularDishes, setNewDishes, setTopUsers  } =  // bu yerda 3 ta action va ularni destruction qilayabmiz  
homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;// 1 Buni homePageSlice ichidan reducer ovolib
export default HomePageReducer;// buni tashqariga export qilib olayabmiz 



// Redux Reducer 
//Redux Action.  ikkisi ham bitta nomda lekin boshqa boshqa narsa import { createSlice } from "@reduxjs/toolkit";
