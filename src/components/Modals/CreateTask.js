import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function CreateTask({modal, toggle, save}) {

    const [taskName, setTaskName] = useState('')
    const [list, setList] = useState('')

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if(name === 'taskName') {
            setTaskName(value)
        } else {
            setList(value)
        }
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj['Name'] = taskName
        taskObj['List'] = list
        save(taskObj) //it will push this task obj in this taskList array
    }

    return (
        <div>
          <Modal isOpen={modal} toggle={toggle} >
              <ModalHeader toggle={toggle}>Create task</ModalHeader>
             <ModalBody> 
               <form>
                   <div className='form-group'>
                       <label>Task Name</label>
                       <input type='text' className='form-control' value={taskName} onChange={handleChange} name='taskName' />
                   </div>
                   <div className='form-group'>
                       <label>List</label>
                       <textarea rows='5' className='form-control' value={list} onChange={handleChange} name='lists' ></textarea>
                   </div>
               </form>
            </ModalBody>
                <ModalFooter>
          <Button color="primary" onClick={handleSave}>Create</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
        </div>
    )
}
