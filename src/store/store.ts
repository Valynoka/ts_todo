import { configureStore } from "@reduxjs/toolkit";
import sliceTodo from './sliceTodo'



const store = configureStore({
    reducer:{
        todos: sliceTodo.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type Appstate = ReturnType<typeof store.getState>;
export default store;

