import React, {useState} from 'react';


function Edit(props) {

    const {el, markDone, deleteTask, editItem, makeLineTrough, index, moveUp, isElementLast} = props;
    const [editName, setEditName] = useState(el.name)
    const [switchEdit, setSwitchEdit] = useState(false)

    const style = el.done === true? {"textDecoration":"line-through"}: null

    const editButtonHandler = () => {
        editItem(editName, el.id)
        setSwitchEdit(false)
        setEditName('')
    }

    const saveButtonHandler = () => {
        setSwitchEdit(!switchEdit);
    }



    return (
        <div>
                    <li style={style}>
                        <input type="checkbox" checked={el.done} onClick = {() =>makeLineTrough(el.id)}/>
                        {switchEdit ? (
                            <>
                                <input value={editName} onChange={(e) => setEditName(e.target.value)}/>
                                <button onClick={editButtonHandler}>Save</button>
                            </>

                        ) : (
                            <>
                                {/*{el.done && '📌'}*/}
                                {el.name}

                                {/*<button onClick={() => markDone({*/}
                                {/*    id: el.id,*/}
                                {/*    done: !el.done*/}
                                {/*})}>{el.done ? 'Unmark' : "Mark"} ✍️*/}
                                {/*</button>*/}

                                <button onClick={() => deleteTask(el.id)}>Delete 🗑️</button>
                                <button onClick={() => moveUp(index, index - 1)} disabled={!index}>Up⬆️</button>
                                <button onClick={() => moveUp(index, index + 1)} disabled={isElementLast}>Down⬇️</button>
                            </>
                        )
                        }

                    <button onClick={saveButtonHandler}>Edit</button>



                </li>


        </div>
    );
}

export default Edit;
