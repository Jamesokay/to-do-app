import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../userSlice'

export default function AddToDo() {
    const newTask = useRef()
    const dispatch = useDispatch()
    const defaultTheme = useSelector(state => state.user.defaultTheme)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({desc: newTask.current.value}))
        newTask.current.value = ''
    }

    return (
        <div className='addToDo'>
          <form className='toDoForm' onSubmit={handleSubmit} spellCheck='false'>
            <input
              placeholder='What needs doing?'
              type='text'
              required
              className={defaultTheme? 'toDoInput lightText' : 'toDoInput darkText'}
              ref={newTask}
            />
            <button className={defaultTheme? 'addToDoButton darkThemeButton' : 'addToDoButton lightThemeButton'}>Add</button>
          </form>
            
        </div>
    )
}
