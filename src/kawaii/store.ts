import { configureStore } from "@reduxjs/toolkit";
import kawaiiReducer from "./kawaii-reducer";
import bankReducer from "../bank/state/reducers/bankReducer";

export const store = configureStore({
  reducer: { illustration: kawaiiReducer, bank: bankReducer },
  preloadedState: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
