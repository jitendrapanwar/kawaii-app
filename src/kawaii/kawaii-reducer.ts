import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { characters, MOODS } from "./moods"


type InitialState = {
  mood: string;
  type: string
}
const INITIAL_STATE : InitialState = {
  mood: MOODS.SAD,
  type: characters.CAT
}

const characterSlice = createSlice({
  name: 'illustration',
  initialState: INITIAL_STATE,
  reducers: {
    updateMood: (state, action: PayloadAction<string>) => {
      state.mood = action.payload
    },
    updateIllstration: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateMood, updateIllstration } = characterSlice.actions

export default characterSlice.reducer;