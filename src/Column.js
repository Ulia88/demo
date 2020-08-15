import React from 'react';
import './App.css';
import {Col} from 'reactstrap';
import Task from './Task';


function Column(props) {
    const {tasks, changeTaskStatus, column, deleteTask} = props


    return (

        <div>

            <Col>
                <h3>{column.title}</h3>
                {tasks.filter(el => el.status === column.status)
                    .sort((a,b) => b.priority - a.priority)
                    .map(el => <Task task={el} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask}/>)}

            </Col>

        </div>
    );
}

export default Column;
