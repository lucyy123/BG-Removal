import { configureStore } from "@reduxjs/toolkit";
import { userCreditsReducer } from "./reducers/user_credits";




export const store = configureStore({
    reducer:{
        [userCreditsReducer.name]:userCreditsReducer.reducer
    }
})