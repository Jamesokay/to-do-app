import { useState } from 'react'

export default function SideBar() {
    const [taskList, setTaskList] = useState('current')

    return (
        <div className='sideBar'>
          <div className='taskTypeContainer'>
              <span className='taskType' onClick={() => setTaskList('current')} style={taskList === 'current'? {background: 'white'} : {}}>Current</span>
              <span className='taskType' onClick={() => setTaskList('completed')} style={taskList === 'completed'? {background: 'white'} : {}}>Completed</span>
          </div>
          {taskList === 'current'?
            <div className='test'>Current tasks here</div>
            :
            <div className='test'>Completed tasks here</div>
          }     
        </div>
    )
}
