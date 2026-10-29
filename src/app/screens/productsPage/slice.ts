// import {createSlice } from "@reduxjs/toolkit";
// import { ProductsPageState } from "../../../lib/types/screen"

//  const initialState: ProductsPageState = {
//     restaurant: null,
//     chosenProduct: null,
//     products: [],
//  };


// //Reducer vazifasi Actiondan kelayotgan malumotlarni => Storega joylash 
//  const productsPageslice = createSlice({
//     name: "productsPage",
//     initialState,
//     reducers: {
//         setRestaurant: (state, action ) => { // 1 Actiondan kelayotgan malumo
//             state.restaurant = action.payload;//2 Ichidan payload qismidan malumot olayabdi 
//             // //va  popularDishes qiymatini yangilab berayabdi
//         },
//         setChosenProduct: (state, action ) => {//
//             state.chosenProduct = action.payload;
//         },
//         setProducts: (state, action ) => {// 1 setTopUsers Reducer ishga tushsa, 
//             state.products = action.payload;
// // 2 action.payloaddan kelayotgan malumotni olib , state.=imizni topUsersni yangilab berar ekan!! 
// //  3 yani boshlangic qiymatlar ozgaradi(tepadagi 3 ta malumot  )
//         },
//     },
// }); 
// // Malumotli olib kelish u-n tashqariga export qilayabmiz 
// export const  { setRestaurant, setChosenProduct, setProducts } =  // bu yerda 3 ta action va ularni destruction qilayabmiz  
// productsPageslice.actions;

// const ProductsPageReducer = productsPageslice.reducer;// 1 Buni homePageSlice ichidan reducer ovolib
// export default ProductsPageReducer;// buni tashqariga export qilib olayabmiz 



// // Redux Reducer 
// //Redux Action.  ikkisi ham bitta nomda lekin boshqa boshqa narsa 

import { createSlice } from "@reduxjs/toolkit";
import { ProductsPage } from "../../../lib/types/screen";

const initialState: ProductsPage = {
    restaurant: null,
    chosenProduct: null,
    products: []
}

const productsPageSlice = createSlice({
    name: "productsPage",
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload;
        },
        setChosenProduct: (state, action) => {
            state.chosenProduct = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    }
});

export const {setRestaurant, setChosenProduct, setProducts} = productsPageSlice.actions;

const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;