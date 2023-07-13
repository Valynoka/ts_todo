import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Tasks = {
    id: string; 
    message: string;
    completed: boolean;
};

const sliceTodo = createSlice({
    name: 'todos',
    initialState: [] as Tasks[],
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({
                id: new Date().toISOString(),
                message: action.payload,
                completed: false,
            });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload)
        },
        comletedTodo: (state, action: PayloadAction<string>) => {
            const comletedTodo = state.find((todo) => todo.id === action.payload);
            comletedTodo!.completed = !comletedTodo?.completed;
            return state;
        },
    }
});

export const {addTodo, removeTodo, comletedTodo} = sliceTodo.actions;

export default sliceTodo;