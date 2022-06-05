import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completeTask, removeTask } from '../userSlice'

export default function SideBar() {
    const allTasks = useSelector(state => state.user.tasks)
    const username = useSelector(state => state.user.name)
    const defaultTheme = useSelector(state => state.user.defaultTheme)
    const [taskType, setTaskType] = useState('all')
    const [taskArr, setTaskArr] = useState([])
    const dispatch = useDispatch()
    const date = new Date()
    const time = date.toLocaleTimeString('en-GB')
    const timeMod = parseInt(time.replace(/:/g, ''))
    const greeting = greetingMessage(timeMod)
    const [hoveredTask, setHoveredTask] = useState('')

    function greetingMessage(time) {
      if (time < 120000) {
        return 'Good morning'
      }
      else if (time >= 120000 && time < 175959) {
        return 'Good afternoon'
      }
      else if (time >= 180000) {
        return 'Good evening'
      }
    }
    
    useEffect(() => {
        if (taskType === 'current') {
            setTaskArr(allTasks.filter(task => !task.complete).reverse())
        } 
        else if (taskType === 'completed') {
            setTaskArr(allTasks.filter(task => task.complete).sort(function(a, b) {
                return b.completedAt - a.completedAt
            }))
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
        <div className={defaultTheme? 'sideBar darkSideBar' : 'sideBar lightSideBar'}>
          <div className={defaultTheme? 'taskTypeContainer darkTaskTypeContainer' : 'taskTypeContainer lightTaskTypeContainer'}>
              <span className='taskType' onClick={() => setTaskType('all')} style={taskType === 'all'? {color: 'white'} : {}}>All</span>
              <span className='taskType' onClick={() => setTaskType('current')} style={taskType === 'current'? {color: 'white'} : {}}>Current</span>
              <span className='taskType' onClick={() => setTaskType('completed')} style={taskType === 'completed'? {color: 'white'} : {}}>Completed</span>
          </div>
          {allTasks && allTasks.length !== 0?
          <ul className='taskList'>
             {taskArr.map((task) => (
                  <li key={task.uid} 
                      className={defaultTheme? 'darkTaskListItem taskListItem' : 'lightTaskListItem taskListItem'}
                      onMouseEnter={() => setHoveredTask(task.uid)}
                      onMouseLeave={() => setHoveredTask('')}
                      onClick={() => task.complete? deleteTask(task.uid) : markAsComplete(task.uid)}>
                    {hoveredTask === task.uid?
                      <span>{task.complete? 'click to remove' : 'click to complete'}</span>
                    :
                    <>
                      <span className='taskDesc' style={task.complete? {opacity: '0.5'} : {}}>{task.desc}</span>
                      {!task.complete && (
                        <div className='taskStatus' />
                      )}
                    </>
                    }
                  </li>
              ))}
          </ul>
          :
          <div className='emptyTaskList'>
            <span className='emptyTaskListItem'>{`${greeting} ${username}`}</span>
            <span className='emptyTaskListItem'>Add a task to begin</span>
          </div>
          }
        </div>
    )
}
