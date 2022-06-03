import { useRef } from 'react'

export default function AddToDo() {
    const newToDo = useRef()
    return (
        <div className='addToDo'>
          <form className='toDoForm'>
            <input
              placeholder='What needs doing?'
              type='text'
              required
              className='toDoInput'
              ref={newToDo}
            />
            <button className='addToDoButton'>Add</button>
          </form>
            
        </div>
    )
}
