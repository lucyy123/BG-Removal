import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: InitialStateCredits = {
    credits: 0
}

export const userCreditsReducer = createSlice({
    name: 'userCreditsReducer',
    initialState,
    reducers: {
        userCreditScore: (state, action: PayloadAction<InitialStateCredits>) => {
            state.credits = action.payload.credits
        }
    }
});


export const {userCreditScore} = userCreditsReducer.actions


