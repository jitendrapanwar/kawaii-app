import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
  amount: number;
}

const INITIAL_STATE : InitialState = {
  amount: 0,  
}

const bankSlick = createSlice({
  name: 'bank',
  initialState: INITIAL_STATE,
  reducers: {
    depositMoney: (state, action: PayloadAction<number>) => {
      state.amount += action.payload
    },
    withdrawMoney: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload
    },
    bankrupt: (state) => {
      state.amount = 0
    }
  }
})

// Action creators are generated for each case reducer function
export const { depositMoney, withdrawMoney, bankrupt } = bankSlick.actions

export default bankSlick.reducer;

