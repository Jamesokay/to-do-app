import { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

export default function SideBar() {
    const allTasks = useSelector(state => state.tasks.taskList)
    const [taskType, setTaskType] = useState('all')
    const [taskArr, setTaskArr] = useState([])
    
    useEffect(() => {
        if (taskType === 'current') {
            setTaskArr(allTasks.filter(task => !task.complete))
        } 
        else if (taskType === 'completed') {
            setTaskArr(allTasks.filter(task => task.complete))
        } 
        else {
            setTaskArr(allTasks)
        }
    }, [taskType, allTasks])

    return (
        <div className='sideBar'>
          <div className='taskTypeContainer'>
              <span className='taskType' onClick={() => setTaskType('all')} style={taskType === 'all'? {color: 'white'} : {}}>All</span>
              <span className='taskType' onClick={() => setTaskType('current')} style={taskType === 'current'? {color: 'white'} : {}}>Current</span>
              <span className='taskType' onClick={() => setTaskType('completed')} style={taskType === 'completed'? {color: 'white'} : {}}>Completed</span>
          </div>
          {taskArr.length !== 0?
          <ul className='taskList'>
             {taskArr.map((task) => (
                  <li key={task.uid} className='taskListItem'>{task.desc}</li>
              ))}
          </ul>
          :
          <div style={{color: 'white', marginTop: '5rem'}}>Such empty</div>
          }
        </div>
    )
}
