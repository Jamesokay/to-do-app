import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { clearTasks } from '../tasksSlice'

export default function NavBar() {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const dispatch = useDispatch()

    const signOut = (e) => {
        e.preventDefault()
        setUser(null)
        dispatch(clearTasks())
        navigate('/')
    }

    return (
        <div className='navBar'>
           <span className='navLeft'>Settings</span> 
           <span className='navCentre'>To Do App</span>
           <span className='navRight' onClick={signOut}>Logout</span>
        </div>
    )
}
