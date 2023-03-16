import { configureStore } from '@reduxjs/toolkit';
import kawaiiReducer from './kawaii-reducer';

export const store = configureStore({reducer: {illustration:kawaiiReducer}, preloadedState:{}})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
