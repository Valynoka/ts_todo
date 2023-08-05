import React, { useState } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { addTodo, sortTodo } from "../../store/sliceTodo";
import '../Task/Task.css'
import { Button, Input } from "antd";



const Task: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    // const inputRef = useRef<HTMLInputElement>(null); не работал этот хук потсле того, как подключил antd Input
    const [task, setTask] = useState('')
    const addNewTask = () => {
        const newTask = task.trim() /*но изначально же нельзя было оставлять пустую строку*/
        if (task === '') {
            alert('ADD YOUR TASK'); /* если я правильно понял, то это будет проверка на ввод*/
        } else {
            dispatch(addTodo(newTask))
        }
    }
    return (
        <div className="task__wrapper">
            <form
                className="task__form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <Input
                    className="task__input"
                    type="text"
                    placeholder="Add your tasks"
                    // ref={inputRef} - пришлось заменять на хук useState
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
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