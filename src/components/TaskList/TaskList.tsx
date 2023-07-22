import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Appstate } from '../../store/store';
import { Tasks, removeTodo, comletedTodo } from '../../store/sliceTodo';
import '../TaskList/TaskList.css'



const TaskList:React.FC<Tasks> = () => {
    const tasks = useSelector((state: Appstate) => state.todos);
    const dispatch = useDispatch();

    return(
        <ul className='taskList'>
            {tasks.map((task) => (
                <li 
                className='taskList__item'
                key={task.id}>
                    <input
                    className='taskList__input'
                    type='checkbox'
                    onChange={() => dispatch(comletedTodo(task.id))}
                    />
                    <p 
                    className='taskList__text'
                    >{task.message}</p>
                    <button
                    className='taskList__button'
                    onClick={() => dispatch(removeTodo(task.id))}
                    >X</button>
                </li>
            ))}
        </ul>
    )
};

export default TaskList;
