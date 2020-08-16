import React, {useState} from 'react';


function Form(props) {

const [newTask, setNewTasks] = useState('')
const add = props.addTask

const cleanInput = () => {
    add(newTask)
    setNewTasks('')
}


    return (

        <div>
            FORM

            <input value={newTask} onChange={(e) => setNewTasks(e.target.value)}/>
            <button onClick={cleanInput}>ADD TASK ⬇️</button>
        </div>


    )
}


export default Form;
