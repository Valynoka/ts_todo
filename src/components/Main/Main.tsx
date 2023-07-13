import React from 'react';
import TaskList from '../TaskList/TaskList';
import Task from '../Task/Task';
import '../Main/Main.css'





const Main = () => {
    return (
        <div className="main__wrapper">
            <div className='main'>
                <h1 className='main__title'>Список Ваших задач</h1>
                <div className='main__data'>
                    <Task />
                    <TaskList id={''} message={''} completed={false} />
                </div>
            </div>
        </div>
    );
}

export default Main;