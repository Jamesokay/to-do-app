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
              <span className='taskType' onClick={() => setTaskType('all')}>All</span>
              <span className='taskType' onClick={() => setTaskType('current')}>Current</span>
              <span className='taskType' onClick={() => setTaskType('completed')}>Completed</span>
          </div>
          <div className='taskContainer'>
          <ul>
             {taskArr.map((task) => (
                  <li key={task.uid}>{task.desc}</li>
              ))}
          </ul>
          </div>
        </div>
    )
}
