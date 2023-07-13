import React, { useRef } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/sliceTodo";
import '../Task/Task.css'



const Task: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const addNewTask = () => {
        const task = inputRef.current!.value.trim()
        if (task !== '') {
            dispatch(addTodo(task))
        }
    }
    return (
        <div className="task__wrapper">
            <form
                className="task__form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <input
                    className="task__input"
                    type="text"
                    placeholder="Add your tasks"
                    ref={inputRef}
                />
                <button
                    className="task__button"
                    onClick={addNewTask}
                >Add
                </button>
            </form>
        </div>
    )
};

export default Task;