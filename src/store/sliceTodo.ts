import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import Task from "../components/Task/Task";

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
        sortTodo: (state) => {
            state.sort((a, b) => a.message.localeCompare(b.message));
        },
    }
});

export const {addTodo, removeTodo, comletedTodo, sortTodo} = sliceTodo.actions;

export default sliceTodo;