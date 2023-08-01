import React, { useRef } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { addTodo, sortTodo } from "../../store/sliceTodo";
import '../Task/Task.css'
import { Button } from "antd";



const Task: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const addNewTask = () => {
        const task = inputRef.current!.value.trim() /*но изначально же нельзя было оставлять пустую строку*/
        if (task === '') {
            alert('ADD YOUR TASK'); /* если я правильно понял, то это будет проверка на ввод*/
        } else {
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
                <Button
                    // className="task__button"
                    type="primary"
                    onClick={addNewTask}
                >Add
                </Button>
                <Button
                    // className="task__button"
                    onClick={(e) => dispatch(sortTodo())}
                >
                    Sort
                </Button>
            </form>
        </div>
    )
};

export default Task;