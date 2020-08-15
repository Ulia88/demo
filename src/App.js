import React, {useState} from 'react';
import './App.css';
import {Container, Row} from 'reactstrap';
import Column from "./Column";
import {v4 as uuidv4} from 'uuid';
import Modalsetwindow from "./Modalsetwindow";

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {
    const taskList = [
        {id: uuidv4(), name: 'First', priority: 0, status: 'todo'},
        {id: uuidv4(), name: 'Second', priority: 1, status: 'todo'},
        {id: uuidv4(), name: 'Third', priority: 2, status: 'todo'},
        {id: uuidv4(), name: 'Fourth', priority: 3, status: 'todo'},
    ]
    const columnList = [
        {id: uuidv4(), title: 'To do', status: 'todo'},
        {id: uuidv4(), title: 'In Progress', status: 'in progress'},
        {id: uuidv4(), title: 'Review', status: 'review'},
        {id: uuidv4(), title: "Done", status: 'done'},
    ]


    const statuses = ['todo', 'in progress', 'review', 'done']
    const [tasks, setTasks] = useState(taskList)
    const priorityTask = [0, 1, 2];


    const addNewCard = (newName, newPriority, newStatus) => {
        const newTask = {id: uuidv4(), name: newName, priority: newPriority, status: newStatus}
        const newCard = [...tasks, newTask]
        setTasks(newCard)
    }


    const changeTaskStatus = (taskid, direction) => {
        const newTasks = tasks.map(el => {
            if (el.id === taskid) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1]
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1]
                if (direction === 'up') el.priority = priorityTask[priorityTask.indexOf(el.priority) + 1]
                if (direction === 'down') el.priority = priorityTask[priorityTask.indexOf(el.priority) - 1]
            }
            return el
        })
        setTasks(newTasks)
    }
    const deleteTask = (taskid) => {
        const del = tasks.filter(el =>el.id !== taskid)
        setTasks(del)
    }

    return (

        <div>
            <Container>

                <Modalsetwindow addNewCard={addNewCard}/>

                <Row>
                    {columnList.map(el =>
                            <Column tasks={tasks} column={el} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask}/>
                        // <Column tasks={tasks} title={'in progress'} changeTaskStatus={changeTaskStatus}/>
                        // <Column tasks={tasks} title={'review'} changeTaskStatus={changeTaskStatus}/>
                        // <Column tasks={tasks} title={'done'} changeTaskStatus={changeTaskStatus}/>
                    )}
                </Row>
            </Container>

            <Modalsetwindow/>

        </div>
    );
}

export default App;
