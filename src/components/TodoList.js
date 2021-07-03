import React, {useState} from 'react'
import CreateTask from './Modals/CreateTask'

export default function TodoList() {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    const toggle = () => {
        setModal(!modal)
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        setModal(false)  // popup will get close 
    }

    return (
        <>
        <div className='header text-center'>
            <h3 className='mt-3'>Todo List</h3>
            <button className='btn btn-primary mt-2' onClick={()=> setModal(true)} >Create Task</button>
        </div>
        <div>
            {
                taskList.map((obj) => {
                    return <>
                    <div>
                     <h3>{obj.Name}</h3>

                    </div>
                     <p>{obj.List}</p>
                     </>
                })
            }
        </div>
        <CreateTask toggle={toggle} modal={modal} save={saveTask} />
   </> )
}
