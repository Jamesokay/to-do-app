import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../tasksSlice'

export default function AddToDo() {
    const newTask = useRef()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({desc: newTask.current.value}))
        newTask.current.value = ''
    }

    return (
        <div className='addToDo'>
          <form className='toDoForm' onSubmit={handleSubmit}>
            <input
              placeholder='What needs doing?'
              type='text'
              required
              className='toDoInput'
              ref={newTask}
            />
            <button className='addToDoButton'>Add</button>
          </form>
            
        </div>
    )
}
