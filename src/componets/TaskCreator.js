import React,{useState} from 'react'

export const TaskCreator = props =>{
    const [newTaskName, setnewTaskName] = useState('')

    const updateTaskValue = e => setnewTaskName(e.target.value)

    const createNewTask = () =>{
        props.callback(newTaskName);
        setnewTaskName('')
        console.log('hola')
    }
    return(
        <div className="my-1">
            <input 
                className='form-control'
                type="text"
                value={newTaskName}
                onChange={updateTaskValue} />
            <button className='btn btn-primary mt-1' onClick={createNewTask}>
                Add
            </button>

        </div>
    )
}