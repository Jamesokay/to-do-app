import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completeTask, removeTask } from '../userSlice'

export default function SideBar() {
    const allTasks = useSelector(state => state.user.tasks)
    const [taskType, setTaskType] = useState('all')
    const [taskArr, setTaskArr] = useState([])
    const dispatch = useDispatch()
    
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

    const markAsComplete = (taskId) => {
        dispatch(completeTask({uid: taskId}))
    }

    const deleteTask = (taskId) => {
        dispatch(removeTask({uid: taskId}))
    }

    return (
        <div className='sideBar'>
          <div className='taskTypeContainer'>
              <span className='taskType' onClick={() => setTaskType('all')} style={taskType === 'all'? {color: 'white'} : {}}>All</span>
              <span className='taskType' onClick={() => setTaskType('current')} style={taskType === 'current'? {color: 'white'} : {}}>Current</span>
              <span className='taskType' onClick={() => setTaskType('completed')} style={taskType === 'completed'? {color: 'white'} : {}}>Completed</span>
          </div>
          {allTasks && allTasks.length !== 0?
          <ul className='taskList'>
             {taskArr.map((task) => (
                  <li key={task.uid} className='taskListItem' onClick={() => task.complete? deleteTask(task.uid) : markAsComplete(task.uid)}>
                    <span className='taskDesc'>{task.desc}</span>
                    <div className='taskStatus' style={task.complete? {background: 'green'} : {}}/>
                  </li>
              ))}
          </ul>
          :
          <div style={{color: 'white', marginTop: '5rem'}}>Such empty</div>
          }
        </div>
    )
}
