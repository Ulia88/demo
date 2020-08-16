import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import List from "./List";
//import axios from 'axios';


function App() {

    const [task, setTasks] = useState([

        {id: 1, name: 'Apple', done: false},
        {id: 2, name: 'Cherry', done: false},
        {id: 3, name: 'Strawberry', done: false}

    ])

    const deleteTask = (id) => {
        const delTask = task.filter(el => el.id !== id)
        setTasks(delTask)
    }

    const addTask = (newName) => {
        const addNewTask = {id: Math.random(), name: newName, done:false}
        const add = [...task, addNewTask]
        setTasks(add)
    }

    const markDone = ({id, done}) => {
        const update = task.map(el => {
            if (el.id === id) return {...el, done};
            return el
        })
        setTasks(update)
    }

    const editItem = (newName, id) => {
        const makeEdit = task.map(el => {
          if (el.id === id) return {...el, name: newName};
          return el
        })
        setTasks(makeEdit)
    }

    const makeLineTrough = (id) => {
        const line = task.map((el) => {
            if (el.id === id) return {...el, done: !el.done}
            return el
        })
        setTasks(line)
    }

    const moveUp = (currentElement, previousElement) => {
        if (previousElement < 0 || previousElement >= task.length) return                           //in case nothing is broken
        const up = task.map((el, i) => {
        if (currentElement === i) return task[previousElement];
        if (previousElement === i) return task[currentElement];
        return el
        })
        setTasks(up)
    }


    return (


        <div>

            <Form addTask={addTask}/>
            <List task={task}
                  deleteTask={deleteTask}
                  markDone={markDone}
                  editItem={editItem}
                  makeLineTrough={makeLineTrough}
                  moveUp={moveUp}
            />



        </div>
    );
}

export default App;
