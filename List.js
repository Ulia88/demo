import React from 'react';
import Edit from './Edit'

function List(props) {

    const {task, markDone, deleteTask, editItem, makeLineTrough, moveUp} = props;


    return (
        <div>
            LIST
            {task.map((el, index) => {
                const isElementLast = index === task.length - 1
                return < Edit
                el = {el}
                markDone = {markDone}
                deleteTask = {deleteTask}
                editItem = {editItem}
                makeLineTrough = {makeLineTrough}
                index = {index}
                moveUp = {moveUp}
                isElementLast={isElementLast}
                />

            })}

        </div>
    );
}

export default List;
